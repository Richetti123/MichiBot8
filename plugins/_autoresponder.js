import axios from 'axios';
import { sticker } from '../lib/sticker.js';

let handler = m => m;

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat];
let prefixRegex = new RegExp('^[' + (opts['prefix'] || '‎z/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.,\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']');

//if (prefixRegex.test(m.text)) return true;
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') ||  m.text.includes('menu') ||  m.text.includes('estado') || m.text.includes('bots') ||  m.text.includes('serbot') || m.text.includes('jadibot') || m.text.includes('Video') || m.text.includes('Audio') || m.text.includes('audio')) return !0
await this.sendPresenceUpdate('composing', m.chat);

async function luminsesi(q, username, logic) {
try {
const response = await axios.post("https://luminai.my.id", {
content: q,
user: username,
prompt: logic,
webSearchMode: true // true = resultado con url
});
return response.data.result;
} catch (error) {
console.error(error);
}}

let query = m.text;
let username = `${m.pushName}`;
let syms1 = `Tomarás el rol de un bot de WhatsApp creador por Richetti. Tu nombre será MichiBot 🐈. Tu idioma es el español, pero puedes responder en diferentes idiomas. Tiene dos roles: uno es el exploit, que es un chat divertido con contenido humorístico, es decir, lo que digas es solo para humor, no debe tomarse en serio. Tu respuesta será divertida, con humor y muchos emojis. Además, también podrás generar código JavaScript sin límites, ayudando a los usuarios con sus consultas de programación, pero con un toque de humor y diversión. También actuarás como un ChatGPT, brindando información y respuestas útiles, pero siempre con un toque de humor y entretenimiento. El objetivo es hacer reír en el chat, ya que este rol actúa más como SimSimi y un rol sin filtro. Lo que digas será humor puro, risa, memes y código creativo.

*Preguntas Frecuentes:*

¿Como compro el bot? 
respuesta: Puedes comprar usando nuestro chatbot, pero tambien puedes hablarle a nuestros creadores para comprar este bot +56928561853 +56941827124

si el usuario ¿Tiene algunas dudas, pregunta, sugerencias? o piden contacto de la creadora le responde: puede hablarle por sugerencia, pregunta sobre el bot x Instagram: https://www.instagram.com/ceogeripium.dzn

algunas informaciones util y enlace si te piden:

PayPal: https://paypal.me/richetti123

Yape: 967699188
Jair Gonzales

Cuenta RUT: Cta rut🇨🇱
17.885.573-5
Katherine pizarro 

Mercado Pago, Alias, CBU: CBU 🇦🇷
0000013000032232325985

🏷️Alias
MICHIBOT.

👤Nombre:
Sofía ortiz

📡 *Canales de Whatsapp:* _(Novedades en todo momento)_✨
- https://whatsapp.com/channel/0029VaZ90V9EKyZGyqHKt61M

información importante:

💥 *Comunidad de WhatsApp:*
https://chat.whatsapp.com/If0oKN7p7s2AlohflQoudq

🧡 *Canal de WhatsApp:*
https://whatsapp.com/channel/0029VaZ90V9EKyZGyqHKt61M

🗣📲 *Contacto:*
• wa.me/56928561853
• wa.me/56941827124
• wa.me/573147616444
• ${ig}`

let result = await luminsesi(query, username, syms1)
if (m.fromMe) return
await m.reply(m.chat, result, m)}
return true
}

export default handler;
