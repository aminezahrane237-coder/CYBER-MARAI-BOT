<const fs = require("fs");
module.exports.config = {
        name: "autoreact",
  version: "1.0.0",
        hasPermssion: 0,
        credits: "Islamick Cyber Chat",
        description: "non prefix reply",
        commandCategory: "no prefix",
        usages: "noprefix",
    cooldowns: 0,
};
 
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
 let haha = event.body.toLowerCase();
  if (haha.includes("☘️") || haha.includes("😂") || haha.includes("🥰") || haha.includes("🌺") || haha.includes("🌸") || haha.includes("😌") || haha.includes("🐰") || haha.includes("🍒") || haha.includes("😊") || haha.includes("💜") || 
haha.includes("❤️") || haha.includes("✨") || haha.includes("😎") || haha.includes("😑") || haha.includes("😇")){                 
    return api.setMessageReaction("🌺", event.messageID, (err) => {}, true)
    api.markAsSeen(1, (err) => {});
  }
    if (haha.includes("🫡") || haha.includes("🤐") || haha.includes("😏") || haha.includes("☹️") || haha.includes("🤧") || haha.includes("🙄") || haha.includes("🤗") || haha.includes("😢") || haha.includes("😋") || haha.includes("🥴") || haha.includes("😎")){
      return  api.setMessageReaction("✨", event.messageID, (err) => {}, true);
}
  if (haha.includes("😈") || haha.includes("🤬") || haha.includes("💋") || haha.includes("😻") || haha.includes("😮") || haha.includes("☹️") || haha.includes("🥸") || haha.includes("😟") || haha.includes("🥱") || haha.includes("☠️") || haha.includes("😾") || haha.includes("❤️‍🩹")){
    return api.setMessageReaction("🌸", event.messageID, (err) => {}, true)
  }
  if (haha.includes("i love you") || haha.includes("love you")){
    api.sendMessage("আমাকে নাহ আল্লাহ কে ভালোবাসা প্রয় ভাই ও বন 🌺✨", event.threadID, event.messageID)
  }
  if (haha.includes("ummah") || haha.includes("kiss me bot")){
    api.sendMessage("আমি রোবোট আমার চুম্মা খেলে কি তুমার ফিলিংস আসবে আচ্ছা বাবা নাও খেয়ে দেখো মজা পাও কি নাহ\n\n\n 👉🤖👈\n\n ummmmah 💋💋🥰365 Day", event.threadID, event.messageID)
  }
  if (haha.includes("love me bot") || haha.includes("love me jan")){
    api.sendMessage("ok Baby love too❤️💋", event.threadID, event.messageID)
  }
if (haha.includes("biye korbe bot") || haha.includes("বিয়ে করবা বট")){
    api.sendMessage("আমার তো ওইটা নেই আমাকে বিয়ে করে কি করব 😐", event.threadID, event.messageID)
}
  if (haha.includes("miss you bot") || haha.includes("i miss you bot")){
    api.sendMessage("miss you to 😌🥹", event.threadID, event.messageID)
      }
}
        module.exports.run = function({ api, event, client, __GLOBAL }) {
      }
