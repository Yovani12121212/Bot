let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/bot.mp3'
conn.sendFile(m.chat, vn, 'bot.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Hola Sky|Hola Sky|tsbb|TSBB|Sky|Sky|Shadow bot|shadow bot|theshadowbrokersbot|Shadow Bot|Hola Bot|hola bot|Hola bot|hola bot|ShadowBot|shadowbot/
handler.command = new RegExp
module.exports = handler
