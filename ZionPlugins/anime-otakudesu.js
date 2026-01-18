/*
📌 Name : Otakudesu Detail
🏷️ Type : Plugin CJS
📦 Saluran : https://whatsapp.com/channel/0029Vb4HHTJFCCoYgkMjn93K
🔗 Base Url : https://otakudesu.best
👤 Creator : Hazel
*/

const axios = require('axios')
const cheerio = require('cheerio')

const handler = async (m, { text, sock }) => {
    if (!text) {
        throw 'Masukkan URL anime Otakudesu\n\nContoh:\nhttps://otakudesu.best/anime/egao-taenai-shokuba-desu-sub-indo/'
    }

    try {
        const { data: html } = await axios.get(text, {
            headers: { 'user-agent': 'Mozilla/5.0' }
        })

        const $ = cheerio.load(html)

        const detail = {
            title: $('.jdlrx h1').text().trim(),
            poster: $('.fotoanime img').attr('src'),
            info: {},
            episodes: []
        }

        $('.infozingle p').each((_, el) => {
            const key = $(el).find('b').first().text().trim()
            if (!key) return

            const raw = $(el).text().trim()
            const value = raw.replace(key + ':', '').trim()

            detail.info[key.toLowerCase()] = value || null
        })

        detail.info.genre = []
        $('.infozingle a[rel="tag"]').each((_, el) => {
            detail.info.genre.push($(el).text().trim())
        })

        $('.episodelist ul li').each((_, el) => {
            detail.episodes.push({
                title: $(el).find('a').text().trim(),
                url: $(el).find('a').attr('href'),
                date: $(el).find('.zeebr').text().trim()
            })
        })

        let reply = `🎬 *${detail.title}*\n\n`

        for (const [k, v] of Object.entries(detail.info)) {
            if (k === 'genre') {
                reply += `• Genre: ${v.join(', ')}\n`
            } else {
                reply += `• ${k}: ${v || '-'}\n`
            }
        }

        reply += `\n📺 *Episodes (${detail.episodes.length})*\n`
        detail.episodes.slice(0, 10).forEach((ep, i) => {
            reply += `${i + 1}. ${ep.title}\n`
        })

        await sock.sendMessage(
            m.chat,
            { text: reply.trim() },
            { quoted: m }
        )

    } catch (err) {
        await sock.sendMessage(
            m.chat,
            { text: `❌ Error: ${err.message || err}` },
            { quoted: m }
        )
    }
}

handler.help = ['otakudesu']
handler.tags = ['anime']
handler.command = ['otakudesu']

module.exports = handler