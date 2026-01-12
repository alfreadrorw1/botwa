/**
 * Plugin Ping-Pong
 * Contoh plugin sederhana untuk merespon .ping
 */

module.exports = {
    // Nama plugin
    name: 'Ping Plugin',
    
    // Deskripsi plugin
    description: 'Membalas .ping dengan pong',
    
    // Command yang digunakan
    command: '.ping',
    
    // Handler function
    handler: async (context) => {
        const { sock, from, sender } = context;
        
        try {
            // Kirim balasan
            await sock.sendMessage(from, {
                text: `🏓 pong\n\nHai ${sender}! Bot aktif dan berjalan dengan baik.`
            });
            
            // Tambahkan delay kecil
            await new Promise(resolve => setTimeout(resolve, 100));
            
            return true;
        } catch (error) {
            console.error('❌ Error di plugin ping:', error.message);
            
            // Coba kirim error message
            try {
                await sock.sendMessage(from, {
                    text: '❌ Gagal mengirim balasan, coba lagi nanti.'
                });
            } catch (sendError) {
                console.error('❌ Gagal mengirim error message:', sendError.message);
            }
            
            return false;
        }
    }
};