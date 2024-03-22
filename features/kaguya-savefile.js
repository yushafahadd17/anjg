let fs = require('fs');

let handler = async (m, { text, usedPrefix, command }) => {

  if (!text) throw `uhm.. teksnya mana?\n\npenggunaan:\n${usedPrefix + command} <teks>\n\ncontoh:\n${usedPrefix + command} menu`;

  if (command === 'sf') {

    if (!m.quoted.text) throw `balas pesan nya!`;
    let path = `features/kaguya-${text}.js`;
    await fs.writeFileSync(path,`/*####################################
                 KAGUYA SAMA
             MADE BY LEXIC TEAM
       
✅ WhatsApp: wa.me/6281389103794
👥 Github: https://github.com/LEXIC-TEAM
#####################################*/` + "\n\n" + m.quoted.text);
    m.reply(`tersimpan di ${path}`);
  } else if (command === 'df') {
    let path = `features/${text}.js`;
    if (!fs.existsSync(path)) throw `file plugin ${text}.js tidak ditemukan`;
    fs.unlinkSync(path);
    m.reply(`file plugin ${text}.js berhasil dihapus`);
  }
};
handler.help = ['sf', 'df'].map(v => v + ' *[Path]*');
handler.tags = ['owner']
handler.command = /^(sf|df)$/i;
handler.rowner = true;
module.exports = handler;