/*####################################
                 AETHER
             MADE BY AETHER TEAM
       
✅ WhatsApp: wa.me/6285798045817
👥 Github: https://github.com/yushafahad17
#####################################*/

console.log('✅ Starting.....')
console.clear()
const http = require('http');
const os = require('os');
const port = 3000; //custom ports here, sample: (8080,3000,5000) and others
const express = require('express');
const Cfonts = require ('cfonts')
const app = express();
Cfonts.say('AETHER',{font: 'tiny'})
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const data = {
    status: 'true',
    message: 'Aether is now running',
    author: 'Lexic team'
  };

  const result = {
    response: data
  };
  res.send(JSON.stringify(result, null, 2));
});

app.listen(port, () => {
  //console.log(`Listening on port ${port}`);
});


cluster = require("cluster");
const { spawn } = require("child_process");
const path = require("path");
const fs = require("fs");

let isRunning = false;

function start(file) {
  if (isRunning) return;
  isRunning = true;

  const args = [path.join(__dirname, file), ...process.argv.slice(2)];
  const p = spawn(process.argv[0], args, {
    stdio: ["inherit", "inherit", "inherit", "ipc"],
  });

  p.on("message", (data) => {
    console.log(`[ 🎀 AETHER ]${data}`);
    switch (data) {
      case "reset":
        p.kill();
        isRunning = false;
        start.apply(this, arguments);
        break;
      case "uptime":
        p.send(process.uptime());
        break;
    }
  });

  p.on("exit", (code) => {
    isRunning = false;
    console.error(`❌ sistem bot mati dengan kode: ${code}`);

    if (code === 0) return;

    fs.watchFile(args[0], () => {
      fs.unwatchFile(args[0]);
      start("start.js");
    });
  });

  p.on("error", (err) => {
    console.error('\x1b[31m%s\x1b[0m', `Error: ${err}`);
    p.kill();
    isRunning = false;
    start("start.js");
  });

  const pluginsFolder = path.join(__dirname, "features");

  fs.readdir(pluginsFolder, (err, files) => {
    if (err) {
      console.error(`Error reading plugins folder: ${err}`);
      return;
    }

const chalk = require('chalk');
console.log(chalk.white.bold(`####################################
      ${chalk.yellow.bold("⛦AETHER")}         
        VER 4.0
    MADE BY ${chalk.yellow.bold("AETHER TEAM")}
 
✅ WhatsApp: ${chalk.blue.underline("wa.me/6285798045817")}
👥 Github: ${chalk.blue.underline("https://github.com/yushafahad17")}

📂 Server Info:
- 👥 Platform: ${os.platform()}
- 🗂️ Architecture: ${os.arch()}
- 📂CPU Model: ${os.cpus()[0].model}
- 💾 Total Memory: ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB
- 🔃 Free Memory: ${(os.freemem() / 1024 / 1024).toFixed(2)} MB
#####################################`));

  });

  setInterval(() => {}, 1000);
}

start("start.js");

process.on('unhandledRejection', () => {
  console.error('\x1b[31m%s\x1b[0m', 'Unhandled promise rejection. Script will restart...');
  start('start.js');
});

process.on('exit', (code) => {
  console.error(`Exited with code: ${code}`);
  console.error('Script will restart...');
  start('start.js');
});