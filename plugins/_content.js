import fetch from 'node-fetch'
import moment from 'moment-timezone'
import axios from 'axios'
import fs from 'fs'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto }  = (await import(global.baileys))

let handler = m => m
handler.before = async function (m, { conn, isAdmin, isBotAdmin, isOwner, isROwner } ) {
global.key = ''

global.canales = [canal1, canal2, canal3, canal4].getRandom()
global.welgata = [tk, ig, yt2, yt2, ig, md, ig, yt, paypal, yt2, yt2, ig, fb, tk, ths, asistencia].getRandom()
global.redesMenu = [canal1, canal2, canal3, canal4, soporteGB, grupo1, grupo2, grupo3, grupo4, grupo5, grupo6, md, ig, paypal, yt, asistencia, fb, tk].getRandom()
global.accountsgb = [canal1, canal2, canal3, canal4, tk, ig, yt, paypal, fb, ths, md, asistencia].getRandom()

global.canalIdGB = ["120363160031023229@newsletter", "120363169294281316@newsletter", "120363203805910750@newsletter", "120363302472386010@newsletter"]
global.canalNombreGB = ["INFINITY-WA 💫", "GB - UPDATE 🐈", "Tips sobre GataBot 🤩", "NEW PROJECT: YartexBot-MD ✨"]
global.channelRD = await getRandomChannel()

// Imágenes 
global.imagen1 = fs.readFileSync("./Menu2.jpg")
global.imagen2 = fs.readFileSync("./Menu2.jpg")
global.imagen3 = fs.readFileSync("./Menu2.jpg")
global.imagen4 = fs.readFileSync("./Menu2.jpg")
global.imagen5 = fs.readFileSync("./Menu2.jpg")
global.imagen6 = fs.readFileSync("./Menu2.jpg")
global.imagen7 = fs.readFileSync("./Menu2.jpg")
global.imagen8 = fs.readFileSync("./Menu2.jpg")
global.imagen9 = fs.readFileSync("./Menu2.jpg")
global.imagen10 = fs.readFileSync("./Menu2.jpg")
global.imagen11 = fs.readFileSync("./Menu2.jpg")
global.imagen12 = fs.readFileSync("./Menu2.jpg")
global.imagen13 = fs.readFileSync("./Menu2.jpg")

global.img = fs.readFileSync("./Menu2.jpg")
global.img2 = fs.readFileSync("./Menu2.jpg")

global.img3 = fs.readFileSync("./Menu2.jpg") //prem
global.img4 = fs.readFileSync("./Menu2.jpg") //prem

global.img5 = fs.readFileSync("./Menu2.jpg")
global.img6 = fs.readFileSync("./Menu2.jpg")
global.img7 = fs.readFileSync("./Menu2.jpg")
global.img8 = fs.readFileSync("./Menu2.jpg")
global.img9 = fs.readFileSync("./Menu2.jpg")

global.img10 = fs.readFileSync("./Menu2.jpg")
global.img11 = fs.readFileSync("./Menu2.jpg")
global.img12 = fs.readFileSync("./Menu2.jpg")
global.img13 = fs.readFileSync("./Menu2.jpg")
global.img14 = fs.readFileSync("./Menu2.jpg")
global.img15 = fs.readFileSync("./Menu2.jpg")

global.img16 = fs.readFileSync("./Menu2.jpg") //+18

global.img17 = fs.readFileSync("./Menu2.jpg")
global.img18 = fs.readFileSync("./Menu2.jpg")

global.logogit = fs.readFileSync("./Menu2.jpg")

global.gataVidMenu = fs.readFileSync("./Menu2.jpg")
global.gataMenu = [img, img2, img6, img7, img8, img9, img13, img14, img15, img17, img18].getRandom()
global.gataImg = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, imagen11, imagen12, imagen13].getRandom()

// Fake
global.fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

global.fakeChannel = { contextInfo: { mentionedJid: null, forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: channelRD.id, serverMessageId: 100, newsletterName: channelRD.name }, externalAdReply: { title: wm, body: vs, mediaType: 1, renderLargerThumbnail: false, previewType: `PHOTO`, thumbnailUrl: gataImg, thumbnail: imagen1, sourceUrl: accountsgb }}}, { quoted: m }
  
const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'Super Bot WhatsApp', orderTitle: 'Bang', thumbnail: gataMenu, sellerJid: '0@s.whatsapp.net' }}}
const estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { "audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"   
}}} 

//let bottime = `${name} 𝗧𝗜𝗠𝗘: ${moment.tz('America/Bogota').format('HH:mm:ss')}`//America/Los_Angeles

let ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 99, status: 1, surface: 1, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
let fgif = {key: {participant : '0@s.whatsapp.net'}, message: {"videoMessage": { "title": wm, "h": `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./media/menus/Menu3.jpg')}}}
                             
let enlace = { contextInfo: { externalAdReply: {title: wm + ' 🐈', body: 'support group' , sourceUrl: redesMenu, thumbnail: await(await fetch(gataMenu)).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: wm, thumbnailUrl: gataMenu, sourceUrl: accountsgb }}}
let dos = [enlace, enlace2]  

global.wait = "⌛ *`Cargando...`*\n*✪✦✦⊹⊹⊹⊹⊹⊹⊹⊹✪* `20%`"
global.waitt = "⏳ *`Cargando....`*\n*✪✦✦✦✦⊹⊹⊹⊹⊹⊹✪* `40%`"
global.waittt = "⌛ *`Cargando...`*\n*✪✦✦✦✦✦✦⊹⊹⊹⊹✪* `60%`"
global.waitttt = "⏳ *`Cargando....`*\n*✪✦✦✦✦✦✦✦✦⊹⊹✪* `80%`"
global.waittttt = "⌛ *`Procesando...`*\n*✪✦✦✦✦✦✦✦✦✦✦✪* `100%`"

global.destraba = `⏰DESTRABA⏰*
li.DESTRAVip.to
2024 🦍💨

ဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪ
☣✝ﾚⅰɬ◊D͠Я◊ⅰD͠  D͠∑ㄅɬЯ∆√✝☣`
  
}
export default handler

// Mensaje de espera
// await mensajesEditados(conn, m)
global.mensajesEditados = async function(conn, m) {
const mensajes = [waitt, waittt, waitttt, waittttt]
key = await conn.sendMessage(m.chat, { text: wait, quoted: m })
for (let i = 0; i < mensajes.length; i++) {
await new Promise(resolve => setTimeout(resolve, 1000))
await conn.sendMessage(m.chat, { text: mensajes[i], edit: key })
}}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
  }

async function getRandomChannel() {
let randomIndex = Math.floor(Math.random() * canalIdGB.length)
let id = canalIdGB[randomIndex]
let nombre = canalNombreGB[randomIndex]
return { id, nombre }
} 	
