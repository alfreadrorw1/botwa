const fs = require('fs');
const path = require('path');

class PluginLoader {
    constructor() {
        this.plugins = [];
        this.pluginsDir = path.join(__dirname);
        this.commands = [];
    }

    // Load semua plugin
    async loadAll() {
        try {
            // Cari semua file .js di folder plugins (kecuali index.js)
            const files = fs.readdirSync(this.pluginsDir)
                .filter(file => file.endsWith('.js') && file !== 'index.js');
            
            for (const file of files) {
                await this.loadPlugin(file);
            }
            
            console.log(`📂 Plugin ditemukan: ${files.length} file`);
        } catch (error) {
            console.error('❌ Gagal memuat plugin:', error.message);
            throw error;
        }
    }

    // Load plugin individual
    async loadPlugin(filename) {
        try {
            const pluginPath = path.join(this.pluginsDir, filename);
            const pluginModule = require(pluginPath);
            
            // Validasi plugin
            if (this.validatePlugin(pluginModule)) {
                const pluginInfo = {
                    name: pluginModule.name || filename.replace('.js', ''),
                    description: pluginModule.description || 'No description',
                    command: pluginModule.command,
                    handler: pluginModule.handler,
                    filename: filename
                };
                
                this.plugins.push(pluginInfo);
                
                // Tambahkan ke daftar command
                if (pluginModule.command) {
                    this.commands.push({
                        command: pluginModule.command,
                        description: pluginModule.description || 'No description'
                    });
                }
                
                console.log(`  ✅ ${pluginInfo.name} dimuat`);
            } else {
                console.log(`  ⚠️  Plugin ${filename} tidak valid, dilewati`);
            }
        } catch (error) {
            console.error(`  ❌ Gagal memuat plugin ${filename}:`, error.message);
        }
    }

    // Validasi plugin
    validatePlugin(plugin) {
        return plugin && 
               typeof plugin.handler === 'function' && 
               plugin.command && 
               typeof plugin.command === 'string';
    }

    // Eksekusi command
    async executeCommand(command, context) {
        try {
            // Cari plugin yang sesuai dengan command
            const plugin = this.plugins.find(p => 
                command.startsWith(p.command.toLowerCase())
            );
            
            if (plugin) {
                console.log(`🔧 Menjalankan plugin: ${plugin.name}`);
                return await plugin.handler(context);
            }
            
            // Jika command tidak ditemukan
            if (command.startsWith('.')) {
                await context.sock.sendMessage(context.from, {
                    text: `❌ Command tidak dikenali.\n\n📋 Gunakan: ${this.commands.map(c => c.command).join(', ')}`
                });
            }
            
            return false;
        } catch (error) {
            console.error(`❌ Error eksekusi command ${command}:`, error.message);
            
            // Kirim error ke user
            try {
                await context.sock.sendMessage(context.from, {
                    text: '❌ Terjadi error saat memproses command'
                });
            } catch (sendError) {
                console.error('❌ Gagal mengirim error message:', sendError.message);
            }
            
            return false;
        }
    }

    // Dapatkan semua command
    getAllCommands() {
        return this.commands;
    }

    // Dapatkan jumlah plugin
    getPluginCount() {
        return this.plugins.length;
    }

    // Reload semua plugin
    async reloadAll() {
        console.log('🔄 Reload plugin...');
        this.plugins = [];
        this.commands = [];
        
        // Clear cache
        Object.keys(require.cache).forEach(key => {
            if (key.includes(this.pluginsDir) && !key.includes('index.js')) {
                delete require.cache[key];
            }
        });
        
        await this.loadAll();
        console.log('✅ Plugin direload');
    }
}

module.exports = PluginLoader;