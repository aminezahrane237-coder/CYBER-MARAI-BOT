module.exports.config = {
    name: "admin",
    version: "1.0.0",
    has permission: 0,
    credits: "Islamick Cyber Chat",
    description: "",
    commandcategory: "admin",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`𝗔𝗗𝗠𝗜𝗡 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢
⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆
𝗕𝗢𝗧 𝗔𝗗𝗠𝗜𝗡 :𝗜𝗦𝗟𝗔𝗠𝗜𝗖𝗞 𝗖𝗬𝗕𝗘𝗥 𝗖𝗛𝗔𝗧
•┄┅══❁𝗖𝗢𝗡𝗧𝗔𝗖𝗧❁══┅┄•
⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆
✮͢ꓸ⃟ꓸ⃟ꓸ✮͢🩷𝗙𝗕 𝗣𝗔𝗚𝗘 : https://www.facebook.com/profile.php?id=100081939442749
✮͢ꓸ⃟ꓸ⃟ꓸ✮͢🩷 𝗠𝗦𝗚 𝗚𝗖 𝗖𝗛𝗔𝗧 𝗟𝗜𝗡𝗞:
https://m.me/j/AbZEOcdMGQYprT74/
✮͢ꓸ⃟ꓸ⃟ꓸ✮͢🩷𝗪𝗢𝗡𝗘𝗥 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞: https://www.facebook.com/cyberrajib`,attachment: fs.createReadStream(__dirname + "/cache/Cyber.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/Cyber.png"));  
      return request(encodeURI(`https://graph.facebook.com/100081939442749/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/Cyber.png')).on('close',() => callback());
   };
