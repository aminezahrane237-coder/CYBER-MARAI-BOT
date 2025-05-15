const dipto = require('axios');
const fs = require('fs-extra');
const path = require('path');
const moment = require('moment-timezone');
const pathFile = __dirname + '/cache/d1pt0.txt';
if (!fs.existsSync(pathFile))
  fs.writeFileSync(pathFile, 'true');
  const isEnable = fs.readFileSync(pathFile, 'utf-8');
module.exports.config = {
  name: "prefix",
  version: "1.0.0",
  hasPermission: 2,
  credits: "Islamick Cyber Chat",
  description: "when send ,prefix then response",
  commandCategory: "bot prefix",
  usages: "prefix",
  cooldowns: 5,
};
module.exports.handleEvent = async ({ api, event }) => {
  if (isEnable == "true"){
  const dipto2 = event.body ? event.body.toLowerCase() : '';
    const GP = "🤍✨𝐑𝐎𝐁𝐎𝐓 𝐏𝐑𝐄𝐅𝐈𝐗✨🤍";
     let d1PInfo = await api.getThreadInfo(event.threadID);
  let diptoName = d1PInfo.threadName;
    var time = moment.tz("Asia/Dhaka").format("LLLL");
  const text = `╭•┄┅═══❁🌺❁═══┅┄•╮\n${GP}\n╰•┄┅═══❁🌺❁═══┅┄•╯\n\n𝐁𝐎𝐓 𝐍𝐀𝐌𝐄 : ${global.config.BOTNAME}\n𝐑𝐎𝐁𝐎𝐓 𝐏𝐑𝐄𝐅𝐈𝐗 : ｢ ${global.config.PREFIX} ｣\n𝐑𝐎𝐁𝐎𝐓 𝐂𝐌𝐃: ｢ ${client.commands.size} ｣\n𝐓𝐈𝐌𝐄 : ${time}\n𝐆𝐑𝐎𝐔𝐏 𝐍𝐀𝐌𝐄: ${diptoName}\n`
  //const text2 = text[Math.floor(Math.random() * text.length)];
const imgur = ["https://drive.google.com/uc?id=1nllKrv68oQEqF7_GVUbif3pL-0Ig4_Ee",               "https://drive.google.com/uc?id=1nhdhHRY9jw6lJ_QVolD2iEvS4PZ5xGys",    "https://drive.google.com/uc?id=1niV8jdYgmGsjrJ4_e2i-35hYogFngJ3n",  "https://drive.google.com/uc?id=1nSURWKetjvp37ZhwI47bbmZ-6RpZJWWp",  "https://drive.google.com/uc?id=1nPtYvHoEmc1JZqfifVEKkiK0cFtUju1e",  "https://drive.google.com/uc?id=1naN8VrVJ6cAiT2VxftqSNF0JMZvAB0DJ",  "https://drive.google.com/uc?id=1nkaj3E_GEKSrtoyF2nqCkyOMkhoYXvlT", "https://drive.google.com/uc?id=1ngGTQ0n4bgeAQJuLLfnIW7lMGCm8UMD9",  "https://drive.google.com/uc?id=1nNLm_0VubWqFROwj25bqqTA2FbZNiPEn",  "https://drive.google.com/uc?id=1nuZ5ZJnUDkUdXXP7jjlZTNBMYNGRp1eh"]
  const link = imgur[Math.floor(Math.random() * imgur.length)];
  const res = await dipto.get(link, { responseType: 'arraybuffer' })
const ex = path.extname(link);
  const filename = __dirname + `/cache/dipto3${ex}`;
  fs.writeFileSync(filename, Buffer.from(res.data, 'binary'));
  if (dipto2.indexOf("prefix") ===0|| dipto2.indexOf("Prefix") ===0 )
  {
api.sendMessage({body:`${text}`,attachment: fs.createReadStream(filename)},event.threadID,() => fs.unlinkSync(filename),event.messageID)
  }
 }
}
module.exports.run = async ({api,args, event}) => {
try {
  if (args[0] == 'on') {
    fs.writeFileSync(pathFile, 'true');
    api.sendMessage('no prefix on successfully', event.threadID, event.messageID);
  }
  else if (args[0] == 'off') {
    fs.writeFileSync(pathFile, 'false');
    api.sendMessage('no prefix off successfully', event.threadID, event.messageID);
  }
  else if (!args[0]){
    api.sendMessage(`Wrong format ${this.config.name}use off/on`, event.threadID, event.messageID);
  }
  }
  catch(e) {
    console.log(e);
  }

}
