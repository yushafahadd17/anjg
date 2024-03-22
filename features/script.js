let handler = async (m, { conn }) => {
const Script =`*• I N F O   S C R I P T :*\n• ${Func.texted("monospace", `Script ini private ya mek, jadi beli aja`)}\n*┌  ◦  Name:* Aether\n*│  ◦  Version:* ${version} *( Latest )*\n*│  ◦  Create at:* 20 Mar 2024\n*│\n*└  ◦  Developer:* @LT SYAII *( LEVII-TEAM )*`

conn.reply(m.chat, Script, m, {
        contextInfo: {
            mentionedJid: [],
            groupMentions: [],
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363144038483540@newsletter',
                newsletterName: "Mau Script? Beli Lah Kontol",
                serverMessageId: -1
            },
            businessMessageForwardInfo: {
                businessOwnerJid: conn.user.jid
            },
            forwardingScore: 256,
externalAdReply: {
        title: `ᴀᴇᴛʜᴇʀ (ver ${version})`,
        body: wm,
        thumbnailUrl: "https://telegra.ph/file/be974af21515ecf468746.jpg",
        sourceUrl: "https://fahad-abdurrahman.skom.id/",
        mediaType: 1,
        renderLargerThumbnail: true
          }
        }
    })
}
handler.help = ["Script","sc","sourcecode"].map(a => a + ' *[get script here]*')
handler.tags = ["info","main"]
handler.command = ["Script","sc","sourcecode"]

module.exports = handler