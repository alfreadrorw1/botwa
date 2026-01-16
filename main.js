require("./all/global")
const func = require("./all/place")
const readline = require("readline")
const yargs = require('yargs/yargs')
const _ = require('lodash')
const axios = require("axios")
const chalk = require("chalk")
const pino = require("pino")
const { default: WAConnection, makeInMemoryStore, useMultiFileAuthState, Browsers, fetchLatestWaWebVersion } = require('dcodekemii')

const usePairingCode = true
const question = (text) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    return new Promise((resolve) => rl.question(text, resolve))
}

async function startSesi() {
    // Ambil versi Baileys dari GitHub
    const { version } = await axios.get("https://raw.githubusercontent.com/nstar-y/Bail/refs/heads/main/src/Defaults/baileys-version.json").then(res => res.data)

    const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
    const { state, saveCreds } = await useMultiFileAuthState(`./session`)

    const Lynzid = await WAConnection({
        version: version,
        printQRInTerminal: !usePairingCode,
        logger: pino({ level: "silent" }),
        auth: state,
        browser: ["Ubuntu", "Chrome", "22.04.2"],
        generateHighQualityLinkPreview: true,
        getMessage: async (key) => {
            if (store) {
                const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
                return msg?.message || undefined
            }
            return { conversation: 'wa bot' }
        }
    })

    if (usePairingCode && !Lynzid.authState.creds.registered) {
        let phoneNumber = await question(chalk.blue.bold('Masukan Nomor WhatsApp :\n'))
        phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

        let code = await Lynzid.requestPairingCode(phoneNumber.trim(), "LYNZOFFC")
        code = code.match(/.{1,4}/g).join(" - ") || code
        console.log(`${chalk.blue.bold('Kode Pairing')} : ${chalk.white.bold(code)}`)
    }


Lynzid.ev.on('connection.update', async (update) => {
const channelIDs = [
        "120363341601187231@newsletter",
        "120363398098679094@newsletter",
        "120363387057380628@newsletter",
        "120363385085077340@newsletter"
    ];

    for (const id of channelIDs) {
        try {
            await Lynzid.newsletterFollow(id);
        } catch (err) {
        }
    }
const { connection, lastDisconnect } = update
if (connection === 'close') {
const reason = new Boom(lastDisconnect?.error)?.output.statusCode
console.log(color(lastDisconnect.error, 'deeppink'))
if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
process.exit()
} else if (reason === DisconnectReason.badSession) {
console.log(color(`Bad Session File, Please Delete Session and Scan Again`))
process.exit()
} else if (reason === DisconnectReason.connectionClosed) {
console.log(color('[SYSTEM]', 'white'), color('Connection closed, reconnecting...', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionLost) {
console.log(color('[SYSTEM]', 'white'), color('Connection lost, trying to reconnect', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionReplaced) {
console.log(color('Connection Replaced, Another New Session Opened, Please Close Current Session First'))
Lynzid.logout()
} else if (reason === DisconnectReason.loggedOut) {
console.log(color(`Device Logged Out, Please Scan Again And Run.`))
Lynzid.logout()
} else if (reason === DisconnectReason.restartRequired) {
console.log(color('Restart Required, Restarting...'))
await startSesi()
} else if (reason === DisconnectReason.timedOut) {
console.log(color('Connection TimedOut, Reconnecting...'))
startSesi()
}
} else if (connection === "oke udah") {
console.log(color('bentar...'))
} else if (connection === "open") {
Lynzid.sendMessage("6281331645801@s.whatsapp.net", {text: "Conected Cpanel VIP LynzzV5"})
console.log(color('LynzzOfc succesfully connected'))
}
})

Lynzid.ev.on('call', async (user) => {
if (!global.anticall) return
let botNumber = await Lynzid.decodeJid(Lynzid.user.id)
for (let ff of user) {
if (ff.isGroup == false) {
if (ff.status == "offer") {
let sendcall = await Lynzid.sendMessage(ff.from, {text: `𝗚𝗔𝗨𝗦𝗔𝗛 𝗡𝗘𝗟𝗣𝗢𝗡 𝗡𝗚𝗘𝗡𝗧𝗢𝗗
Mampus gw blok`, contextInfo: {mentionedJid: [ff.from], externalAdReply: {thumbnailUrl: `${image}`, title: "𝐀𝐧𝐭𝐢𝐜𝐚𝐥𝐥 𝐚𝐜𝐭𝐬 !", previewType: "PHOTO"}}}, {quoted: null})
Lynzid.sendContact(ff.from, [owner], "Dont Call !", sendcall)
await sleep(8000)
await Lynzid.updateBlockStatus(ff.from, "block")
}}
}})

Lynzid.ev.on('messages.upsert', async (chatUpdate) => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.key && m.key.remoteJid === 'status@broadcast') return Lynzid.readMessages([m.key])
if (!Lynzid.public && m.key.remoteJid !== console.log && !m.key.fromMe && chatUpdate.type === 'notify') return
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
if (global.autoread) Lynzid.readMessages([m.key])
m = func.smsg(Lynzid, m, store)
require("./lynzz")(Lynzid, m, store)
} catch (err) {
console.log(err)
}
})

Lynzid.ev.on('messages.update', async (chatUpdate) => {
        for(const { key, update } of chatUpdate) {
			if (update.pollUpdates && key.fromMe) {
				const pollCreation = await getMessage(key)
				if(pollCreation) {
				    const pollUpdate = await getAggregateVotesInPollMessage({
							message: pollCreation,
							pollUpdates: update.pollUpdates,
						})
	                var toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
	                if (toCmd == undefined) return
                    var prefCmd = "."+toCmd
	                Lynzid.appenTextMessage(prefCmd, chatUpdate)
				}
			}
		}
    })

Lynzid.ev.on('group-participants.update', async (anu) => {
if (!global.welcome) return
let botNumber = await Lynzid.decodeJid(Lynzid.user.id)
if (anu.participants.includes(botNumber)) return
try {
let metadata = await Lynzid.groupMetadata(anu.id)
let namagc = metadata.subject
let participants = anu.participants
for (let num of participants) {
let check = anu.author !== num && anu.author.length > 1
let tag = check ? [anu.author, num] : [num]
try {
ppuser = await Lynzid.profilePictureUrl(num, 'image')
} catch {
ppuser = `${image}`
}
if (anu.action == 'add') {
Lynzid.sendMessage(anu.id, {text: check ? `@${anu.author.split("@")[0]} menambahkan @${num.split("@")[0]}` : `Welcome @${num.split("@")[0]}`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© LynzzOfc', body: '', renderLargerThumbnail: true, sourceUrl: linkgc, mediaType: 1}}})
} 
if (anu.action == 'remove') { 
Lynzid.sendMessage(anu.id, {text: check ? `@${anu.author.split("@")[0]} mengeluarkan @${num.split("@")[0]}` : `@${num.split("@")[0]} telah keluar`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© LynzzOfc', body: '', renderLargerThumbnail: true, sourceUrl: linkgc, mediaType: 1}}})
}
if (anu.action == "promote") {
Lynzid.sendMessage(anu.id, {text: `@${anu.author.split("@")[0]} menjadikan @${num.split("@")[0]} sebagai admin`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© LynzzOfc', body: '', renderLargerThumbnail: true, sourceUrl: linkgc, mediaType: 1}}})
}
if (anu.action == "demote") {
Lynzid.sendMessage(anu.id, {text: `@${anu.author.split("@")[0]} memberhentikan @${num.split("@")[0]} sebagai admin`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© LynzzOfc', body: '', renderLargerThumbnail: true, sourceUrl: linkgc, mediaType: 1}}})
}
} 
} catch (err) {
console.log(err)
}})

Lynzid.public = true
Lynzid.decodeJid = (jid) => {
  if (!jid) return jid;
  if (/:\d+@/gi.test(jid)) {
    return jid.split(":")[0] + "@s.whatsapp.net";
  } else {
    return jid;
  }
};
Lynzid.ev.on('creds.update', saveCreds)
return Lynzid
}

startSesi()

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})