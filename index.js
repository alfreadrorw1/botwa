require('./settings');
const fs = require('fs');
const pino = require('pino');
const path = require('path');
const chalk = require('chalk');
const readline = require('readline');
const { Boom } = require('@hapi/boom');
const qrcode = require('qrcode-terminal');
const NodeCache = require('node-cache');
const { exec } = require('child_process');
const { parsePhoneNumber } = require('awesome-phonenumber');
const { 
    default: makeWASocket, 
    useMultiFileAuthState, 
    Browsers, 
    DisconnectReason,
    makeCacheableSignalKeyStore,
    fetchLatestBaileysVersion 
} = require('@whiskeysockets/baileys');

// Membuat interface untuk input
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout 
});
const question = (text) => new Promise((resolve) => rl.question(text, resolve));

// Konfigurasi pairing
const pairingCode = process.argv.includes('--pairing-code');
let phoneNumber;
let pairingStarted = false;

// Inisialisasi cache untuk pesan
const msgRetryCounterCache = new NodeCache();

async function startSimpleBot() {
    console.log(chalk.green.bold('╔═══════════════════════════╗'));
    console.log(chalk.green.bold('║     SIMPLE WHATSAPP BOT   ║'));
    console.log(chalk.green.bold('╚═══════════════════════════╝'));
    
    // Load session auth state
    const { state, saveCreds } = await useMultiFileAuthState('./auth_info');
    
    // Fetch latest version of Baileys
    const { version } = await fetchLatestBaileysVersion();
    
    // Buat koneksi WhatsApp
    const sock = makeWASocket({
        version,
        logger: pino({ level: 'silent' }),
        printQRInTerminal: !pairingCode,
        auth: {
            creds: state.creds,
            keys: makeCacheableSignalKeyStore(state.keys, pino({ level: 'silent' })),
        },
        browser: Browsers.ubuntu('Chrome'),
        msgRetryCounterCache,
        generateHighQualityLinkPreview: true,
        syncFullHistory: false,
    });

    // Handle update credentials
    sock.ev.on('creds.update', saveCreds);

    // Handle pairing code jika diaktifkan
    if (pairingCode && !sock.authState.creds.registered) {
        if (!phoneNumber) {
            phoneNumber = await question(chalk.cyan('Masukkan nomor WhatsApp (contoh: 628123456789): '));
            phoneNumber = phoneNumber.replace(/[^0-9]/g, '');
            
            if (!parsePhoneNumber('+' + phoneNumber).valid) {
                console.log(chalk.red('Nomor tidak valid! Pastikan format benar.'));
                return process.exit(1);
            }
        }
    }

    // Handle connection update
    sock.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect, qr, isNewLogin } = update;
        
        if (qr && pairingCode && phoneNumber && !sock.authState.creds.registered && !pairingStarted) {
            setTimeout(async () => {
                pairingStarted = true;
                console.log(chalk.yellow('Meminta kode pairing...'));
                try {
                    const code = await sock.requestPairingCode(phoneNumber);
                    console.log(chalk.green('Kode Pairing Anda:'), chalk.bold(code));
                    console.log(chalk.yellow('Kode akan kedaluwarsa dalam 30 detik'));
                } catch (error) {
                    console.log(chalk.red('Gagal mendapatkan kode pairing:', error.message));
                }
            }, 3000);
        }
        
        if (connection === 'close') {
            const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
            console.log(chalk.yellow('Koneksi terputus, mencoba menghubungkan kembali...'));
            
            if (reason === DisconnectReason.loggedOut) {
                console.log(chalk.red('Anda telah logout, menghapus session...'));
                exec('rm -rf ./auth_info/*');
                startSimpleBot();
            } else {
                setTimeout(() => startSimpleBot(), 5000);
            }
        }
        
        if (connection === 'open') {
            console.log(chalk.green('✅ Berhasil terhubung ke WhatsApp!'));
            console.log(chalk.cyan(`Pengguna: ${sock.user?.name || 'Tidak diketahui'}`));
            console.log(chalk.cyan(`Nomor: ${sock.user?.id?.split(':')[0] || 'Tidak diketahui'}`));
            console.log(chalk.yellow('\nBot siap digunakan!'));
            console.log(chalk.yellow('Ketik "!ping" untuk mengecek bot'));
        }
        
        if (isNewLogin) {
            console.log(chalk.blue('⚠️  Login dari perangkat baru terdeteksi'));
        }
    });

    // Handle incoming messages
    sock.ev.on('messages.upsert', async ({ messages }) => {
        for (const message of messages) {
            // Skip jika bukan pesan baru
            if (message.key.fromMe || message.message?.protocolMessage) continue;
            
            const text = message.message?.conversation || 
                        message.message?.extendedTextMessage?.text || 
                        message.message?.imageMessage?.caption || '';
            
            const from = message.key.remoteJid;
            const sender = message.key.participant || from;
            
            // Log pesan masuk
            console.log(chalk.gray(`Pesan dari ${sender.split('@')[0]}: ${text.substring(0, 50)}${text.length > 50 ? '...' : ''}`));
            
            // Handle command !ping
            if (text.toLowerCase() === '!ping') {
                const start = Date.now();
                
                // Kirim pesan "Pinging..."
                const sentMsg = await sock.sendMessage(from, { 
                    text: '🏓 Pinging...' 
                });
                
                const latency = Date.now() - start;
                
                // Edit pesan dengan hasil ping
                await sock.sendMessage(from, { 
                    text: `🏓 Pong!\n⏱️ Latency: ${latency}ms\n📱 WhatsApp API: Active\n🤖 Bot Status: Online` 
                }, { 
                    edit: sentMsg.key 
                });
                
                console.log(chalk.green(`Ping request dari ${sender.split('@')[0]} - ${latency}ms`));
            }
            
            // Handle command !help atau !menu
            if (text.toLowerCase() === '!help' || text.toLowerCase() === '!menu') {
                const helpText = `🤖 *SIMPLE WHATSAPP BOT* 🤖

*Fitur yang tersedia:*
🔹 !ping - Cek status bot
🔹 !help - Menu bantuan ini
🔹 !info - Informasi bot

*Admin Commands:*
🔸 !restart - Restart bot
🔸 !shutdown - Matikan bot

_Dibuat dengan ❤️ menggunakan Baileys_`;
                
                await sock.sendMessage(from, { text: helpText });
            }
            
            // Handle command !info
            if (text.toLowerCase() === '!info') {
                const infoText = `📊 *INFORMASI BOT*

🤖 *Nama:* Simple WhatsApp Bot
⚡ *Versi:* 1.0.0
📚 *Library:* @whiskeysockets/baileys
👨‍💻 *Status:* Online
🕐 *Waktu:* ${new Date().toLocaleString('id-ID')}

_Bot sederhana dengan fitur dasar_`;
                
                await sock.sendMessage(from, { text: infoText });
            }
            
            // Handle command !restart (hanya untuk owner)
            if (text.toLowerCase() === '!restart' && sender === '628xxxxxxxxxx@s.whatsapp.net') {
                await sock.sendMessage(from, { text: '🔄 Restarting bot...' });
                console.log(chalk.yellow('Restarting bot...'));
                setTimeout(() => {
                    startSimpleBot();
                }, 2000);
            }
            
            // Handle command !shutdown (hanya untuk owner)
            if (text.toLowerCase() === '!shutdown' && sender === '628xxxxxxxxxx@s.whatsapp.net') {
                await sock.sendMessage(from, { text: '🛑 Shutting down bot...' });
                console.log(chalk.red('Shutting down bot...'));
                process.exit(0);
            }
        }
    });

    // Handle errors
    sock.ev.on('messaging-history.set', () => {
        console.log(chalk.blue('📚 Riwayat pesan dimuat'));
    });

    return sock;
}

// Fungsi untuk membersihkan sebelum exit
process.on('SIGINT', () => {
    console.log(chalk.yellow('\n🛑 Bot dimatikan...'));
    rl.close();
    process.exit(0);
});

// Mulai bot
startSimpleBot().catch(console.error);