
const chalk = require("chalk");
const fs = require("fs");

global.owner = "6283193211556"
global.namaOwner = "Fyxzpedia"
global.mode_public = true

global.linkChannel = "https://whatsapp.com/channel/0029VbBouHp0rGiGXagM0f2e"
global.idChannel = "120363402625644245@newsletter"
global.linkGrup = "https://chat.whatsapp.com/J2Bau7vaI6t7l24t8gN2zr?mode=ems_copy_t"
global.thumbnail = "https://files.catbox.moe/k1i0h1.jpg"

global.dana = "083126046403"
global.ovo = "Tidak tersedia"
global.gopay = "Tidak tersedia"
global.qris = "https://files.catbox.moe/6tx9v3.jpg"

global.JedaPushkontak = 8000
global.JedaJpm = 7000

global.egg = "15" // Isi id egg
global.nestid = "5" // Isi id nest
global.loc = "1" // Isi id location
global.domain = "https://sitesfyxzpedia-api.vercel.app"
global.apikey = "ptla_ylDEuf61TztFlhrbdjrFZ4M8EXugugfaUyEOgxY8H" // Isi api ptla
global.capikey = "ptlc_NijertA3nxUPoQmbY4QPtLLhSajQ4Qgtjhd5tXql" // Isi api ptlc


global.subdomain = {
  "skypedia.qzz.io": {
    "zone": "59c189ec8c067f57269c8e057f832c74",
    "apitoken": "mZd-PC7t7PmAgjJQfFvukRStcoWDqjDvvLHAJzHF"
  }, 
  "pteroweb.my.id": {
    "zone": "714e0f2e54a90875426f8a6819f782d0",
    "apitoken": "vOn3NN5HJPut8laSwCjzY-gBO0cxeEdgSLH9WBEH"
  },
  "panelwebsite.biz.id": {
    "zone": "2d6aab40136299392d66eed44a7b1122",
    "apitoken": "CcavVSmQ6ZcGSrTnOos-oXnawq4yf86TUhmQW29S"
  },
  "privatserver.my.id": {
    "zone": "699bb9eb65046a886399c91daacb1968",
    "apitoken": "CcavVSmQ6ZcGSrTnOos-oXnawq4yf86TUhmQW29S"
  },
  "serverku.biz.id": {
    "zone": "4e4feaba70b41ed78295d2dcc090dd3a",
    "apitoken": "CcavVSmQ6ZcGSrTnOos-oXnawq4yf86TUhmQW29S"
  },
  "vipserver.web.id": {
    "zone": "e305b750127749c9b80f41a9cf4a3a53",
    "apitoken": "cpny6vwi620Tfq4vTF4KGjeJIXdUCax3dZArCqnT"
  }, 
  "mypanelstore.web.id": {
    "zone": "c61c442d70392500611499c5af816532",
    "apitoken": "uaw-48Yb5tPqhh5HdhNQSJ6dPA3cauPL_qKkC-Oa"
  }
}


let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.blue(">> Update File :"), chalk.black.bgWhite(`${__filename}`))
delete require.cache[file]
require(file)
})