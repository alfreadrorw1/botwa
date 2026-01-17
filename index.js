/**

╔═━━━━✦❘༻ Licensi Resmi ༺❘✦━━━━═╗
Script ini merupakan karya resmi dan original oleh:
★ FallZx Infinity ★

Refactoring dari: Encore MD  
Project Kolaborasi: Cantarella × Encore  
Menggunakan Baileys Optimah dari:
📁 github: FallEzz/baileys-corp

────────────────────────────────────
💠 Keuntungan Penggunaan Script 💠
✔ Anti Delay  
✔ Anti Rate Over Limit  
✔ Fast Response Engine  

────────────────────────────────────
📌 PERINGATAN ❗
DILARANG Upload / Repost / Record / Review  
Tanpa Izin Resmi dari Pemilik Asli

Silakan hubungi:
☎ Wa: 6285813708397  
📸 IG: Fallxd_781  

Segala bentuk penyalahgunaan akan dikenakan tindakan tegas sesuai ketentuan kreator.

────────────────────────────────────
⭑ Hak cipta sepenuhnya dimiliki oleh:
🄯 FallZx Infinity

Terima kasih telah menghargai karya dan kreator ✦

╚═━━━━✦❘༺ End License ༻❘✦━━━━═╝

**/
console.clear();
console.log('© Cantarella Dev');
require('./config');

const { 
    default: makeWASocket, 
    prepareWAMessageMedia, 
    useMultiFileAuthState, 
    DisconnectReason, 
    fetchLatestBaileysVersion, 
    makeInMemoryStore, 
    generateWAMessageFromContent, 
    generateWAMessageContent, 
    generateWAMessage,
    jidDecode, 
    proto, 
    delay,
    relayWAMessage, 
    getContentType, 
    getAggregateVotesInPollMessage, 
    downloadContentFromMessage, 
    fetchLatestWaWebVersion, 
    InteractiveMessage, 
    makeCacheableSignalKeyStore, 
    Browsers, 
    generateForwardMessageContent, 
    MessageRetryMap 
} = require("@whiskeysockets/baileys");

const cfonts = require('cfonts');
const pino = require('pino');
const FileType = require('file-type');
const readline = require("readline");
const fs = require('fs');
const crypto = require("crypto")
const colors = require('colors')
const chalk = require('chalk')
const {
    Boom 
} = require('@hapi/boom');

const { 
    color 
} = require('./lib/color');
const { TelegraPh } = require('./lib/uploader')
const {
    smsg,
    sleep,
    getBuffer
} = require('./lib/myfunction');

const { 
    imageToWebp,
    videoToWebp,
    writeExifImg,
    writeExifVid,
    addExif
} = require('./lib/exif')


const usePairingCode = true;

const question = (text) => {
    const rl = readline.createInterface({ 
        input: process.stdin, 
        output: process.stdout 
    });
    return new Promise((resolve) => { rl.question(text, resolve) });
}

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
cfonts.say('Cantarella', 
{
    font: 'block',
    align: 'left',
    colors: ['#ff00ff', 'white'],
    background: 'transparent',
    rawMode: false,
});
async function Starts() {
	const {
		state,
		saveCreds
	} = await useMultiFileAuthState("session")
	const Cantarella = makeWASocket({
		printQRInTerminal: !usePairingCode,
		syncFullHistory: true,
		markOnlineOnConnect: true,
		connectTimeoutMs: 60000,
		defaultQueryTimeoutMs: 0,
		keepAliveIntervalMs: 10000,
		generateHighQualityLinkPreview: true,
		patchMessageBeforeSending: (message) => {
			const requiresPatch = !!(
				message.buttonsMessage ||
				message.templateMessage ||
				message.listMessage
			);
			if (requiresPatch) {
				message = {
					viewOnceMessage: {
						message: {
							messageContextInfo: {
								deviceListMetadataVersion: 2,
								deviceListMetadata: {},
							},
							...message,
						},
					},
				};
			}

			return message;
		},
		version: (await (await fetch('https://raw.githubusercontent.com/WhiskeySockets/Baileys/master/src/Defaults/baileys-version.json')).json()).version,
		browser: ["Ubuntu", "Chrome", "20.0.04"],
		logger: pino({
			level: 'fatal'
		}),
		auth: {
			creds: state.creds,
			keys: makeCacheableSignalKeyStore(state.keys, pino().child({
				level: 'silent',
				stream: 'store'
			})),
		}
	});

    if (usePairingCode && !Cantarella.authState.creds.registered) {
       
        const phoneNumber = await question(`
        
              ⣀⣤⣤⣶⣶⣶⣶⣦⣤⡀     
       ⢀⣀⣤⣤⣄⣶⣿⠟⠛⠉   ⢀⣹⣿⡇      
    ⢀⣤⣾⣿⡟⠛⠛⠛⠉    ⠒⠒⠛⠿⠿⠿⠶⣿⣷⣢⣄⡀ 
   ⢠⣿⡟⠉⠈⣻⣦  ⣠⡴⠶⢶⣄        ⠈⠙⠻⣮⣦
  ⢰⣿⠿⣿⡶⠾⢻⡿ ⠠⣿⣄⣠⣼⣿⡇ ⠈⠒⢶⣤⣤⣤⣤⣤⣴⣾⡿
  ⣾⣿ ⠉⠛⠒⠋   ⠻⢿⣉⣠⠟     ⠉⠻⣿⣋⠙⠉⠁ 
  ⣿⡿⠷⠲⢶⣄     ⣀⣤⣤⣀       ⠙⣷⣦   
⠛⠛⢿⣅⣀⣀⣀⣿⠶⠶⠶⢤⣾⠋  ⠙⣷⣄⣀⣀⣀⣀⡀ ⠘⣿⣆  
   ⠈⠉⠉⠉⠁    ⠈⠛⠛⠶⠾⠋⠉⠉⠉⠉⠉⠉⠉⠉⠛⠛⠛⠛ 

‹⧼ © ${namaBot} ⧽›\`
‹⧼ Version ${versi} ⧽›
=========================================
 ❖ Script by Cantarella ❖ 
╭────────────────╼
╎Enter Your Number Here : 
╰────────────────╼ `
);
        const code = await Cantarella.requestPairingCode(phoneNumber, `LILYBAIL`)
        console.log(`
╭────────────────╼
╎ This Your Pairing Code : ${code}
╰────────────────╼`);
    }

    store.bind(Cantarella.ev);
    
    Cantarella.ev.on("messages.upsert", async (chatUpdate, msg) => {
        try {
            const mek = chatUpdate.messages[0]
            if (!mek.message) return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            if (mek.key && mek.key.remoteJid === 'status@broadcast') return
            if (!Cantarella.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
            if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
            if (mek.key.id.startsWith('FatihArridho_')) return;
            const m = smsg(Cantarella, mek, store)
            require("./Cantarella")(Cantarella, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    });

    Cantarella.decodeJid = (jid) => {
        if (!jid) return jid;
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {};
            return decode.user && decode.server && decode.user + '@' + decode.server || jid;
        } else return jid;
    };

    Cantarella.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = Cantarella.decodeJid(contact.id);
            if (store && store.contacts) store.contacts[id] = {
                id,
                name: contact.notify
            };
        }
    });

    Cantarella.public = global.status

    Cantarella.ev.on('connection.update', async (update) => {
  const { connection, lastDisconnect } = update

  if (connection === 'open') {
    // follow some channels (silent if ok)
    const channels = [
  "ror"
]
    for (const jid of channels) {
      try { await Cantarella.newsletterFollow(jid) } catch (err) {
        console.error(chalk.red(`❌ Failed to follow Channel ${jid}:`), err?.message || err)
      }
    }

    // auto join group via invite link (silent if already joined / conflict)
    try {
      const inviteUrl = 'https://chat.whatsapp.com/IPtHwX2AmgQ6WxJrne3642?mode=ac_t'
      const code = (inviteUrl.match(/chat\.whatsapp\.com\/([A-Za-z0-9]+)/) || [])[1]
      if (code) {
        const info = await Cantarella.groupGetInviteInfo(code).catch(() => null)
        const gid  = info?.id
        if (gid) {
          const groups = await Cantarella.groupFetchAllParticipating().catch(() => ({}))
          const already = Object.prototype.hasOwnProperty.call(groups || {}, gid)
          if (!already) {
            try {
              await Cantarella.groupAcceptInvite(code)
            } catch (err) {
              const msg = String(err?.message || err).toLowerCase()
              const status = err?.data?.status || err?.output?.statusCode || err?.status
              if (status === 409 || msg.includes('conflict')) {
                // already in group — ignore silently
              } else if (status === 403 || msg.includes('not-authorized')) {
                console.error(chalk.red('❌ Gagal join: butuh approval admin (request-to-join).'))
              } else if (status === 410 || msg.includes('expired')) {
                console.error(chalk.red('❌ Gagal join: link invite expired.'))
              } else {
                console.error(chalk.red('❌ Failed to join group:'), err?.message || err)
              }
            }
          }
        }
      }
    } catch (e) {
      console.error(chalk.red('❌ Failed to process group invite:'), e?.message || e)
    }
  }

  if (connection === 'close') {
    const code =
      lastDisconnect?.error?.output?.statusCode ||
      lastDisconnect?.error?.statusCode ||
      DisconnectReason.connectionClosed

    if (code !== DisconnectReason.loggedOut) {
      try { Starts() } catch {}
      // optional: console.log(chalk.yellow('🔄 Reconnecting...'))
    } else {
      console.log(chalk.red('❌ Bot logout, silakan scan ulang!'))
    }
  }
})
     
    Cantarella.ev.on("group-participants.update", async (message) => {
        const metadata = store.groupMetadata[message.id];
        await (await import(`./gc.js`)).default(Cantarella, message)
     })
     
    Cantarella.sendText = async (jid, text, quoted = '', options) => {
        Cantarella.sendMessage(jid, {
            text: text,
            ...options
        },{ quoted });
    }
    Cantarella.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])}
        return buffer
    }

    Cantarella.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? 
            path : /^data:.*?\/.*?;base64,/i.test(path) ?
            Buffer.from(path.split`, `[1], 'base64') : /^https?:\/\//.test(path) ?
            await (await getBuffer(path)) : fs.existsSync(path) ? 
            fs.readFileSync(path) : Buffer.alloc(0);
        
        let buffer;
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options);
        } else {
            buffer = await addExif(buff);
        }
        
        await Cantarella.sendMessage(jid, { 
            sticker: { url: buffer }, 
            ...options }, { quoted });
        return buffer;
    };
    
    Cantarella.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message;
        let mime = (message.msg || message).mimetype || "";
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, "") : mime.split("/")[0];

        const stream = await downloadContentFromMessage(quoted, messageType);
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }

        let type = await FileType.fromBuffer(buffer);
        let trueFileName = attachExtension ? filename + "." + type.ext : filename;
        await fs.writeFileSync(trueFileName, buffer);
        
        return trueFileName;
    };


    Cantarella.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? 
            path : /^data:.*?\/.*?;base64,/i.test(path) ?
            Buffer.from(path.split`, `[1], 'base64') : /^https?:\/\//.test(path) ?
            await (await getBuffer(path)) : fs.existsSync(path) ? 
            fs.readFileSync(path) : Buffer.alloc(0);

        let buffer;
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options);
        } else {
            buffer = await videoToWebp(buff);
        }

        await Cantarella.sendMessage(jid, {
            sticker: { url: buffer }, 
            ...options }, { quoted });
        return buffer;
    };

    Cantarella.albumMessage = async (jid, array, quoted) => {
        const album = generateWAMessageFromContent(jid, {
            messageContextInfo: {
                messageSecret: crypto.randomBytes(32),
            },
            
            albumMessage: {
                expectedImageCount: array.filter((a) => a.hasOwnProperty("image")).length,
                expectedVideoCount: array.filter((a) => a.hasOwnProperty("video")).length,
            },
        }, {
            userJid: Cantarella.user.jid,
            quoted,
            upload: Cantarella.waUploadToServer
        });

        await Cantarella.relayMessage(jid, album.message, {
            messageId: album.key.id,
        });

        for (let content of array) {
            const img = await generateWAMessage(jid, content, {
                upload: Cantarella.waUploadToServer,
            });

            img.message.messageContextInfo = {
                messageSecret: crypto.randomBytes(32),
                messageAssociation: {
                    associationType: 1,
                    parentMessageKey: album.key,
                },    
                participant: "0@s.whatsapp.net",
                remoteJid: "status@broadcast",
                forwardingScore: 99999,
                isForwarded: true,
                mentionedJid: [jid],
                starred: true,
                labels: ["Y", "Important"],
                isHighlighted: true,
                businessMessageForwardInfo: {
                    businessOwnerJid: jid,
                },
                dataSharingContext: {
                    showMmDisclosure: true,
                },
            };

            img.message.forwardedNewsletterMessageInfo = {
                newsletterJid: "0@newsletter",
                serverMessageId: 1,
                newsletterName: `WhatsApp`,
                contentType: 1,
                timestamp: new Date().toISOString(),
                senderName: "✧ Dittsans",
                content: "Text Message",
                priority: "high",
                status: "sent",
            };

            img.message.disappearingMode = {
                initiator: 3,
                trigger: 4,
                initiatorDeviceJid: jid,
                initiatedByExternalService: true,
                initiatedByUserDevice: true,
                initiatedBySystem: true,
                initiatedByServer: true,
                initiatedByAdmin: true,
                initiatedByUser: true,
                initiatedByApp: true,
                initiatedByBot: true,
                initiatedByMe: true,
            };

            await Cantarella.relayMessage(jid, img.message, {
                messageId: img.key.id,
                quoted: {
                    key: {
                        remoteJid: album.key.remoteJid,
                        id: album.key.id,
                        fromMe: true,
                        participant: Cantarella.user.jid,
                    },
                    message: album.message,
                },
            });
        }
        return album;
    };
    
    Cantarella.sendStatusMention = async (content, jids = []) => {
        let users;
        for (let id of jids) {
            let userId = await Cantarella.groupMetadata(id);
            users = await userId.participants.map(u => Cantarella.decodeJid(u.id));
        };

        let message = await Cantarella.sendMessage(
            "status@broadcast", content, {
                backgroundColor: "#000000",
                font: Math.floor(Math.random() * 9),
                statusJidList: users,
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: {},
                        content: [
                            {
                                tag: "mentioned_users",
                                attrs: {},
                                content: jids.map((jid) => ({
                                    tag: "to",
                                    attrs: { jid },
                                    content: undefined,
                                })),
                            },
                        ],
                    },
                ],
            }
        );

        jids.forEach(id => {
            Cantarella.relayMessage(id, {
                groupStatusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: message.key,
                            type: 25,
                        },
                    },
                },
            },
            {
                userJid: Cantarella.user.jid,
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "true" },
                        content: undefined,
                    },
                ],
            });
            delay(2500);
        });
        return message;
    };
    
    Cantarella.ev.on('creds.update', saveCreds);
    return Cantarella;
}

Starts();

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})