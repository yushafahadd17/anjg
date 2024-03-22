/*####################################
                 AETHER
             MADE BY AETHER TEAM
       
✅ WhatsApp: wa.me/6285798045817
👥 Github: https://github.com/yushafahad17
#####################################*/

let handler = async (m, { conn, text, usedPrefix, command }) => {
  m.reply(`*[ AETHER UPTIME ]*
${namebot} has been active since *${Func.toTime(process.uptime() * 1000)}* ago`)
}
handler.help = ["runtime","uptime"].map(a => a + ' *[Time running]*')
handler.tags = ["info"]
handler.command = ["runtime","uptime"]
module.exports = handler