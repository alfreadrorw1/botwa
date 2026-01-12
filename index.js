const { 
    default: makeWASocket, 
    useMultiFileAuthState,
    makeInMemoryStore,
    DisconnectReason,
    fetchLatestBaileysVersion,
    delay,
    Browsers
} = require('@whiskeysockets/baileys');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Buat interface untuk input terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fungsi untuk pertanyaan input
const question = (query) => new Promise((resolve) => rl.question(query, resolve));

// Import plugin loader
const PluginLoader = require('./plugins');

class WhatsAppBot {
    constructor() {
        this.sock = null;
        this.authFolder = './auth_info';
        this.isConnected = false;
        this.pairingCode = null;
        this.userNumber = null;
        this.pluginLoader = null;
        this.store = makeInMemoryStore({ logger: { level: 'warn' } });
    }

    // Inisialisasi koneksi
    async initialize() {
        try {
            console.clear();
            console.log('='.repeat(60));
            console.log('🤖 WHATSAPP BOT WITH PLUGIN SYSTEM');
            console.log('='.repeat(60) + '\n');
            
            // Minta input nomor WhatsApp
            this.userNumber = await question('📱 Masukkan nomor WhatsApp (format: 628xxxx): ');
            
            // Validasi format nomor
            if (!this.userNumber.startsWith('62')) {
                console.log('\n❌ Format nomor salah! Harus diawali dengan 62 (contoh: 628123456789)');
                console.log('⚠️  Pastikan menggunakan format internasional\n');
                process.exit(1);
            }

            // Load atau buat auth state
            const { state, saveCreds } = await useMultiFileAuthState(this.authFolder);
            
            // Fetch versi terbaru Baileys
            const { version } = await fetchLatestBaileysVersion();
            console.log(`\n📦 Menggunakan WA v${version.join('.')}`);
            
            // Load plugin terlebih dahulu
            console.log('🔌 Memuat plugin...');
            this.pluginLoader = new PluginLoader();
            await this.pluginLoader.loadAll();
            console.log(`✅ ${this.pluginLoader.getPluginCount()} plugin dimuat\n`);
            
            // Buat socket WhatsApp
            this.sock = makeWASocket({
                version,
                logger: { level: 'warn' },
                printQRInTerminal: false,
                browser: Browsers.ubuntu('Chrome'),
                auth: state,
                generateHighQualityLinkPreview: true,
                getMessage: async (key) => {
                    if (this.store) {
                        const msg = await this.store.loadMessage(key.remoteJid, key.id);
                        return msg?.message || undefined;
                    }
                    return { conversation: 'Hello' };
                }
            });

            // Handle credentials update
            this.sock.ev.on('creds.update', saveCreds);

            // Inject store ke socket
            this.store.bind(this.sock.ev);
            
            // Load store dari file
            this.store.readFromFile('./baileys_store.json');
            
            // Simpan store secara berkala
            setInterval(() => {
                this.store.writeToFile('./baileys_store.json');
            }, 30000);

            // Setup event handlers
            this.setupEventHandlers();

        } catch (error) {
            console.error('\n❌ Gagal menginisialisasi bot:', error.message);
            process.exit(1);
        }
    }

    // Setup semua event handler
    setupEventHandlers() {
        // Handle koneksi
        this.sock.ev.on('connection.update', async (update) => {
            await this.handleConnectionUpdate(update);
        });

        // Handle pesan masuk
        this.sock.ev.on('messages.upsert', async (m) => {
            await this.handleIncomingMessage(m);
        });

        // Handle error
        this.sock.ev.on('error', (error) => {
            console.error('❌ Socket Error:', error.message);
        });
    }

    // Handle update koneksi
    async handleConnectionUpdate(update) {
        const { connection, lastDisconnect, qr } = update;
        
        if (qr) {
            console.log('⚠️  QR Code terdeteksi (tidak digunakan)');
        }

        if (connection === 'close') {
            await this.handleDisconnection(lastDisconnect);
        } else if (connection === 'open') {
            await this.handleSuccessfulConnection();
        }
        
        // Handle pairing code
        if (update.pairingCode) {
            this.pairingCode = update.pairingCode;
            this.showPairingInstructions();
        }
    }

    // Handle disconnection
    async handleDisconnection(lastDisconnect) {
        const shouldReconnect = lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;
        
        console.log('\n⚠️  Koneksi terputus:', lastDisconnect?.error?.message || 'Unknown error');
        
        if (shouldReconnect) {
            console.log('🔄 Mencoba menyambung kembali dalam 5 detik...');
            await delay(5000);
            this.reconnect();
        } else {
            console.log('❌ Logged out dari server');
            console.log('💡 Hapus folder "auth_info" untuk login ulang');
            process.exit(1);
        }
    }

    // Handle successful connection
    async handleSuccessfulConnection() {
        console.log('\n' + '='.repeat(60));
        console.log('✅ BERHASIL TERHUBUNG KE WHATSAPP!');
        console.log('='.repeat(60));
        
        const user = this.sock.user;
        console.log(`👤 Login sebagai: ${user?.name || user?.id}`);
        console.log(`📱 Nomor: ${this.userNumber}`);
        
        this.isConnected = true;
        this.showBotInstructions();
    }

    // Show pairing instructions
    showPairingInstructions() {
        console.log('\n' + '🔐'.repeat(30));
        console.log('🔑 KODE PAIRING:');
        console.log(`📋 ${this.pairingCode}`);
        console.log('🔐'.repeat(30));
        console.log('\n📱 CARA PAIRING:');
        console.log('1. Buka WhatsApp di HP');
        console.log('2. Tap ⋮ (titik tiga) → Linked Devices');
        console.log('3. Tap "Link a Device"');
        console.log('4. Masukkan kode di atas');
        console.log('5. Tunggu hingga terhubung\n');
    }

    // Show bot instructions
    showBotInstructions() {
        console.log('\n🎯 PERINTAH YANG TERSEDIA:');
        
        const commands = this.pluginLoader.getAllCommands();
        if (commands.length > 0) {
            commands.forEach(cmd => {
                console.log(`  ${cmd.command} → ${cmd.description}`);
            });
        } else {
            console.log('  (Belum ada plugin yang dimuat)');
        }
        
        console.log('\n📝 INFO:');
        console.log('  • Bot akan merespon pesan dengan prefix "."');
        console.log('  • Session tersimpan di folder "auth_info"');
        console.log('  • Tekan Ctrl+C untuk keluar');
        console.log('='.repeat(60) + '\n');
    }

    // Handle incoming message
    async handleIncomingMessage(m) {
        try {
            const msg = m.messages[0];
            
            // Skip jika bukan pesan baru atau pesan dari diri sendiri
            if (!msg.message || msg.key.fromMe || m.type !== 'notify') {
                return;
            }

            const from = msg.key.remoteJid;
            const sender = msg.pushName || 'Unknown';
            
            // Extract text dari pesan
            const messageText = this.extractMessageText(msg);
            
            // Cek jika pesan dimulai dengan prefix "."
            if (messageText && messageText.startsWith('.')) {
                const command = messageText.toLowerCase();
                console.log(`\n📩 Pesan dari ${sender} (${from}): ${messageText}`);
                
                // Eksekusi command melalui plugin loader
                const response = await this.pluginLoader.executeCommand(command, {
                    sock: this.sock,
                    message: msg,
                    from: from,
                    sender: sender,
                    text: messageText
                });
                
                if (response) {
                    console.log(`✅ Membalas ke ${sender}`);
                }
            }
            
        } catch (error) {
            console.error('❌ Error handling message:', error.message);
        }
    }

    // Extract text dari berbagai jenis pesan
    extractMessageText(msg) {
        if (msg.message?.conversation) {
            return msg.message.conversation;
        }
        if (msg.message?.extendedTextMessage?.text) {
            return msg.message.extendedTextMessage.text;
        }
        if (msg.message?.imageMessage?.caption) {
            return msg.message.imageMessage.caption;
        }
        if (msg.message?.videoMessage?.caption) {
            return msg.message.videoMessage.caption;
        }
        return '';
    }

    // Reconnect method
    async reconnect() {
        console.log('🔄 Menghubungkan ulang...');
        try {
            await this.initialize();
        } catch (error) {
            console.error('❌ Gagal reconnect:', error.message);
            process.exit(1);
        }
    }

    // Cleanup sebelum keluar
    async cleanup() {
        console.log('\n\n👋 Menutup bot...');
        
        // Tutup readline
        rl.close();
        
        // Tutup koneksi socket
        if (this.sock) {
            try {
                await this.sock.end();
                console.log('✅ Koneksi ditutup dengan baik');
            } catch (error) {
                console.error('❌ Error saat menutup koneksi:', error.message);
            }
        }
        
        process.exit(0);
    }
}

// Main function
async function main() {
    const bot = new WhatsAppBot();
    
    // Handle exit signals
    ['SIGINT', 'SIGTERM'].forEach(signal => {
        process.on(signal, () => bot.cleanup());
    });
    
    process.on('uncaughtException', (error) => {
        console.error('\n❌ Error tidak terduga:', error.message);
        bot.cleanup();
    });
    
    process.on('unhandledRejection', (reason, promise) => {
        console.error('\n❌ Promise rejection tidak tertangaki:', reason);
    });
    
    try {
        await bot.initialize();
    } catch (error) {
        console.error('\n❌ Gagal menjalankan bot:', error.message);
        process.exit(1);
    }
}

// Jalankan bot
if (require.main === module) {
    console.clear();
    main();
}

module.exports = WhatsAppBot;