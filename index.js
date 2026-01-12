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
const pino = require('pino');

// Buat interface untuk input terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fungsi untuk pertanyaan input
const question = (query) => new Promise((resolve) => rl.question(query, resolve));

// Import plugin loader
const PluginLoader = require('./plugins');

// Logger kustom yang lebih sederhana
const logger = pino({
    level: 'warn',
    timestamp: () => `,"time":"${new Date().toISOString()}"`
});

class WhatsAppBot {
    constructor() {
        this.sock = null;
        this.authFolder = './auth_info';
        this.isConnected = false;
        this.pairingCode = null;
        this.userNumber = null;
        this.pluginLoader = null;
        this.store = null;
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
            if (!this.userNumber.match(/^\d+$/)) {
                console.log('\n❌ Format nomor salah! Hanya angka yang diperbolehkan');
                console.log('⚠️  Contoh: 628123456789 atau 60123456789\n');
                process.exit(1);
            }

            console.log('\n⏳ Memproses...\n');
            
            // Load atau buat auth state
            const { state, saveCreds } = await useMultiFileAuthState(this.authFolder);
            
            // Fetch versi terbaru Baileys
            const { version } = await fetchLatestBaileysVersion();
            console.log(`📦 Menggunakan WA v${version.join('.')}`);
            
            // Load plugin terlebih dahulu
            console.log('🔌 Memuat plugin...');
            this.pluginLoader = new PluginLoader();
            await this.pluginLoader.loadAll();
            console.log(`✅ ${this.pluginLoader.getPluginCount()} plugin dimuat\n`);
            
            // Inisialisasi store dengan logger yang lebih sederhana
            this.store = makeInMemoryStore();
            
            // Buat socket WhatsApp dengan konfigurasi minimal
            this.sock = makeWASocket({
                version,
                logger: logger,
                printQRInTerminal: false,
                browser: Browsers.ubuntu('Chrome'),
                auth: state,
                markOnlineOnConnect: false,
                syncFullHistory: false,
                generateHighQualityLinkPreview: false,
                shouldIgnoreJid: jid => jid?.endsWith('@broadcast')
            });

            // Handle credentials update
            this.sock.ev.on('creds.update', saveCreds);

            // Inject store ke socket
            if (this.store) {
                this.store.bind(this.sock.ev);
                
                // Load store dari file jika ada
                if (fs.existsSync('./baileys_store.json')) {
                    try {
                        this.store.readFromFile('./baileys_store.json');
                    } catch (error) {
                        console.log('⚠️  Gagal membaca store, membuat baru...');
                    }
                }
                
                // Simpan store secara berkala
                setInterval(() => {
                    try {
                        this.store.writeToFile('./baileys_store.json');
                    } catch (error) {
                        // Ignore store write errors
                    }
                }, 30000);
            }

            // Setup event handlers
            this.setupEventHandlers();

        } catch (error) {
            console.error('\n❌ Gagal menginisialisasi bot:', error.message);
            if (error.stack) {
                console.error('📋 Stack trace:', error.stack);
            }
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
        const statusCode = lastDisconnect?.error?.output?.statusCode;
        const shouldReconnect = statusCode !== DisconnectReason.loggedOut;
        
        console.log('\n⚠️  Koneksi terputus:', lastDisconnect?.error?.message || 'Unknown error');
        console.log(`📊 Status code: ${statusCode || 'unknown'}`);
        
        if (shouldReconnect) {
            console.log('🔄 Mencoba menyambung kembali dalam 5 detik...');
            await delay(5000);
            await this.reconnect();
        } else {
            console.log('\n❌ Logged out dari server');
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
        
        // Juga tampilkan kode di box terpisah
        console.log('╔' + '═'.repeat(28) + '╗');
        console.log('║' + ' '.repeat(28) + '║');
        console.log(`║      ${this.pairingCode}       ║`);
        console.log('║' + ' '.repeat(28) + '║');
        console.log('╚' + '═'.repeat(28) + '╝\n');
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
                const command = messageText.toLowerCase().trim();
                console.log(`\n📩 [${new Date().toLocaleTimeString()}] ${sender}: ${messageText}`);
                
                // Eksekusi command melalui plugin loader
                const response = await this.pluginLoader.executeCommand(command, {
                    sock: this.sock,
                    message: msg,
                    from: from,
                    sender: sender,
                    text: messageText
                });
                
                if (response) {
                    console.log(`✅ [${new Date().toLocaleTimeString()}] Membalas ke ${sender}`);
                }
            }
            
        } catch (error) {
            console.error('❌ Error handling message:', error.message);
        }
    }

    // Extract text dari berbagai jenis pesan
    extractMessageText(msg) {
        try {
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
            if (msg.message?.documentMessage?.caption) {
                return msg.message.documentMessage.caption;
            }
            return '';
        } catch (error) {
            return '';
        }
    }

    // Reconnect method
    async reconnect() {
        console.log('🔄 Menghubungkan ulang...');
        try {
            // Cleanup socket lama
            if (this.sock) {
                try {
                    await this.sock.end();
                } catch (e) {
                    // Ignore
                }
                this.sock = null;
            }
            
            // Inisialisasi ulang
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
        if (rl && typeof rl.close === 'function') {
            rl.close();
        }
        
        // Tutup koneksi socket
        if (this.sock) {
            try {
                await this.sock.end();
                console.log('✅ Koneksi ditutup dengan baik');
            } catch (error) {
                // Ignore close errors
            }
        }
        
        // Simpan store terakhir
        if (this.store) {
            try {
                this.store.writeToFile('./baileys_store.json');
            } catch (error) {
                // Ignore store write errors
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
        process.on(signal, () => {
            console.log(`\n📶 Signal ${signal} diterima`);
            bot.cleanup();
        });
    });
    
    process.on('uncaughtException', (error) => {
        console.error('\n❌ Uncaught Exception:', error.message);
        if (error.stack) {
            console.error('Stack:', error.stack);
        }
        bot.cleanup();
    });
    
    process.on('unhandledRejection', (reason, promise) => {
        console.error('\n❌ Unhandled Rejection:', reason);
    });
    
    try {
        await bot.initialize();
    } catch (error) {
        console.error('\n❌ Gagal menjalankan bot:', error.message);
        if (error.stack) {
            console.error('Stack:', error.stack);
        }
        process.exit(1);
    }
}

// Jalankan bot
if (require.main === module) {
    main();
}

module.exports = WhatsAppBot;