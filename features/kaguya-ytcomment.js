/*####################################
                 KAGUYA SAMA
             MADE BY LEXIC TEAM
       
✅ WhatsApp: wa.me/6281389103794
👥 Github: https://github.com/LEXIC-TEAM
#####################################*/

let handler = async (m, { conn, text }) => {
if (!text) throw '*• Example:* .ytcomment *[Input Text]*'
conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/misc/youtube-comment', {
avatar: await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
comment: text,
username: conn.getName(m.sender)
}), 'error.png', '*THANKS FOR COMMENT*', m)
}

handler.help = ['ytcomment *[Input Text]*']
handler.tags = ['maker'] 
handler.command = /^(ytcomment)$/i

module.exports = handler