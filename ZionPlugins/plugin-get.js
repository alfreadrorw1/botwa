const fs = require("fs")

let handler = async (m, { Zion, isOwner, reply, text }) => {
if (!isOwner) return reply(global.mess.owner)
if (!text) return m.reply("namafile plugins nya")
if (!text.endsWith(".js")) return m.reply("Nama file harus berformat .js")
if (!fs.existsSync("./ZionPlugins/" + text.toLowerCase())) return m.reply("File plugins tidak ditemukan!")
let res = await fs.readFileSync("./ZionPlugins/" + text.toLowerCase())
return m.reply(`${res.toString()}`)
}

handler.command = ["getp", "gp", "getplugins", "getplugin"]

module.exports = handler