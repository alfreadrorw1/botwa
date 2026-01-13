// BASE DI BUAT OLEH SyeraMD ( Bot Edogawa Senq)
// JOIN MURSC? CHAT 081330558152
// SCRIPT INI DARI MURSC DI ATAS

const fs = require("fs");
const { getContentType, generateMessageID, jidDecode, downloadContentFromMessage, generateWAMessageFromContent, generateWAMessageContent, proto } = require("baileys");
const axios = require("axios");
const baileys = require("baileys");
const os = require("os");
const https = require("https");
const Jimp = require("jimp");
const cheerio = require("cheerio");
const ffmpeg = require("fluent-ffmpeg");
const webp = require("node-webpmux");
const magic = require("magic-bytes.js");
const FormData = require("form-data");
const { createCanvas, GlobalFonts, loadImage } = require("@napi-rs/canvas");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const path = require("path");
const img = new webp.Image();
const process = require("process");
const AdmZip = require("adm-zip");
const { Client } = require("ssh2");
const bochil = require("@bochilteam/scraper-games");
const { exec } = require("child_process");
const { drawBrat, getTimeOn, msToTime, getShop, drawBoardTtc, drawSuit, addWaterMark } = require("../services/funcBug.js");
const { translate } = require("@vitalets/google-translate-api");
GlobalFonts.registerFromPath("./assets/fonta/Arial.ttf", "Arial");
GlobalFonts.registerFromPath("./assets/fonts/Fontspring-DEMO-coupletcf-bold.otf", "CoupletBold");

module.exports = async (store, message, senq, context) => {
	try {
	  const pingMs = performance.now()
	  
	  if (global?.sinkron) {
	    console.log("Sinkronisasi Selesai silahkan ketik .menu pada bot")
	    global.sinkron = false;
	  }

		require("../config/config.js");
		global.socks = senq;
		// GLOBAL
		const lines = botStyle;

		// START UP
		const {
		  SnackVideo,
		  sfileDownload,
		  enc,
		  hdr,
		  fakeDev,
		  encHard,
		  rchApikey,
			sena,
			sen,
			getValidButtonReply,
			getValidButtonList,
			downloadToBuffer,
			sendThumb,
			toAudio,
			getBuffer,
			imageToUrl,
			imageToWebp,
			videoToWebp,
			exif,
			example,
			addRewards,
			message,
			metadata,
			db,
			pterodactyl, 
			mType,
			body,
			args,
			parts,
			text,
			prefix,
			command,
			qmsg,
			qType,
			qBody,
			qSender,
			qId,
			media,
			mime,
			botJid,
			botNumberJid,
			botNumber,
			jid,
			read,
			isBaileys,
			isGroup,
			senderJid,
			sender,
			isBotNumber,
			groups,
			isOwner,
			isPrem,
			isMurbug,
			profil,
			isLimit,
			isAdmin,
			isBotAdmin,
			sleep,
			onlyBotNumber,
			onlyOwner,
			onlyPrem,
			onlyMurbug,
			onlyAdmin,
			onlyBotAdmin,
			onlyGrup,
			needLimit,
			decode,
			add,
			saveDb,
			sendMedia,
			randomName,
			random,
			pickRandom,
			pinterest,
			ephoto,
			mpegToOpus,
			formatRupiah,
			mediafireDl,
			getTimeH,
			getTimeS,
			cpanel5,
			cpanel4,
			cpanel3,
			cpanel2,
			cpanel,
			caseTop,
			addUser,
			caseText,
			caseCekCek,
			caseSound,
			caseSticker,
			caseSticker2,
			caseCvAudio,
			caseAnime,
			caseTranslate,
			caseSad,
			fixNumber,
			movePlayerMc,
			loadWorld,
			buy,
			updateFarmAndKolamLevels,
			updatePet,
			reduceLimit,
			react,
			caseKane,
			folderToZip,
			addFolder,
			toVideo,
			clearFolder,
			imageToVideo,
			posToIndex,
			indexToPos,
			removePlayer,
			addPlayer,
			nextTurn,
			movePlayer,

			hexToRgba,
			parseCell,
			drawBoardUlarTangga,
			getPlayerImage,
			getMetadata,
			mHeader,
			ucapan,
			handleError,
			searchJid,
			qList
		} = context;
		const m = message.messages[0];
		if (!m || !m.message) return;

		const apikey = pterodactyl[1].api;
		const capikey = pterodactyl[1].client;
		const domain = pterodactyl[1].domain;

		const apikey2 = pterodactyl[2].api;
		const capikey2 = pterodactyl[2].client;
		const domain2 = pterodactyl[2].domain;

		const apikey3 = pterodactyl[3].api;
		const capikey3 = pterodactyl[3].client;
		const domain3 = pterodactyl[3].domain;

		const apikey4 = pterodactyl[4].api;
		const capikey4 = pterodactyl[4].client;
		const domain4 = pterodactyl[4].domain;

		const apikey5 = pterodactyl[5].api;
		const capikey5 = pterodactyl[5].client;
		const domain5 = pterodactyl[5].domain;

		// all function

		const qFake = typeQuoted === "null" ? null : qList[typeQuoted];

		if (db.autoreadchat && !isGroup) senq.readMessages([m.key]);
		if (db.autoreadgrub && isGroup) senq.readMessages([m.key]);
		if (db.autoreadsw && jid == "status@broadcast") senq.readMessages([m.key]);

async function getIdCh(link){
  let res = link.replace("https://whatsapp.com/channel/", "");
      let data = await senq.newsletterMetadata("invite", res);
      return data.id
}
function getLocalTimeString() {
      const now = new Date();
      const yyyy = now.getFullYear();
      const mm = String(now.getMonth() + 1).padStart(2, "0");
      const dd = String(now.getDate()).padStart(2, "0");
      const hh = String(now.getHours()).padStart(2, "0");
      const min = String(now.getMinutes()).padStart(2, "0");
      return `${yyyy}-${mm}-${dd} ${hh}:${min}`;
    }

async function bentarYa(){
  await sen(`Tunggu bentar ya . . .`)
}


		// OBJECT GAMES

		Object.entries(db.sewa).forEach(async ([a, b]) => {
			let dated = new Date();
			let now = dated.setHours(dated.getHours() + 0);

			if (now > b.format) {
				let txt = `Waktu sewa nomor bot telah berakhir!, bot akan keluar dari grub!`;
				await sen(txt, false, a);
				await sleep(2000);
				await senq.groupLeave(a);
			}
		});

		if (isGroup) {
			if (db.user?.[sender]) {
				if (profil.afk?.status && profil.afk?.jid === jid) {
					let oldD = new Date(profil.afk.time);
					let newD = new Date(getTimeOn(0));
					let gap = (newD - oldD) / 1000;
					let time = msToTime(Math.floor(gap * 1000));
					let txt = `${b3}
${mHeader("AFK")}
${leftStyle} User      : @${sender.getNumber()}
${leftStyle} From Time : ${profil.afk.from}
${leftStyle} On Time   : ${getLocalTimeString()}
${leftStyle} Duration  : ${time}
${lines}
${b3}
${b3}
${mHeader("Alasan")}
${profil.afk.alasan}
${lines}
${b3}`;
					profil.afk.status = false;
					profil.afk.jid = "";
					profil.afk.time = "";
					profil.afk.alasan = "";
					if (Math.floor(gap * 1000) > profil.topAfk) profil.topAfk = Math.floor(gap * 1000);
					saveDb();
					await sen(txt);
				}
			}
		}
		
		const userTag = qSender || m.message?.[mType]?.contextInfo?.mentionedJid;

		
		if (db.user?.[userTag]) {
      if (db.user?.[userTag].afk.status) {
        if (db.user?.[userTag].afk.jid === jid) {
          if (!isBaileys) {
            let txt = `
${mHeader("AFK")}
${b3}
${leftStyle} User : ${db.user?.[userTag].name}
${leftStyle} From : ${db.user?.[userTag].afk.from}
${b3}
${mHeader("Alasan")}
${b3}
${db.user?.[userTag].afk.alasan}
${b3}
${lines}`;
            await sen(txt);
          }
        }
      }
    }

		senq.ularTangga = senq.ularTangga ? senq.ularTangga : JSON.parse(fs.readFileSync("./src/database/ular_tangga.json"));
		fs.writeFileSync("./src/database/ular_tangga.json", JSON.stringify(senq.ularTangga, null, 2));

		senq.tebakbendera = senq.tebakbendera ? senq.tebakbendera : {};
		if (jid in senq.tebakbendera) {
			let json = senq.tebakbendera[jid][1];
			if (body?.clear() == json.name.clear()) {
				var teks = `${b3}
${mHeader(`Congratulations`)}
${leftStyle} Games   : Tebak Bendera
${leftStyle} User    : @${sender?.getNumber()}
${leftStyle} Jawaban : ${json.name}
${botStyle}
${b3}
${b3}
${mHeader(`Rewards`)}
${leftStyle} Limit : ${formatRupiah(profil.limit)} +5
${leftStyle} Coin  : ${formatRupiah(profil.coin)} +10
${leftStyle} Exp   : ${formatRupiah(profil.exp)} +5
${botStyle}
${b3}`;

				await add("limit", 5);
				await add("coin", 10);
				await add("exp", 5);
				await sendMedia(json.img, teks, jid);
				clearTimeout(senq.tebakbendera[jid][3]);
				delete senq.tebakbendera[jid];
			}
		}

		senq.tebakkata = senq.tebakkata ? senq.tebakkata : {};
		if (jid in senq.tebakkata) {
			let json = senq.tebakkata[jid][1];
			if (body?.clear() == json.jawaban.clear()) {
				var teks = `${b3}
${mHeader(`Congratulations`)}
${leftStyle} Games   : Tebak Kata
${leftStyle} User    : @${sender?.getNumber()}
${leftStyle} Jawaban : ${body?.clear().capitalize()}
${botStyle}
${b3}
${b3}
${mHeader(`Soal`)}
${json.soal}
${botStyle}
${b3}
${b3}
${mHeader(`Rewards`)}
${leftStyle} Limit : ${formatRupiah(profil.limit)} +5
${leftStyle} Coin  : ${formatRupiah(profil.coin)} +10
${leftStyle} Exp   : ${formatRupiah(profil.exp)} +5
${botStyle}
${b3}`;

				await add("limit", 5);
				await add("coin", 10);
				await add("exp", 5);
				await sen(teks, jid, false);
				clearTimeout(senq.tebakkata[jid][3]);
				delete senq.tebakkata[jid];
			}
		}

		senq.tebakgambar = senq.tebakgambar ? senq.tebakgambar : {};
		if (jid in senq.tebakgambar) {
			let json = senq.tebakgambar[jid][1];
			if (body?.clear() == json.jawaban.clear()) {
				var teks = `${b3}
${mHeader(`Congratulations`)}
${leftStyle} Games   : TebakGambar
${leftStyle} User    : @${sender?.getNumber()}
${leftStyle} Jawaban : ${body?.clear().capitalize()}
${botStyle}
${b3}
${b3}
${mHeader(`Deskripsi`)}
${json.deskripsi}
${botStyle}
${b3}
${b3}
${mHeader(`Rewards`)}
${leftStyle} Limit : ${formatRupiah(profil.limit)} +5
${leftStyle} Coin  : ${formatRupiah(profil.coin)} +10
${leftStyle} Exp   : ${formatRupiah(profil.exp)} +5
${botStyle}
${b3}`;
				await add("coin", 10);
				await add("limit", 5);
				await add("exp", 5);

				await sendMedia(json.img, teks);
				clearTimeout(senq.tebakgambar[jid][3]);
				delete senq.tebakgambar[jid];
			}
		}

		senq.tictactoe = senq.tictactoe ? senq.tictactoe : {};

		senq.suit = senq.suit ? senq.suit : {};
		senq.tebaklove = senq.tebaklove ? senq.tebaklove : {};
		if (jid in senq.tebaklove) {
			let json = senq.tebaklove[jid][1];
			if (body?.clear() == json.jawaban.clear()) {
				var teks = `${b3}
${topStyle} Selamat kamu benar
${leftStyle} Games   : Tebak Love
${leftStyle} User    : @${sender?.getNumber()}
${leftStyle} Jawaban : ${body?.clear()}
${botStyle}
${b3}
${b3}
${topStyle} List Love
${json.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards
${leftStyle} Limit : ${formatRupiah(profil.limit)} +5
${leftStyle} Coin  : ${formatRupiah(profil.coin)} +10
${leftStyle} Exp   : ${formatRupiah(profil.exp)} +5
${botStyle}
${b3}`;

				add("limit", 5);
				add("coin", 10);
				add("exp", 5);

				sen(teks, jid, false);
				clearTimeout(senq.tebaklove[jid][3]);
				delete senq.tebaklove[jid];
			}
		}

		senq.tebakmobil = senq.tebakmobil ? senq.tebakmobil : {};
		if (jid in senq.tebakmobil) {
			let json = senq.tebakmobil[jid][1];
			if (body?.clear() == json.jawaban.clear()) {
				var teks = `${b3}
${topStyle} Selamat kamu benar
${leftStyle} Games   : Tebak Mobil
${leftStyle} User    : @${sender?.getNumber()}
${leftStyle} Jawaban : ${body?.clear()}
${botStyle}
${b3}
${b3}
${topStyle} List Mobil
${json.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards
${leftStyle} Limit : ${formatRupiah(profil.limit)} +5
${leftStyle} Coin  : ${formatRupiah(profil.coin)} +10
${leftStyle} Exp   : ${formatRupiah(profil.exp)} +5
${botStyle}
${b3}`;

				add("limit", 5);
				add("coin", 10);
				add("exp", 5);

				sen(teks, jid, false);
				clearTimeout(senq.tebakmobil[jid][3]);
				delete senq.tebakmobil[jid];
			}
		}

		senq.tebakwaktu = senq.tebakwaktu ? senq.tebakwaktu : {};
		if (jid in senq.tebakwaktu) {
			let json = senq.tebakwaktu[jid][1];
			if (body?.clear() == json.jawaban.clear()) {
				var teks = `${b3}
${topStyle} Selamat kamu benar
${leftStyle} Games   : Tebak Waktu
${leftStyle} User    : @${sender?.getNumber()}
${leftStyle} Jawaban : ${body?.clear()}
${botStyle}
${b3}
${b3}
${topStyle} List Jam
${json.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards
${leftStyle} Limit : ${formatRupiah(profil.limit)} +5
${leftStyle} Coin  : ${formatRupiah(profil.coin)} +10
${leftStyle} Exp   : ${formatRupiah(profil.exp)} +5
${botStyle}
${b3}`;

				add("limit", 5);
				add("coin", 10);
				add("exp", 5);

				sen(teks, jid, false);
				clearTimeout(senq.tebakwaktu[jid][3]);
				delete senq.tebakwaktu[jid];
			}
		}

		senq.tebakarah = senq.tebakarah ? senq.tebakarah : {};
		if (jid in senq.tebakarah) {
			let json = senq.tebakarah[jid][1];
			if (body?.clear() == json.jawaban.clear()) {
				var teks = `${b3}
${topStyle} Selamat kamu benar
${leftStyle} Games   : Tebak Arah
${leftStyle} User    : @${sender?.getNumber()}
${leftStyle} Jawaban : ${body?.clear()}
${botStyle}
${b3}
${b3}
${topStyle} List Arah
${json.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards
${leftStyle} Limit : ${formatRupiah(profil.limit)} +5
${leftStyle} Coin  : ${formatRupiah(profil.coin)} +10
${leftStyle} Exp   : ${formatRupiah(profil.exp)} +5
${botStyle}
${b3}`;

				add("limit", 5);
				add("coin", 10);
				add("exp", 5);

				sen(teks, jid, false);
				clearTimeout(senq.tebakarah[jid][3]);
				delete senq.tebakarah[jid];
			}
		}

		senq.tebakwarna = senq.tebakwarna ? senq.tebakwarna : {};
		if (jid in senq.tebakwarna) {
			let json = senq.tebakwarna[jid][1];
			if (body?.clear() == json.jawaban.clear()) {
				var teks = `${b3}
${topStyle} Selamat kamu benar
${leftStyle} Games   : Tebak Warna
${leftStyle} User    : @${sender?.getNumber()}
${leftStyle} Jawaban : ${body?.clear()}
${botStyle}
${b3}
${b3}
${topStyle} List Warna
${json.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards
${leftStyle} Limit : ${formatRupiah(profil.limit)} +5
${leftStyle} Coin  : ${formatRupiah(profil.coin)} +10
${leftStyle} Exp   : ${formatRupiah(profil.exp)} +5
${botStyle}
${b3}`;

				add("limit", 5);
				add("coin", 10);
				add("exp", 5);

				sen(teks, jid, false);
				clearTimeout(senq.tebakwarna[jid][3]);
				delete senq.tebakwarna[jid];
			}
		}

		senq.tebakbola = senq.tebakbola ? senq.tebakbola : {};
		if (jid in senq.tebakbola) {
			let json = senq.tebakbola[jid][1];
			if (body?.clear() == json.jawaban.clear()) {
				var teks = `${b3}
${topStyle} Selamat kamu benar
${leftStyle} Games   : Tebak Bola
${leftStyle} User    : @${sender?.getNumber()}
${leftStyle} Jawaban : ${body?.clear()}
${botStyle}
${b3}
${b3}
${topStyle} List Bola
${json.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards
${leftStyle} Limit : ${formatRupiah(profil.limit)} +5
${leftStyle} Coin  : ${formatRupiah(profil.coin)} +10
${leftStyle} Exp   : ${formatRupiah(profil.exp)} +5
${botStyle}
${b3}`;

				add("limit", 5);
				add("coin", 10);
				add("exp", 5);

				sen(teks, jid, false);
				clearTimeout(senq.tebakbola[jid][3]);
				delete senq.tebakbola[jid];
			}
		}

		senq.tebakprestasi = senq.tebakprestasi ? senq.tebakprestasi : {};
		if (jid in senq.tebakprestasi) {
			let json = senq.tebakprestasi[jid][1];
			if (body?.clear() == json.jawaban.clear()) {
				var teks = `${b3}
${topStyle} Selamat kamu benar
${leftStyle} Games   : Tebak Prestasi
${leftStyle} User    : @${sender?.getNumber()}
${leftStyle} Jawaban : ${body?.clear()}
${botStyle}
${b3}
${b3}
${topStyle} List Prestasi
${json.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards
${leftStyle} Limit : ${formatRupiah(profil.limit)} +5
${leftStyle} Coin  : ${formatRupiah(profil.coin)} +10
${leftStyle} Exp   : ${formatRupiah(profil.exp)} +5
${botStyle}
${b3}`;

				add("limit", 5);
				add("coin", 10);
				add("exp", 5);

				sen(teks, jid, false);
				clearTimeout(senq.tebakprestasi[jid][3]);
				delete senq.tebakprestasi[jid];
			}
		}

		senq.tebakbuku = senq.tebakbuku ? senq.tebakbuku : {};
		if (jid in senq.tebakbuku) {
			let json = senq.tebakbuku[jid][1];
			if (body?.clear() == json.jawaban.clear()) {
				var teks = `${b3}
${topStyle} Selamat kamu benar
${leftStyle} Games   : Tebak Buku
${leftStyle} User    : @${sender?.getNumber()}
${leftStyle} Jawaban : ${body?.clear()}
${botStyle}
${b3}
${b3}
${topStyle} List Buku
${json.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards
${leftStyle} Limit : ${formatRupiah(profil.limit)} +5
${leftStyle} Coin  : ${formatRupiah(profil.coin)} +10
${leftStyle} Exp   : ${formatRupiah(profil.exp)} +5
${botStyle}
${b3}`;

				add("limit", 5);
				add("coin", 10);
				add("exp", 5);

				sen(teks, jid, false);
				clearTimeout(senq.tebakbuku[jid][3]);
				delete senq.tebakbuku[jid];
			}
		}

		senq.tebakbulan = senq.tebakbulan ? senq.tebakbulan : {};
		if (jid in senq.tebakbulan) {
			let json = senq.tebakbulan[jid][1];
			if (body?.clear() == json.jawaban.clear()) {
				var teks = `${b3}
${topStyle} Selamat kamu benar
${leftStyle} Games   : Tebak Bulan
${leftStyle} User    : @${sender?.getNumber()}
${leftStyle} Jawaban : ${body?.clear()}
${botStyle}
${b3}
${b3}
${topStyle} List Bulan
${json.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards
${leftStyle} Limit : ${formatRupiah(profil.limit)} +5
${leftStyle} Coin  : ${formatRupiah(profil.coin)} +10
${leftStyle} Exp   : ${formatRupiah(profil.exp)} +5
${botStyle}
${b3}`;

				add("limit", 5);
				add("coin", 10);
				add("exp", 5);

				sen(teks, jid, false);
				clearTimeout(senq.tebakbulan[jid][3]);
				delete senq.tebakbulan[jid];
			}
		}

		senq.tebakgambar = senq.tebakgambar ? senq.tebakgambar : {};
		if (jid in senq.tebakgambar) {
			let json = senq.tebakgambar[jid][1];
			if (body?.clear() == json.jawaban.clear()) {
				var teks = `${b3}
${topStyle} Kamu Benar
${leftStyle} User    : @${sender?.getNumber()}
${leftStyle} Jawaban : ${json.jawaban}
${botStyle}
${b3}
${b3}
${topStyle} Rewards
${leftStyle} Limit   : ${formatRupiah(db.user[sender].limit)} +10
${leftStyle} Coin    : ${formatRupiah(db.user[sender].coin)} +10
${leftStyle} Exp     : ${formatRupiah(db.user[sender].exp)} +5
${botStyle}
${b3}`;
				addRewards("limit", 10);
				addRewards("coin", 10);
				addRewards("exp", 5);

				sen(teks);
				clearTimeout(senq.tebakgambar[jid][3]);
				delete senq.tebakgambar[jid];
			}
		}

		if (Object.keys(db.respon).includes(body?.clear())) {
			await senq.sendMessage(jid, { text: db.respon[body?.clear()] }, { quoted: m });
		}

		if (db.pengingatsholat) {
			let jadwalSholat = {
				shubuh: "04:39",
				terbit: "05:44",
				dhuha: "06:02",
				dzuhur: "12:02",
				ashar: "15:15",
				magrib: "17:52",
				isya: "19:01"
			};
			const datek = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
			const hours = datek.getHours();
			const minutes = datek.getMinutes();
			const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
			for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
				if (timeNow === waktu) {
					await senq.sendMessage(
						m.chat,
						{
							audio: {
								url: "https://media.vocaroo.com/mp3/1ofLT2YUJAjQ"
							},
							mimetype: "audio/mp4",
							ptt: true
						},
						{
							quoted: m
						}
					);
					db.pengingatsholat = false;
					saveDb();
					setTimeout(() => {
						db.pengingatsholat = true;
						saveDb();
					}, 60000);
				}
			}
		}

		if (body?.startsWith(prefix)) {
			let txtDebug = `

${mHeader("New Messages")}
${leftStyle} Sender : ${sender}
${leftStyle} SenderJid : ${senderJid}
${leftStyle} BotNumber : ${botNumber}
${leftStyle} BotNumberJid : ${botNumberJid}
${botStyle}

${mHeader("Info Message")}
${leftStyle} Command : ${command}
${leftStyle} Text    : ${text}
${leftStyle} Body    : ${body}
${botStyle}

`;
			console.log(txtDebug);

			if (db.autoban) {
				if (!senq?.cekban)
					senq.cekban = senq.cekban[sender] = {
						time: getTimeS(5),
						step: 1
					};

				if (senq.cekban[sender] < getTimeS(0)) {
					senq.cekban[sender].step += 1;
					if (senq.cekban[sender].step == 5) {
						db.blacklist.push(sender);
						saveDb();
						await sen(`@${sender.getNumber()} Kamu telah di ban di karnakan spam saat menggunakan bot!`);
					}
				}
			}

			if (!db.user?.[sender]) addUser(sender);
			saveDb();
			if (db.mode === "self" && !isBotNumber) return console.log(`Bot Di Self!`);
			if (db.mute.includes(jid) && !isBotNumber) return console.log(`Grub ${metadata?.[jid]?.subject} Di Mute!`);

			switch (command) {
				case "ceksocks":
					{
						senq.sendMessage(jid, {
							text: `${Object.keys(socks).join(",")}`
						});
					}
					break;
				case "xnxx":
					{
					}
					break;
				// add

case "s":
    {
      if (!/image|video/.test(mime))
        return await sen(
          `Maaf command ${prefix}${command} hanya bisa digunakan di caption foto atau video!`
        );
      let s = await imageToWebp(await downloadToBuffer(media));
      senq.sendMessage(jid, { sticker: s }, { quoted: qFake });
    }
    break;

case "stiker":
    {
      if (!/image|video/.test(mime))
        return await sen(
          `Maaf command ${prefix}${command} hanya bisa digunakan di caption foto atau video!`
        );
      let s = await imageToWebp(await downloadToBuffer(media));
      senq.sendMessage(jid, { sticker: s }, { quoted: qFake });
    }
    break;

case "sticker":
    {
      if (!/image|video/.test(mime))
        return await sen(
          `Maaf command ${prefix}${command} hanya bisa digunakan di caption foto atau video!`
        );
      let s = await imageToWebp(await downloadToBuffer(media));
      senq.sendMessage(jid, { sticker: s }, { quoted: qFake });
    }
    break;

case "jpm":
    {
      if (!isOwner)
        return await sen(
          "Maaf command tersebut hanya bisa di gunakan oleh owner!"
        );
      if (!text && !qBody) return example("text");
      const teks = text || qBody || "";
      const media_ = media ? await downloadToBuffer(media) : null;
      let total = 0;
      let af = metadata;
      let eg = Object.entries(af)
        .slice(0)
        .map((entry) => entry[1]);
      let fr = eg.filter((g) => {
        let botIsAdmin = g.participants.some(
          (i) => i.admin !== null && i.id === botNumber
        );
        return g.announce === false || botIsAdmin;
      });

      let gca = fr?.map((v) => v.id).filter((i) => !db.bljpm.includes(i));
      await sen(
        `Memproses mengirim Pesan ${media ? mime.split("/")[0] : "text"} ke ${
          gca.length
        } grub, di blacklist ${db.bljpm.length}`
      );

      global.isJpm = true;

      for (let gb of gca) {
        if (!isJpm) return sen(`Jpm berhasil di hentikan!`);
        if (media_) {
          if (/image/.test(mime)) {
            await senq.sendMessage(
              gb,
              {
                image: media_,
                caption: teks,
              },
              { quoted: qFake }
            );
          } else if (/video/.test(mime)) {
            await senq.sendMessage(
              gb,
              {
                video: media_,
                caption: teks,
              },
              { quoted: qFake }
            );
          } else if (/audio/.test(mime)) {
            await senq.sendMessage(
              gb,
              {
                audio: media_,

                ptt: true,
              },
              { quoted: qFake }
            );
          }
        } else {
          await senq.sendMessage(gb, {
            text: teks,
            contextInfo: {
              mentionedJid: [],
              forwardingScore: 9999,
              isForwarded: true,
            },
          });
        }
        total += 1;
        await sleep(10000);
      }

      let t = `Berhasil mengirim pesan ${
        media ? mime.split("/")[0] : "text"
      } ke ${total} grub!, , di blacklist ${db.bljpm.length}`;

      await sen(t);
    }
    break;

case "listgc":
    {
      if (!isOwner)
        return await sen(
          "Maaf command tersebut hanya bisa di gunakan oleh owner!"
        );
      let txt = ``;

      let p = Object.fromEntries(
        Object.entries(await senq.groupFetchAllParticipating()).sort(
          ([id, obj], [id2, obj2]) =>
            obj2.participants.length - obj.participants.length
        )
      );

      global.metadata = p;

      Object.keys(p).forEach((i) => {
        let gb = p[i];
        txt += `${b3}
${topStyle} Info Grub`;
        txt += `\n${leftStyle} Name    : ${gb.subject}`;
        txt += `\n${leftStyle} Total   : ${gb.participants.length} Mem`;
        txt += `\n${leftStyle} Id Grub : ${gb.id}`;
        txt += `
${botStyle}
  ${b3}`;
      });
      await sen(txt);
    }
    break;

case "jpmtag":
    {
      if (!isOwner)
        return await sen(
          "Maaf command tersebut hanya bisa di gunakan oleh owner!"
        );
      if (!text && !qBody) return example("text");
      const teks = text || qBody || "";
      const media_ = media ? await downloadToBuffer(media) : null;
      let total = 0;
      let af = metadata;
      let eg = Object.entries(af)
        .slice(0)
        .map((entry) => entry[1]);
      let fr = eg.filter((g) => {
        let botIsAdmin = g.participants.some(
          (i) => i.admin !== null && i.id === botNumber
        );
        return g.announce === false || botIsAdmin;
      });

      let gca = fr?.map((v) => v.id).filter((i) => !db.bljpm.includes(i));
      await sen(
        `Memproses mengirim Pesan ${media ? mime.split("/")[0] : "text"} ke ${
          gca.length
        } grub, di blacklist ${db.bljpm.length}`
      );

      global.isJpm = true;

      for (let gb of gca) {
        if (!isJpm) return sen(`Jpm berhasil di hentikan!`);
        if (media_) {
          if (/image/.test(mime)) {
            await senq.sendMessage(
              gb,
              {
                image: media_,
                caption: teks,
                mentions: af[gb].participants.map((i) => i.jid),
              },
              { quoted: qFake }
            );
          } else if (/video/.test(mime)) {
            await senq.sendMessage(
              gb,
              {
                video: media_,
                caption: teks,
                mentions: af[gb].participants.map((i) => i.jid),
              },
              { quoted: qFake }
            );
          } else if (/audio/.test(mime)) {
            await senq.sendMessage(
              gb,
              {
                audio: media_,
                ptt: true,
                mentions: af[gb].participants.map((i) => i.jid),
              },
              { quoted: qFake }
            );
          }
        } else {
          await senq.sendMessage(gb, {
            text: teks,
            mentions: af[gb].participants.map((i) => i.jid),
          });
        }
        total += 1;
        await sleep(10000);
      }

      let t = `Berhasil mengirim pesan ${
        media ? mime.split("/")[0] : "text"
      } ke ${total} grub!, di blacklist ${db.bljpm.length}`;

      await sen(t);
    }
    break;

case "jpmjeda":
    {
      if (!isOwner)
        return await sen(
          "Maaf command tersebut hanya bisa di gunakan oleh owner!"
        );
      let [jeda, txt] = text.split("|").map((i) => i.trim());
      if (!Number(jeda) || !txt) return example("jeda | text");
      const teks = txt || "";
      const media_ = media ? await downloadToBuffer(media) : null;
      let total = 0;
      let af = metadata;
      let eg = Object.entries(af)
        .slice(0)
        .map((entry) => entry[1]);
      let fr = eg.filter((g) => {
        let botIsAdmin = g.participants.some(
          (i) => i.admin !== null && i.id === botNumber
        );
        return g.announce === false || botIsAdmin;
      });

      let gca = fr?.map((v) => v.id).filter((i) => !db.bljpm.includes(i));
      await sen(`Memproses mengirim Pesan jeda ${jeda} ke ${gca.length}`);

      global.isJpm = true;

      for (let gb of gca) {
        if (!isJpm) return sen(`Jpm berhasil di hentikan!`);
        if (media_) {
          if (/image/.test(mime)) {
            await senq.sendMessage(
              gb,
              {
                image: media_,
                caption: teks,
              },
              { quoted: qFake }
            );
          } else if (/video/.test(mime)) {
            await senq.sendMessage(
              gb,
              {
                video: media_,
                caption: teks,
              },
              { quoted: qFake }
            );
          }
        } else {
          await senq.sendMessage(
            gb,
            {
              text: teks,
            },
            { quoted: qFake }
          );
        }
        total += 1;
        await sleep(Number(jeda));
      }

      let t = `Berhasil mengirim pesan jeda ${jeda} ke ${total} grub!`;

      await sen(t);
    }
    break;

case "pushkontak1":
    {
      if (!isOwner)
        return await sen(
          "Maaf command tersebut hanya bisa di gunakan oleh owner!"
        );
      if (!isGroup) return onlyGrup();
      if (!text) return example("text");
      let { subject, participants } = groups;
      let mem = participants
        .map((i) => i.jid)
        .filter((i) => i !== botNumberJid);

      await sen(`Memproses Pushkontak ke grub "${subject}" ${mem.length} mem`);

      global.isPush = true;

      for (let x of mem) {
        if (!isPush) return sen(`Pushkontak Berhasil di hentikan !`);
        await senq.sendMessage(x, { text: text });
        await sleep(5000);
      }
      await sen(`Berhasil Pushkontak ke grub "${subject}" ${mem.length} mem`);
    }
    break;

case "pushkontak2":
    {
      if (!isOwner)
        return await sen(
          "Maaf command tersebut hanya bisa di gunakan oleh owner!"
        );
      if (!isGroup) return onlyGrup();
      let [jd, txt] = text.split("|").map((i) => i.trim());
      if (!jd || !txt || !Number(jd) || Number(jd) === 0)
        return example("jeda |  text");
      let { subject, participants } = groups;
      let mem = participants
        .map((i) => i.jid)
        .filter((i) => i !== botNumberJid);

      await sen(
        `Memproses Pushkontak jeda ke grub "${subject}" ${mem.length} mem`
      );

      global.isPush = true;

      for (let x of mem) {
        if (!isPush) return sen(`Pushkontak Berhasil di hentikan !`);
        await senq.sendMessage(x, { text: txt });
        await sleep(Number(jd));
      }
      await sen(
        `Berhasil Pushkontak jeda ke grub "${subject}" ${mem.length} mem`
      );
    }
    break;

case "pushkontak3":
    {
      if (!isOwner)
        return await sen(
          "Maaf command tersebut hanya bisa di gunakan oleh owner!"
        );
      let [id, txt] = text.split("|").map((i) => i.trim());
      if (!id || !txt) return example("id grub | text");
      let { subject, participants } = metadata[id] || {
        participants: null,
        subject: null,
      };
      if (!subject || !participants)
        return await sen("Tolong masukan id grub yang ada di nomor kamu!");
      let mem = participants
        .map((i) => i.jid)
        .filter((i) => i !== botNumberJid);

      await sen(
        `Memproses Pushkontak id ke grub "${subject}" ${mem.length} mem`
      );

      global.isPush = true;

      for (let x of mem) {
        if (!isPush) return sen(`Pushkontak Berhasil di hentikan !`);
        await senq.sendMessage(x, { text: txt });
        await sleep(5000);
      }
      await sen(
        `Berhasil Pushkontak id ke grub "${subject}" ${mem.length} mem`
      );
    }
    break;

case "savekontak1":
    {
      if (!isOwner)
        return await sen(
          "Maaf command tersebut hanya bisa di gunakan oleh owner!"
        );
      if (!isGroup) return onlyGrup();
      let manuk = groups.participants
        .map((v) => v.jid)
        .filter((v) => v !== sender);

      manuk.forEach(async (i) => {
        db.contacts.push(i);
        saveDb();
      });

      try {
        const uniqueContacts = [...new Set(db.contacts)];
        const vcardContent = uniqueContacts
          .map((p, index) => {
            console.log(p);
            const vcard = [
              "BEGIN:VCARD",
              "VERSION:3.0",
              `FN:Kontak [${p?.split("@")?.[0]?.slice(9, 999)}]`,
              `TEL;type=CELL;type=VOICE;waid=${p?.split("@")?.[0]}:+${
                p.split("@")[0]
              }`,
              "END:VCARD",
              "",
            ]?.join("\n");

            saveDb();
            return vcard;
          })
          .join("");
        fs.writeFileSync("./src/database/contacts.vcf", vcardContent, "utf8");
      } catch (err) {
        await sen(err.toString());
      } finally {
        await senq.sendMessage(
          botNumberJid,
          {
            document: fs.readFileSync("./src/database/contacts.vcf"),
            fileName: "contacts.vcf",
            caption:
              "File kontak Berhasil di buat\nSilahkan di import agar nomor kesave",
            mimetype: "text/vcard",
            contextInfo: {
              mentionedJid: [sender],
              forwardingScore: 9999,
              isForwarded: true,
            },
          },
          {
            quoted: qFake,
          }
        );
        db.contacts.splice(0, db.contacts.length);
        saveDb();
      }
    }
    break;

case "savekontak2":
    {
      if (!isOwner)
        return await sen(
          "Maaf command tersebut hanya bisa di gunakan oleh owner!"
        );
      if (!isGroup) return onlyGrup();
      if (!text) return example("nama");
      let manuk = groups.participants
        .map((v) => v.jid)
        .filter((v) => v !== sender);

      manuk.forEach(async (i) => {
        db.contacts.push(i);
        saveDb();
      });

      try {
        const uniqueContacts = [...new Set(db.contacts)];
        const vcardContent = uniqueContacts
          .map((p, index) => {
            const vcard = [
              "BEGIN:VCARD",
              "VERSION:3.0",
              `FN:${text.trim()} [${p?.split("@")?.[0]?.slice(9, 999)}]`,
              `TEL;type=CELL;type=VOICE;waid=${p?.split("@")?.[0]}:+${
                p.split("@")[0]
              }`,
              "END:VCARD",
              "",
            ].join("\n");

            saveDb();
            return vcard;
          })
          .join("");
        fs.writeFileSync("./src/database/contacts.vcf", vcardContent, "utf8");
      } catch (err) {
        await sen(err.toString());
      } finally {
        await senq.sendMessage(
          botNumberJid,
          {
            document: fs.readFileSync("./src/database/contacts.vcf"),
            fileName: "contacts.vcf",
            caption:
              "File kontak Berhasil di buat\nSilahkan di import agar nomor kesave",
            mimetype: "text/vcard",
            contextInfo: {
              mentionedJid: [sender],
              forwardingScore: 9999,
              isForwarded: true,
            },
          },
          {
            quoted: qFake,
          }
        );
        db.contacts.splice(0, db.contacts.length);
        saveDb();
      }
    }
    break;

case "savekontak3":
    {
      if (!isOwner)
        return await sen(
          "Maaf command tersebut hanya bisa di gunakan oleh owner!"
        );
      if (!text) return example("id grub");
      let gb = metadata[text.trim()];
      if (!gb) return await sen(`Masukan id grub dari .listgc`);
      let manuk = gb.participants.map((v) => v.jid).filter((v) => v !== sender);

      manuk.forEach(async (i) => {
        db.contacts.push(i);
        saveDb();
      });

      try {
        const uniqueContacts = [...new Set(db.contacts)];
        const vcardContent = uniqueContacts
          .map((p, index) => {
            const vcard = [
              "BEGIN:VCARD",
              "VERSION:3.0",
              `FN:Kontak [${p.split("@")[0].slice(9, 999)}]`,
              `TEL;type=CELL;type=VOICE;waid=${p.split("@")[0]}:+${
                p.split("@")[0]
              }`,
              "END:VCARD",
              "",
            ].join("\n");

            saveDb();
            return vcard;
          })
          .join("");
        fs.writeFileSync("./src/database/contacts.vcf", vcardContent, "utf8");
      } catch (err) {
        await sen(err.toString());
      } finally {
        await senq.sendMessage(
          jid,
          {
            document: fs.readFileSync("./src/database/contacts.vcf"),
            fileName: "contacts.vcf",
            caption:
              "File kontak Berhasil di buat\nSilahkan di import agar nomor kesave",
            mimetype: "text/vcard",
            contextInfo: {
              mentionedJid: [sender],
              forwardingScore: 9999,
              isForwarded: true,
            },
          },
          {
            quoted: qFake,
          }
        );
        db.contacts.splice(0, db.contacts.length);
        saveDb();
      }
    }
    break;

case "add":
    {
      if (!isGroup) return onlyGrup();
      if (!isBotAdmin) return onlyBotAdmin();
      if (!isAdmin) return onlyAdmin();
      if (!text) return example("nomor");
      let nomor = await decode(text);
      if (!nomor)
        return await sen(
          `maaf @${sender?.getNumber()} tolong masukan nomor yang terdaftar di whatsapp!!`
        );

      let a = await senq.groupParticipantsUpdate(jid, [nomor], "add");

      if (a[0].status == 200)
        return await sen(`Berhasil Menambahkan @${nomor.getNumber()}`);
      if (a[0].status == 408)
        return await sen(
          `Gagal Menambahkan @${nomor.getNumber()}, Karna Target Tidak Mengizinkan Orang Lain Dapat Menambahkan Dirinya Ke Dalam Grup`
        );
      if (a[0].status == 409)
        return await sen(
          `Nomor @${nomor.getNumber()}, Sudah masuk ke dalam grub`
        );
      if (a[0].status == 403)
        return await sen(
          `Gagal Menambahkan @${nomor.getNumber()}, Karna Target Tidak Mengizinkan Orang Lain Dapat Menambahkan Dirinya Ke Dalam Grup`
        );
    }
    break;

case "del":
    {
      if (!isGroup) return onlyGrup();
      if (!isBotAdmin) return onlyBotAdmin();
      if (!isAdmin) return onlyAdmin();
      if (!qId) return await sen("Reply pesan yang ingin di hapus");
      await senq.sendMessage(jid, {
        delete: {
          remoteJid: jid,
          fromMe: false,
          id: qId,
          participant: qSender,
        },
      });
      await senq.sendMessage(jid, {
        delete: {
          remoteJid: jid,
          fromMe: true,
          id: m.key.id,
          participant: sender,
        },
      });
    }
    break;

case "kick":
    {
      if (!isGroup) return onlyGrup();
      if (!isBotAdmin) return onlyBotAdmin();
      if (!isAdmin) return onlyAdmin();
      if (!text && !qSender) return example("@tag");
      let user = qSender || (await decode(text));
      if (user === botNumber)
        return await sen("Maaf kak kamu tidak bisa megeluarkan nomor bot!");
      let { subject } = metadata[jid];
      try {
        await senq.groupParticipantsUpdate(jid, [user], "remove");
      } catch (e) {
        console.log(e);
        await sen(
          `gagal mengeluarkan @${user.getNumber()} dari grub ${subject}`
        );
      }
    }
    break;

case "open":
    {
      if (!isGroup) return onlyGrup();
      if (!isBotAdmin) return onlyBotAdmin();
      if (!isAdmin) return onlyAdmin();

      await senq.groupSettingUpdate(jid, "not_announcement");
    }
    break;

case "close":
    {
      if (!isGroup) return onlyGrup();
      if (!isBotAdmin) return onlyBotAdmin();
      if (!isAdmin) return onlyAdmin();

      await senq.groupSettingUpdate(jid, "announcement");
    }
    break;

case "linkgb":
    {
      if (!isGroup) return onlyGrup();
      if (!isBotAdmin) return onlyBotAdmin();
      if (!isAdmin) return onlyAdmin();
      let res = await senq.groupInviteCode(jid);
      let t = `Berhasil mengambil link grup: https://chat.whatsapp.com/${res}`;
      await sen(t);
    }
    break;

case "demote":
    {
      if (!isGroup) return onlyGrup();
      if (!isBotAdmin) return onlyBotAdmin();
      if (!isAdmin) return onlyAdmin();
      if (!text && !qSender) return example("@tag");
      let user = qSender || (await decode(text));
      let { subject } = metadata[jid];
      try {
        await senq.groupParticipantsUpdate(jid, [user], "demote");
        await sen(
          `Berhasil! @${user.getNumber()} telah dicabut dari admin di grup ${subject}.`
        );
      } catch (e) {
        console.log(e);
        await sen(
          `Gagal mencabut admin @${user.getNumber()} di grup ${subject}.`
        );
      }
    }
    break;

case "delppgb":
    {
      if (!isGroup) return onlyGrup();
      if (!isBotAdmin) return onlyBotAdmin();
      if (!isAdmin) return onlyAdmin();
      senq.removeProfilePicture(jid);
      await sen(`Berhasil menghapus foto profil grup.`);
    }
    break;

case "setdesc":
    {
      if (!isGroup) return onlyGrup();
      if (!isBotAdmin) return onlyBotAdmin();
      if (!isAdmin) return onlyAdmin();
      if (!text) return example("text", "selamat datang");
      senq.groupUpdateDescription(jid, text);
      await sen(`Berhasil mengganti deskripsi grup.`);
    }
    break;

case "promote":
    {
      if (!isGroup) return onlyGrup();
      if (!isBotAdmin) return onlyBotAdmin();
      if (!isAdmin) return onlyAdmin();
      if (!text && !qSender) return example("@tag");
      let user = qSender || (await decode(text));
      let { subject } = metadata[jid];
      try {
        await senq.groupParticipantsUpdate(jid, [user], "promote");
        await sen(
          `Berhasil! @${user.getNumber()} sekarang menjadi admin di grup ${subject}.`
        );
      } catch (e) {
        console.log(e);
        await sen(
          `Gagal menjadikan @${user.getNumber()} sebagai admin di grup ${subject}.`
        );
      }
    }
    break;

case "setppgc":
    {
      if (!isGroup) return onlyGrup();
      if (!isBotAdmin) return onlyBotAdmin();
      if (!isAdmin) return onlyAdmin();
      if (!/image/.test(mime))
        return await sen(
          "Gunakan command tersebut sambil reply foto / gunakan di caption foto"
        );
      let { subject } = metadata[jid];
      let y = await downloadToBuffer(media);
      await senq.updateProfilePicture(jid, y);
      await sen(`Berhasil mengganti foto profil grup ${subject}.`);
    }
    break;

case "setnamagb":
    {
      if (!isGroup) return onlyGrup();
      if (!isBotAdmin) return onlyBotAdmin();
      if (!isAdmin) return onlyAdmin();
      if (!text) return example("nama");
      senq.groupUpdateSubject(jid, text);
      await sen(`Berhasil mengganti nama grup menjadi ${text}.`);
    }
    break;

case "resetlinkgb":
    {
      if (!isGroup) return onlyGrup();
      if (!isBotAdmin) return onlyBotAdmin();
      if (!isAdmin) return onlyAdmin();
      senq.groupRevokeInvite(jid);
      await sen(`Berhasil mereset link grup.`);
    }
    break;

case "rvo":
    {
      if (!media)
        return await sen(
          "Gunakan command tersebut sambil reply view once message!"
        );
      let b = await downloadToBuffer(media);
      sendMedia(b);
    }
    break;

case "tourl":
    {
      if (!media)
        return await sen(
          `Maaf command ${prefix}${command} hanya bisa di gunakan di caption video, foto & audio!`
        );
      let buff = await downloadToBuffer(media);
      let url = await imageToUrl(buff);
      await sen(url);
    }
    break;

case "totalmember":
    {
      if (!isGroup) return onlyGrup();

      try {
        await sen(`${metadata[jid].participants.length}`);
      } catch (e) {
        await sen(e);
      }
    }
    break;

case "dadu":
    {
      let hasil = Math.floor(Math.random() * 6) + 1;
      await sen(`Hasil lempah dadu : ${hasil}`);
    }
    break;

case "tanya":
    {
      if (!text) return example("pertanyaan");

      let jawaban = [
        "iya",
        "nggak",
        "mungkin",
        "kayaknya sih iya",
        "bisa jadi",
        "kurang tau juga",
        "tergantung",
        "kadang iya kadang nggak",
        "ya gitu deh",
        "hmm bisa aja",
        "ga yakin juga",
        "percaya nggak percaya",
        "mungkin iya mungkin juga nggak",
        "siapa tau",
        "bisa iya bisa enggak",
        "nggak sepenuhnya",
        "kayaknya nggak deh",
        "ya... bisa jadi",
        "rahasia",
      ];

      let hasil = pickRandom(jawaban);
      let message = `${b3}
${topStyle} Tanya
${leftStyle} Pertanyaan : ${text.trim()}
${leftStyle} Jawaban    : ${hasil}
${botStyle}
${b3}`;
      await sen(message);
    }
    break;

case "waktu":
    {
      let waktu = new Date().toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      await sen(waktu);
    }
    break;

case "ramalan":
    {
      if (!text) return example("nama");
      var ramalan = [
        "Hari ini akan menjadi hari keberuntunganmu!",
        "Berhati-hatilah dengan keputusan besar hari ini.",
        "Ada seseorang yang merindukanmu diam-diam.",
        "Kesempatan baru akan datang, jangan ragu untuk mengambilnya.",
        "Tetap semangat meskipun ada tantangan kecil hari ini.",
      ];
      var hasil = ramalan[Math.floor(Math.random() * ramalan.length)];
      let message = `${b3}
${topStyle} ramalan
${leftStyle} Nama   : ${text.trim()}
${leftStyle} Result : ${hasil}
${botStyle}
${b3}`;
      await sen(message);
    }
    break;

case "prediksi":
    {
      var prediksi = [
        "Besok adalah hari keberuntunganmu.",
        "Akan ada kejutan manis di minggu depan.",
        "Seseorang diam-diam mengagumimu.",
        "Kamu akan menemukan solusi untuk masalah yang sedang dihadapi.",
        "Cobalah sesuatu yang baru, itu akan membawa kebahagiaan.",
      ];
      let hasil = prediksi[Math.floor(Math.random() * prediksi.length)];
      await sen(hasil);
    }
    break;

case "randomjoke":
    {
      const jokes = [
        "Kenapa komputer nggak bisa berbohong? Karena dia punya banyak cache.",
        "Apa yang kamu sebut dengan kucing yang tahu banyak? Kucing pintar!",
        "Saya baru saja kehilangan kunci saya... apakah kamu melihatnya di tempat parkir?",
        "Apa yang terjadi ketika dua atom bertemu? Mereka berikatan!",
        "Apa yang paling baik dilakukan saat kamu cemas? Nonton film atau baca buku!",
      ];

      let randomJoke = pickRandom(jokes);
      await sen(randomJoke);
    }
    break;

case "randomfact":
    {
      const facts = [
        "Fakta: Gajah adalah satu-satunya hewan yang tidak bisa melompat.",
        "Fakta: Bulan tidak memiliki atmosfer.",
        "Fakta: Manusia dan domba berbagi lebih dari 80% DNA yang sama.",
        "Fakta: Di dalam tubuh manusia ada lebih dari 60.000 mil pembuluh darah.",
        "Fakta: Kucing dapat membuat lebih dari 100 suara berbeda.",
      ];

      let randomFact = pickRandom(facts);
      await sen(randomFact);
    }
    break;

case "randomquote":
    {
      const quotes = [
        "Kehidupan ini singkat, jangan sia-siakan waktumu.",
        "KeBerhasilan adalah gabungan dari kegagalan dan ketekunan.",
        "Jangan berhenti sampai kamu bangga dengan dirimu.",
        "Bermimpilah setinggi langit, karena itu gratis!",
        "Jadilah versi terbaik dari dirimu sendiri.",
      ];

      let randomQuote = pickRandom(quotes);
      await sen(randomQuote);
    }
    break;

case "randomcolor":
    {
      const colors = [
        "Merah",
        "Biru",
        "Hijau",
        "Kuning",
        "Hitam",
        "Putih",
        "Abu-abu",
        "Coklat",
        "Oranye",
        "Ungu",
      ];

      let randomColor = pickRandom(colors);
      await sen(randomColor);
    }
    break;

case "randomnumber":
    {
      let range = text.split("|");
      let min = parseInt(range[0]);
      let max = parseInt(range[1]);
      if (!min || !max) return example("min, max");

      let randomNumber = random(min, max);
      let txt = `${b3} 
${topStyle} random number
${leftStyle} Minimal : ${min}
${leftStyle} Maximal : ${max}
${leftStyle} Result  : ${randomNumber}
${botStyle}
${b3}`;
      await sen(txt);
    }
    break;

case "randomactivity":
    {
      const activities = [
        "Cobalah untuk berjalan-jalan sebentar.",
        "Baca buku yang sudah lama kamu tinggalkan.",
        "Cobalah masak resep baru!",
        "Hubungi teman lama dan ajak ngobrol.",
        "Ambil beberapa menit untuk meditasi atau berolahraga ringan.",
      ];

      let randomActivity = pickRandom(activities);
      await sen(randomActivity);
    }
    break;

case "tqto":
					  {
					await sen(`${totalfitur} Fitur`)
	    }break

case "tqto":
					  {
					let txt = `
${b3}
${topStyle} Thanks To
${leftStyle} ${author} [ Creator ]
${leftStyle} Senq [ Base ]
${leftStyle} Syera [ Support ]
${leftStyle} Tester [ Support ]
${leftStyle} Users [ Support ]
${botStyle}
${b3}`
	    await sen(txt, jid, true)
	    }break

case "script":
					  {
					
	    await sen("Tanya ke dev nya cuy ada ga sc nya, sambil bawa ssan menu bot ini", jid,  false, getValidButtonReply("chat dev", ".kklkshd"))
	    }break

case "owner":
            case "kklkshd":
					{
						await senq.sendMessage(
							jid,
							{
								contacts: {
									displayName: author,
									contacts: [
										{
											displayName: author,
											vcard: `
BEGIN:VCARD
VERSION:3.0
N:;;  
FN:${author}
TEL;TYPE=cell;waid=${contact}:${contact}
X-WA-BIZ-DESCRIPTION:${`developer ${name}`}
X-WA-BIZ-NAME:${author}
END:VCARD
BEGIN:VCARD
VERSION:3.0
N:;;  
FN:Senq Store
TEL;TYPE=cell;waid=081330558152:081330558152
X-WA-BIZ-NAME:Senq Store
END:VCARD

`
										}
									]
								}
							},
							{
								quoted: qFake
							}
						);
					}
					break;

case "bot":case "tes":case "runtime":{await sena(`bot on selama ${msToTime(process.uptime() * 1000)}`)}break

case "log":
					{
						await senq.sendMessage(
							jid,
							{
								text: fs.readFileSync("./tmp/debug.txt", "utf-8").toString()
							},
							{
								quoted: m
							}
						);
					}
					break;


					case 'menu':
					
					case "allmenu":
					{
					        
    
						let txt = `
${b3}
${topStyle} Info Bot
${leftStyle} Name    : ${name}
${leftStyle} Creator : ${author}
${leftStyle} Version : ${version}
${leftStyle} Contact : ${contact}
${leftStyle} Mode    : ${db.mode}
${leftStyle} Type    : Case
${leftStyle} Action  : -
${leftStyle} Prefix  : [ ${prefix} ]
${leftStyle} Runtime : ${msToTime(process.uptime() * 1000)}
${leftStyle} Fitur   : ${totalfitur} Fitur
${leftStyle} Status  : Buy Only
${botStyle}
${b3}
${b3}
${topStyle} maker Menu
${leftStyle} .s
${leftStyle} .stiker
${leftStyle} .sticker
${botStyle}
${b3}
${b3}
${topStyle} tools Menu
${leftStyle} .rvo
${leftStyle} .tourl
${leftStyle} .totalmember
${botStyle}
${b3}
${b3}
${topStyle} pushkontak Menu
${leftStyle} .jpm
${leftStyle} .listgc
${leftStyle} .jpmtag
${leftStyle} .jpmjeda
${leftStyle} .pushkontak1
${leftStyle} .pushkontak2
${leftStyle} .pushkontak3
${leftStyle} .savekontak1
${leftStyle} .savekontak2
${leftStyle} .savekontak3
${botStyle}
${b3}
${b3}
${topStyle} grup Menu
${leftStyle} .add
${leftStyle} .del
${leftStyle} .kick
${leftStyle} .open
${leftStyle} .close
${leftStyle} .linkgb
${leftStyle} .demote
${leftStyle} .delppgb
${leftStyle} .setdesc
${leftStyle} .promote
${leftStyle} .setppgc
${leftStyle} .setnamagb
${leftStyle} .resetlinkgb
${botStyle}
${b3}
${b3}
${topStyle} fun Menu
${leftStyle} .dadu
${leftStyle} .tanya
${leftStyle} .waktu
${leftStyle} .ramalan
${leftStyle} .prediksi
${leftStyle} .randomjoke
${leftStyle} .randomfact
${leftStyle} .randomquote
${leftStyle} .randomcolor
${leftStyle} .randomnumber
${leftStyle} .randomactivity
${botStyle}
${b3}
`;
await sen(txt, jid, true)



					}
					break;
			}
		}

		if (db.antidel.includes(jid)) {
			if (mType === "protocolMessage") {
				if (store.messages && store.messages[jid] && store.messages[jid].array) {
					store.messages[jid].array.forEach(async (i) => {
						if (i.key.id === m.message[mType].key.id) {
							if (sender === i.key.participant) {
								i.message[getContentType(i.message)].contextInfo = {
									mentionedJid: [i.key.participant],
									isForwarded: true,
									forwardingScore: 1,
									forwardedNewsletterMessageInfo: {
										newsletterJid: sletterId,
										newsletterName: "from : " + i.key.participant.getNumber()
									},
									quotedMessage: { conversation: "anti delete" },
									...i.key
								};

								const pesan =
									getContentType(i.message) === "conversation"
										? {
												extendedTextMessage: {
													text: i.message.conversation,
													contextInfo: {
														mentionedJid: [i.key.participant],
														isForwarded: true,
														forwardingScore: 1,
														forwardedNewsletterMessageInfo: {
															newsletterJid: sletter,
															newsletterName: "from : " + i.key.participant.getNumber()
														},
														quotedMessage: { conversation: "anti delete" },
														...i.key
													}
												}
										  }
										: i.message;

								await senq.relayMessage(jid, pesan, { i });
							}
						}
					});
				}
			}
		}

		if (body?.match("chat.whatsapp.com")) {
			if (db.antilinkgc.includes(jid)) {
				if (!isAdmin) {
					if (!db.peringatan[sender]) {
						db.peringatan[sender] = 1;
					} else {
						db.peringatan[sender] += 1;
					}
					saveDb()
					
					await sen(`Pesan di hapus!, jangan kirim link di grub ini!!. Peringatan ${db.peringatan[sender]} / 5 !!`)

					if (db.peringatan[sender] >= 5) {
					  
						await senq.groupParticipantsUpdate(jid, [sender], "remove");
					}

					await senq.sendMessage(jid, {
						delete: {
							remoteJid: jid,
							fromMe: m.key.fromMe,
							id: m.key.id,
							participant: m.key.participant
						}
					});
					
				}else {
				  console.log(`Anti Lino GC ga di apus, sender nya admin`)
				}
			}
		}

		if (m.message?.[mType]?.contextInfo?.forwardedNewsletterMessageInfo) {
			if (db.antisharech.includes(jid)) {
				if (!isAdmin) {
				  console.log(`Detect Share ch On : ${metadata[jid].subject}`)
					await senq.sendMessage(jid, {
						delete: {
							remoteJid: jid,
							fromMe: m.key.fromMe,
							id: m.key.id,
							participant: m.key.participant
						}
					});
				  console.log(`Delete Share ch On : ${metadata[jid].subject}`)
				}else {
				  console.log(`Anti Share Ch ga di apus, sender nya admin`)
				}
			}
		}

		if (m.message?.groupStatusMentionMessage) {
			if (db.antitagsw.includes(jid)) {
				if (!isAdmin) {
				  console.log(`Detect Tag Sw ch On : ${metadata[jid].subject}`)
					await senq.sendMessage(jid, {
						delete: {
							remoteJid: jid,
							fromMe: m.key.fromMe,
							id: m.key.id,
							participant: m.key.participant
						}
					});
					console.log(`Delete Tag Sw On : ${metadata[jid].subject}`)
				}else {
				  console.log(`Anti Tag Sw ga di apus, sender nya admin`)
				}
			}
		}

		if (body?.match("whatsapp.com/channel")) {
			if (db.antilinkch.includes(jid)) {
				if (!isAdmin) {
				  console.log(`Detect Link Saluran On : ${metadata[jid].subject}`)
					await senq.sendMessage(jid, {
						delete: {
							remoteJid: jid,
							fromMe: m.key.fromMe,
							id: m.key.id,
							participant: m.key.participant
						}
					});
					console.log(`Delete Link Saluran On : ${metadata[jid].subject}`)
				}else {
				  console.log(`Anti Link Saluran ga di apus, sender nya admin`)
				}
			}
		}

		if (body?.match(new RegExp(["www.youtube.com", "m.youtube.com", "music.youtube.com", "gaming.youtube.com", "studio.youtube.com", "kids.youtube.com", "yt3.ggpht.com", "i.ytimg.com", "googlevideo.com"].map((d) => d.replace(/\./g, "\\.")).join("|"), "i"))) {
			if (db.antilinkyt.includes(jid)) {
				if (!isAdmin) {
				  console.log(`Detect Link Yt On : ${metadata[jid].subject}`)
					await senq.sendMessage(jid, {
						delete: {
							remoteJid: jid,
							fromMe: m.key.fromMe,
							id: m.key.id,
							participant: m.key.participant
						}
					});
					console.log(`Delete Link Yt On : ${metadata[jid].subject}`)
				}else {
				  console.log(`Anti Link YT ga di apus, sender nya admin`)
				}
			}
		}

		if (body?.match(new RegExp(["www.instagram.com", "help.instagram.com", "about.instagram.com", "business.instagram.com", "developers.instagram.com", "l.instagram.com", "graph.instagram.com", "i.instagram.com", "b.instagram.com", "static.cdninstagram.com", "scontent.cdninstagram.com"].map((d) => d.replace(/\./g, "\\.")).join("|"), "i"))) {
			if (db.antilinkig.includes(jid)) {
				if (!isAdmin) {
				  console.log(`Detect Link Ig On : ${metadata[jid].subject}`)
					await senq.sendMessage(jid, {
						delete: {
							remoteJid: jid,
							fromMe: m.key.fromMe,
							id: m.key.id,
							participant: m.key.participant
						}
					});
					console.log(`Delete Link Ig On : ${metadata[jid].subject}`)
				}else {
				  console.log(`Anti Link IG ga di apus, sender nya admin`)
				}
			}
		}

		if (body?.match(new RegExp(["www.facebook.com", "m.facebook.com", "mbasic.facebook.com", "business.facebook.com", "developers.facebook.com", "about.facebook.com", "newsroom.facebook.com", "upload.facebook.com", "staticxx.facebook.com", "touch.facebook.com", "web.facebook.com", "graph.facebook.com", "fbcdn.net", "scontent.xx.fbcdn.net", "video.xx.fbcdn.net", "lookaside.facebook.com", "apps.facebook.com"].map((d) => d.replace(/\./g, "\\.")).join("|"), "i"))) {
			if (db.antilinkfb.includes(jid)) {
				if (!isAdmin) {
				  console.log(`Detect Link Fb On : ${metadata[jid].subject}`)
					await senq.sendMessage(jid, {
						delete: {
							remoteJid: jid,
							fromMe: m.key.fromMe,
							id: m.key.id,
							participant: m.key.participant
						}
					});
					console.log(`Delete Link Fb On : ${metadata[jid].subject}`)
				}else {
				  console.log(`Anti Link FB ga di apus, sender nya admin`)
				}
			}
		}

		if (body?.match(new RegExp(["www.tiktok.com", "m.tiktok.com", "ads.tiktok.com", "business.tiktok.com", "developer.tiktok.com", "support.tiktok.com", "newsroom.tiktok.com", "careers.tiktok.com", "shop.tiktok.com", "live.tiktok.com", "creator.tiktok.com", "dm.tiktok.com", "s16.tiktokcdn.com", "p16-tiktokcdn-com.akamaized.net"].map((d) => d.replace(/\./g, "\\.")).join("|"), "i"))) {
			if (db.antilinktt.includes(jid)) {
				if (!isAdmin) {
				  console.log(`Detect Link Tiktok On : ${metadata[jid].subject}`)
					await senq.sendMessage(jid, {
						delete: {
							remoteJid: jid,
							fromMe: m.key.fromMe,
							id: m.key.id,
							participant: m.key.participant
						}
					});
					console.log(`Delete Link Tiktok On : ${metadata[jid].subject}`)
				}else {
				  console.log(`Anti Link TT ga di apus, sender nya admin`)
				}
			}
		}

		if (body?.match(new RegExp(["kntl", "mmk", "knt1", "memek", "mmek", "memk", "puqi", "puqimax", "kntd", "asu", "kontol", "anj", "ajg", "4jg", "4j9", "aj9", "bangke", "bngke", "yatim", "yapit", "ypit", "kontod", "konto1", "asu", "asw", "4sw", "4su", "jmbut", "mbut", "jembot", "jmbt", "ppk", "puqi", "ppk", "pepek"].map((d) => d.replace(/\./g, "\\.")).join("|"), "i"))) {
			if (db.antitoxic.includes(jid)) {
				if (!isAdmin) {
				  console.log(`Detect Toxic On : ${metadata[jid].subject}`)
					await senq.sendMessage(jid, {
						delete: {
							remoteJid: jid,
							fromMe: m.key.fromMe,
							id: m.key.id,
							participant: m.key.participant
						}
					});
					console.log(`Delete Toxic On : ${metadata[jid].subject}`)
				}else {
				  console.log(`Anti Toxic ga di apus, sender nya admin`)
				}
			}
		}

		if (body?.match("https")) {
			if (db.antilinkall.includes(jid)) {
				if (!isAdmin) {
				  console.log(`Detect Link On : ${metadata[jid].subject}`)
					await senq.sendMessage(jid, {
						delete: {
							remoteJid: jid,
							fromMe: m.key.fromMe,
							id: m.key.id,
							participant: m.key.participant
						}
					});
				  console.log(`Delete Link On : ${metadata[jid].subject}`)
				}else {
				  console.log(`Anti Link ga di apus, sender nya admin`)
				}
			}
		}

		if (["bb pm", "pm bb", "bban pm", "bban", "bb gb pm", "bb gc pm"].includes(body?.clear())) {
			if (db.antibb.includes(jid)) {
				if (!isAdmin) {
				  console.log(`Detect Text BB On : ${metadata[jid].subject}`)
					await senq.sendMessage(jid, {
						delete: {
							remoteJid: jid,
							fromMe: m.key.fromMe,
							id: m.key.id,
							participant: m.key.participant
						}
					});
					console.log(`Delete text BB On : ${metadata[jid].subject}`)
				}else {
				  console.log(`Anti Text BB ga di apus, sender nya admin`)
				}
			}
		}

		if (mType === "imageMessage") {
			if (db.antifoto.includes(jid)) {
				if (!isAdmin) {
				  console.log(`Detect Image On : ${metadata[jid].subject}`)
					await senq.sendMessage(jid, {
						delete: {
							remoteJid: jid,
							fromMe: m.key.fromMe,
							id: m.key.id,
							participant: m.key.participant
						}
					});
					console.log(`Delete Image On : ${metadata[jid].subject}`)
				}else {
				  console.log(`Anti Image ga di apus, sender nya admin`)
				}
			}
		}
		if (mType === "stickerMessage") {
			if (db.antisticker.includes(jid)) {
				if (!isAdmin) {
				  console.log(`Detect Sticker On : ${metadata[jid].subject}`)
					await senq.sendMessage(jid, {
						delete: {
							remoteJid: jid,
							fromMe: m.key.fromMe,
							id: m.key.id,
							participant: m.key.participant
						}
					});
					console.log(`Delete Sticker On : ${metadata[jid].subject}`)
				}else {
				  console.log(`Anti Sticker ga di apus, sender nya admin`)
				}
			}
		}
		if (mType === "audioMessage") {
			if (db.antiaudio.includes(jid)) {
				if (!isAdmin) {
				  console.log(`Detect Audio On : ${metadata[jid].subject}`)
					await senq.sendMessage(jid, {
						delete: {
							remoteJid: jid,
							fromMe: m.key.fromMe,
							id: m.key.id,
							participant: m.key.participant
						}
					});
					console.log(`Delete Audio On : ${metadata[jid].subject}`)
				} else {
				  console.log(`Anti Audio ga di apus, sender nya admin`)
				}
			}
		}
	} catch (e) {
		console.log(e);
	}
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
	fs.unwatchFile(file);
	delete require.cache[file];
	require(file);
});
