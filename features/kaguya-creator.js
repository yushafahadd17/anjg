/*####################################
                 AETHER
             MADE BY AETHER TEAM
       
✅ WhatsApp: wa.me/6285798045817
👥 Github: https://github.com/yushafahad17
#####################################*/

var handler = async (m, { conn }) => {
  const p = nomorown;
  let pp = await conn.profilePictureUrl(`${p}@s.whatsapp.net`, 'image').catch((_) => "https://telegra.ph/file/1ecdb5a0aee62ef17d7fc.jpg");
  let owner = `wa.me/${p}`;
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; FAHAD\nNICKNAME:🔰 DEVELOPER\nORG: ${nameowner}\nTITLE:soft\nitem1.TEL;waid=${nomorown}:${nomorown}\nitem1.X-ABLabel:Contact Owner\nitem2.URL:https://wa.me/${nomorown}\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET:wa.me/6285798045817\nitem3.X-ABLabel:Email\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:Lokasi\nBDAY;value=17-11-2004\nEND:VCARD`;

  const sentMsg = await conn.sendMessage(m.chat, {
    contacts: {
      displayName: wm,
      contacts: [{ vcard }]
    },
    contextInfo: {
      externalAdReply: {
        title: `Aether (ver ${version})`,
        body: wm,
        thumbnailUrl: pp,
        sourceUrl: null,
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: fkontak });

  await conn.reply(m.chat,  "*❕ he is my owner, if you want to report a bug contact him*", sentMsg);
}

handler.help = ['owner', 'creator'].map(a => a + ' *[my developer]*');
handler.tags = ['info'];
handler.command = ['owner', 'creator'];
handler.limit = true;
module.exports = handler;