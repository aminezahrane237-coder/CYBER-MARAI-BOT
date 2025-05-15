module.exports.config = {
  name: "namaz",
  version: "0.0.2",
  hasPermission: 0,
  credits: "Islamick Cyber Chat",
  description: "prayer time",
  commandCategory: "time",
  usages: "",
    cooldowns: 5,
};


module.exports.run = async function({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
    const n = global.nayan_api;
    const content = args.join(" ");
    const res = await axios.get(`http://api.aladhan.com/v1/timingsByAddress?address=${content}`);
    const { Fajr, Dhuhr, Asr, Sunset, Maghrib, Isha, Imsak, Midnight} = res.data.data.timings;
    const date = res.data.data.date.readable;
    const mo = res.data.data.date.gregorian.month.en;
    const hijri = res.data.data.date.hijri.date;
    const mon = res.data.data.date.hijri.month.en;
    var msg = [];


const pic = (
      await axios.get(
        'https://i.postimg.cc/SNZdBBwZ/received-621340090928684.jpg',
        { responseType: 'stream' }
      )
    ).data;

    {
        msg += `╭•┄┅═══❁🌺❁═══┅┄•╮\n      𝚃𝙸𝙼𝙴 𝙾𝙵 𝚂𝙰𝙻𝙰𝚃𝙰\n╰•┄┅═══❁🌺❁═══┅┄•╯\n\n⋆✦⋆⎯⎯⎯⋆𝚃𝙸𝙼𝙴⋆⎯⎯⎯⋆✦\n•—»✨𝙵𝙰𝙹𝙰𝚁: ${Fajr} \n•—»✨𝚉𝙰𝙷𝙰𝚁: ${Dhuhr} \n•—»✨𝙰𝚂𝙰𝚁 :  ${Asr} \n•—»✨𝙼𝙰𝙶𝚁𝙸𝙱 : ${Maghrib} \n •—»✨𝙸𝚂𝙷𝙰 :  ${Isha} \n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n\n ⋆✦⋆⎯⎯⎯⋆𝚃𝙸𝙼𝙴⋆⎯⎯⎯⋆✦\n  •—»✨𝚂𝚄𝙽𝚂𝙴𝚃 : ${Sunset} \n •—»✨𝙼𝙸𝙳-𝙽𝙸𝙶𝙷𝚃:  ${Midnight} \n  •—»✨𝙸𝚂𝙼𝙰𝙺: ${Imsak} \n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n \n⋆✦⋆⎯⎯⎯⋆𝚃𝙸𝙼𝙴⋆⎯⎯⎯⋆✦\n\n    𝙳𝙰𝚃𝙴: ${date} \n     𝙼𝙾𝙽𝚃𝙷-𝙴𝙽:  ${mo} \n     𝙷𝙸𝙹𝚁𝙸: ${hijri} \n     𝙼𝙾𝙽𝚃𝙷-𝙰𝚁: ${mon} \n\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆`
    }

    return api.sendMessage({
        body: msg,
        attachment: pic


    }, event.threadID, event.messageID);
}
