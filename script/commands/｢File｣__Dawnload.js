const axios = require("axios");
const fs = require("fs-extra");
const baseApiUrl = async () => {
 const base = await axios.get(
 `https://raw.githubusercontent.com/shaonproject/Shaon/main/api.json`,
 );
 return base.data.api2;
};

module.exports.config = {
 name: "autodl",
 aliases: "[]",
 version: " 1.0",
 author: "Islamick Cyber Chat",
countDown: 5,
 adminOnly: false,
description:"all video dawnloder",
 category: "media",
 usages: "",
 guide:"auto dawnload  for your video you dont use any prefix & name addid",
use Prefix: true,
};

module.exports.handleEvent = async function ({ api, event }) {
 let shaon = event.body ? event.body : "";
 try {
 if (
 shaon.startsWith("https://vt.tiktok.com") ||
 shaon.startsWith("https://vm.tiktok.com") ||
 shaon.startsWith("https://www.facebook.com") ||
 shaon.startsWith("https://fb.watch") ||
 shaon.startsWith("https://www.instagram.com/") ||
 shaon.startsWith("https://www.instagram.com/p/") ||
 shaon.startsWith("https://pin.it/") ||
 shaon.startsWith("https://x.com/") ||
 shaon.startsWith("https://twitter.com/")
 ) {
 const startTime = Date.now();

 const aa = await axios.get(
 `${await baseApiUrl()}/alldl?url=${encodeURIComponent(shaon)}`,
 );
 const bb = aa.data;
 const path = __dirname + `/cache/video.mp4`;

 const vid = (await axios.get(bb.videos[0].url, { responseType: "arraybuffer" })).data;
 fs.writeFileSync(path, Buffer.from(vid, "utf-8"));

 
 const tinyUrlRes = await axios.get(`${await baseApiUrl()}/tinyurl?url=${encodeURIComponent(bb.videos[0].url)}`);
 const shortUrl = tinyUrlRes.data.url;

 const speed = ((Date.now() - startTime) / 1000).toFixed(2);

 const bodyText = 
`╭•┄┅═══❁🌺❁═══┅┄•╮\n𝐀𝐔𝐓𝐎 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃\n ╰•┄┅═══❁🌺❁═══┅┄•╯\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n ｢🕒｣ 𝐕𝐄𝐃𝐈𝐎 𝐓𝐈𝐌𝐄: ${speed}s \n ｢🔗｣ 𝐔𝐑𝐋: ${shortUrl}
 ｢👤 ｣ ${event.senderID}\n 𝐘𝐎𝐔𝐑 𝐕𝐈𝐃𝐎𝐄 𝐃𝐀𝐖𝐍𝐋𝐎𝐀𝐃 𝐒𝐔𝐂𝐂𝐄𝐒𝐒𝐅𝐔𝐋✨🌺\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆.`;

 api.sendMessage(
 {
 body: bodyText,
 attachment: fs.createReadStream(path),
 },
 event.threadID,
 () => fs.unlinkSync(path),
 event.messageID,
 );
 }

 if (shaon.startsWith("https://i.imgur.com")) {
 const shaon3 = shaon.substring(shaon.lastIndexOf("."));
 const response = await axios.get(shaon, { responseType: "arraybuffer" });
 const filename = __dirname + `/cache/shaon${shaon3}`;
 fs.writeFileSync(filename, Buffer.from(response.data, "binary"));
 api.sendMessage(
 {
 body: `Downloaded from link`,
 attachment: fs.createReadStream(filename),
 },
 event.threadID,
 () => fs.unlinkSync(filename),
 event.messageID,
 );
 }
 } catch (e) {
 api.sendMessage(`${e}`, event.threadID, event.messageID);
 }
};

module.exports.run = function ({ api, event, client, __GLOBAL }) {};
