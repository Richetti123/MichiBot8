import { sticker } from '../lib/sticker.js'
import axios from 'axios'

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    command
}) => {
let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw "╰⊱❗️⊱ *𝙇𝙊 𝙐𝙎𝙊́ 𝙈𝘼𝙇 | 𝙐𝙎𝙀𝘿 𝙄𝙏 𝙒𝙍𝙊𝙉𝙂* ⊱❗️⊱╮\n\n𝘼𝙂𝙍𝙀𝙂𝙐𝙀́ 𝙐𝙉 𝙏𝙀𝙓𝙏𝙊 𝙋𝘼𝙍𝘼 𝘾𝙍𝙀𝘼𝙍 𝙀𝙇 𝙎𝙏𝙄𝘾𝙆𝙀𝙍\n\n𝘼𝘿𝘿 𝘼 𝙏𝙀𝙓𝙏 𝙏𝙊 𝘾𝙍𝙀𝘼𝙏𝙀 𝙏𝙃𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 "
   if (!text) return m.reply('𝙔 𝙀𝙇 𝙏𝙀𝙓𝙏𝙊?')
   if (text.length > 30) return m.reply('𝙈𝘼𝙓𝙄𝙈𝙊 30 𝙋𝘼𝙇𝘼𝘽𝙍𝘼𝙎!')
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://cdn.discordapp.com/attachments/761090730349166621/1301011723565662229/Menu2.jpg?ex=6722ed16&is=67219b96&hm=d0a8c0c97e9256cc84171942a06a1a2d9db5da616b7f9a2a43009636a0a4fcab&')

   const obj = {
      "type": "quote",
      "format": "png",
      "backgroundColor": "#000000",
      "width": 512,
      "height": 768,
      "scale": 2,
      "messages": [{
         "entities": [],
         "avatar": true,
         "from": {
            "id": 1,
            "name": m.name,
            "photo": {
               "url": pp
            }
         },
         "text": text,
         "replyMessage": {}
      }]
   }
   const json = await axios.post('https://bot.lyo.su/quote/generate', obj, {
      headers: {
         'Content-Type': 'application/json'
      }
   })
   const buffer = Buffer.from(json.data.result.image, 'base64')
   let stiker = await sticker(buffer, false, global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
}

handler.help = ['qc']
handler.tags = ['sticker']
handler.command = /^(qc)$/i

export default handler
