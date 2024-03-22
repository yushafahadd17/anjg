/*####################################
                 AETHER
             MADE BY AETHER TEAM
       
✅ WhatsApp: wa.me/6285798045817
👥 Github: https://github.com/yushafahad17
#####################################*/

let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = { 
        'open': 'not_announcement',
        'close': 'announcement',
        'unlock': 'unlocked',
        'lock': 'locked',
    }[(args[0] || '')]
    if (isClose === undefined)
        return conn.reply(m.chat, `
*Incorrect format! Example :*
  *○ ${usedPrefix + command} close*
  *○ ${usedPrefix + command} open*
  *○ ${usedPrefix + command} unlock*
  *○ ${usedPrefix + command} lock*
`, m)
    await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['group'].map(a => a + ' *[open/close]*')
handler.tags = ['group']
handler.command = /^(group)$/i

handler.admin = true
handler.botAdmin = true

module.exports = handler;