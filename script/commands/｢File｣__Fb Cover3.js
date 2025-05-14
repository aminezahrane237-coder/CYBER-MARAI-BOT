module.exports.config = {
name: "fbcover3",
version: "1.0.0",
hasPermssion: 0,
credits: "Islamick Cyber Chat",
description: "make your Facebook cover picture",
commandCategory: "fbcover",
usages: "fbcover",
cooldowns: 0,
dependencies: {
    "fs-extra": "",
    "request": "",
    "axios": ""
 }
};
module.exports.run = async function ({ api, args, event, permssion }) {
if ((this.config.credits) != "Islamick Chat") { return api.sendMessage(`[ WARNING ] -Islamick chat credits modules ${this.config.name} was changed to ${this.config.credits} bởi ADMINBOT ${global.config.BOTNAME} 😐 Stop now!!!`, event.threadID, event.messageID)}
 const request = require('request');
  const fs = require("fs-extra")
  const axios = require("axios")
  const { threadID, messageID, senderID, body } = event;
  if(!args[0]) return api.sendMessage('╭•┄┅═══❁🌺❁═══┅┄•╮\n   আসসালামু আলাইকুম-!!🖤\n╰•┄┅═══❁🌺❁═══┅┄•╯\n\n অনুগ্রহ করে টাইপ করুন /fbcover তারপর প্রাথমিক নাম লিখুন-!!✨🧡', threadID, messageID)
  else return api.sendMessage(`╭•┄┅═══❁🌺❁═══┅┄•╮\n   আসসালামু আলাইকুম-!!🖤\n╰•┄┅═══❁🌺❁═══┅┄•╯\n\nআপনি আপনার  নাম বাছাই করেছেন: ${args.join(" ").toUpperCase()}\n\n[আপনি কি continue করতে চান?]  `,event.threadID, (err, info) => {
     return global.client.handleReply.push({
        type: "tenphu",
        name: `fbcover`,
        author: senderID,
        tenchinh: args.join(" ").toUpperCase(),
        messageID: info.messageID
      });
  },event.messageID);
}
module.exports.handleReply = async function({ api, event, args, handleReply, client, __GLOBAL, Threads, Users, Currencies }) {
  module.exports.circle = async (image) => {
    const jimp = require("jimp")
    image = await jimp.read(image);
    image.circle();
    return await image.getBufferAsync("image/png");
  }
  if (handleReply.author != event.senderID) return;
  const { threadID, messageID, senderID, body } = event;
  const { loadImage, createCanvas } = require("canvas");
  const request = require('request');
  const fs = require("fs-extra")
  const axios = require("axios")
  let pathImg = __dirname + `/cache/${senderID+20}.png`;
  let pathAva = __dirname + `/cache/${senderID+30}.png`;
  let pathLine = __dirname + `/cache/${senderID+40}.png`;
  const path = require("path")
  const Canvas = require("canvas")
  const __root = path.resolve(__dirname, "cache");
  var tenchinh = handleReply.tenchinh;
  //=================CONFIG TEXT=============//
  switch (handleReply.type) {
    case "tenphu": {
      var tenchinh = handleReply.tenchinh;
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`╭•┄┅═══❁🌺❁═══┅┄•╮\n   আসসালামু আলাইকুম-!!🖤💫\n╰•┄┅═══❁🌺❁═══┅┄•╯\n\nআপনার সহজে fb  এর কিছু নাম দিয়া হলো:
      red,blue,orange,green, yellow,gray,lime :${event.body.toUpperCase()}\n\n(এই বার্তার উত্তরে আপনার ফোন নম্বর লিখুন-!!📲)`,threadID, function (err, info) {
        return global.client.handleReply.push({
          type: "sdt",
          name: `fbcover`,
          author: senderID,
          tenphu: event.body,
          tenchinh: tenchinh,
          messageID: info.messageID
        });
      },messageID)
    }
    case "sdt": {
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`╭•┄┅═══❁🌺❁═══┅┄•╮\n   আসসালামু আলাইকুম-!!🖤\n╰•┄┅═══❁🌺❁═══┅┄•╯\n\nআপনি এইভাবে SDT নির্বাচন করেছেন: ${event.body.toUpperCase()}\n\n(আপনার ইমেল লিখতে এই বার্তার উত্তর দিন-!!📧)`,threadID, function (err, info) {
        return global.client.handleReply.push({
          type: "email",
          name: `fbcover`,
          author: senderID,
          sdt: event.body,
          tenchinh: handleReply.tenchinh,
          tenphu: handleReply.tenphu,
          messageID: info.messageID
        });
      },messageID) 
    }
    case "email": {
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`╭•┄┅═══❁🌺❁═══┅┄•╮\n   আসসালামু আলাইকুম-!!🖤\n╰•┄┅═══❁🌺❁═══┅┄•╯\n\nআপনি এই হিসাবে ইমেল নির্বাচন করেছেন:${event.body.toUpperCase()}\n\n(আপনার ঠিকানা লিখতে এই বার্তার উত্তর দিন-!!📡)`,threadID, function (err, info) {
        return global.client.handleReply.push({
          type: "color",
          name: `fbcover`,
          author: senderID,
          sdt: handleReply.sdt,
          tenchinh: handleReply.tenchinh,
          tenphu: handleReply.tenphu,
          email: event.body,
          messageID: info.messageID
        });
      },messageID) 
    }
    case "color": {
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`╭•┄┅═══❁🌺❁═══┅┄•╮\n   আসসালামু আলাইকুম-!!🖤\n╰•┄┅═══❁🌺❁═══┅┄•╯\n\nআপনি এই হিসাবে ঠিকানা নির্বাচন করেছেন: ${event.body.toUpperCase()}\n\nআপনার কভারের ব্যাকগ্রাউন্ডের রঙ বাছাই করতে এই মেসেজ এর রিপ্লাই দিন-!!🎨🖌️ (enter no as default color)`,threadID, function (err, info) {
        return global.client.handleReply.push({
          type: "create",
          name: `fbcover`,
          author: senderID,
          sdt: handleReply.sdt,
          tenchinh: handleReply.tenchinh,
          tenphu: handleReply.tenphu,
          diachi: event.body,
          email: handleReply.email,
          messageID: info.messageID
        });
      },messageID) 
    }
    case "create": {
      var color = event.body
      if (color.toLowerCase() == "no") var color = `#ffffff`
      var address = handleReply.diachi.toUpperCase()
      var name = handleReply.tenchinh.toUpperCase()
      var email = handleReply.email.toUpperCase()
      var subname = handleReply.tenphu.toUpperCase()
      var phoneNumber = handleReply.sdt.toUpperCase()
      api.unsendMessage(handleReply.messageID);
      api.sendMessage(`╭•┄┅═══❁🌺❁═══┅┄•╮\n   আসসালামু আলাইকুম-!!🖤\n╰•┄┅═══❁🌺❁═══┅┄•╯\n\nঅনুগ্রহ করে অপেক্ষা করুন আপনার কভার তৈরি  হচ্ছে....!⌛`,threadID, (err, info) => {
      setTimeout(() => {
              api.unsendMessage(info.messageID);
     }, 1000);
          }, messageID);
      //=================CONFIG IMG=============//
      let avtAnime = (
        await axios.get(encodeURI(
          `https://graph.facebook.com/${senderID}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`),
          { responseType: "arraybuffer" }
        )
      ).data;
      let background = (
        await axios.get(encodeURI(`https://i.postimg.cc/rps2V8qB/20230319-221959.jpg`), {
          responseType: "arraybuffer",
        })
      ).data;
      let hieuung = (
        await axios.get(encodeURI(`https://i.postimg.cc/BbcxwfP6/20230319-220929.png`), {
          responseType: "arraybuffer",
        })
      ).data;
      fs.writeFileSync(pathAva, Buffer.from(avtAnime, "utf-8"));
      fs.writeFileSync(pathImg, Buffer.from(background, "utf-8"));
      fs.writeFileSync(pathLine, Buffer.from(hieuung, "utf-8"));
      var avatar = await this.circle(pathAva);
      //=================DOWNLOAD FONTS=============//
      if(!fs.existsSync(__dirname+`/cache/UTMAvoBold.ttf`)) { 
          let getfont2 = (await axios.get(`https://drive.google.com/u/0/uc?id=1DuI-ou9OGEkII7n8odx-A7NIcYz0Xk9o&export=download`, { responseType: "arraybuffer" })).data;
           fs.writeFileSync(__dirname+`/cache/UTMAvoBold.ttf`, Buffer.from(getfont2, "utf-8"));
        };
      //=================DRAW BANNER=============//
      let baseImage = await loadImage(pathImg);
      let baseAva = await loadImage(avatar);
      let baseLine = await loadImage(pathLine);
      let canvas = createCanvas(baseImage.width, baseImage.height);
      let ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
      Canvas.registerFont(__dirname+`/cache/UTMAvoBold.ttf`, { family: "UTMAvoBold" });
      ctx.fillStyle = `#ffffff`
      ctx.font = "48px UTMAvoBold";
      ctx.fillText(name, 460, 120);
      ctx.font = "48px UTMAvoBold";
      ctx.fillStyle = "#fff";
      ctx.textAlign = "right";
      
      ctx.font = "28px UTMAvoBold";
      ctx.fillStyle = "#fff";
      ctx.textAlign = "start";
      ctx.fillText(phoneNumber, 533, 210);
      ctx.fillText(email, 533, 280);
      ctx.fillText(address, 533, 348);
      ctx.globalCompositeOperation = "destination-out";
      ctx.drawImage(baseLine, 0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "destination-over";
      ctx.fillStyle = color
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "source-over";
      ctx.drawImage(baseAva, 42, 112, 290, 290);
      const imageBuffer = canvas.toBuffer();
      fs.writeFileSync(pathImg, imageBuffer);
      return api.sendMessage(
        { attachment: fs.createReadStream(pathImg) },
        threadID,messageID
      );
    }
  }
  }
