module.exports.config = {
	name: "reality",
	version: "1.0.0",
	hasPermssion: 0,
  credits: "Islmaick Cyber Chat",
	description: "Jast Reality for wiki",
	commandCategory: "text",
	cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const t = Date.parse("June 6, 2005 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(` টাকা দিয়ে সুখ কিনা যায়__\🤗😅
টাকার জন্য মানুষ অবহেলিত __\\🙂💔
টাকা দিয়ে ভালো বাসা
কেনা হয়__\\😈💸🔐
সেই টাকা হক হালাল কিংবা হারাম__\\🙃
মেয়েরা সেটা চখে দেখে নাহ_\😔
বলি টাকা দিয়ে কি জান্নাত কিনতে পারবে__\\🤨
এখন কার দিনে সুখ জিনিস টাও নাকি টাকা দিয়ে কিনতে হয়°__\\😒🤐
এটো টাকা এতো সুখ কি কবরে নিয়ে জেতে পারবে__\\🙂😐
মেয়েরা তুমরা এই দুনিয়ার সুখ কেই হতো সুখ মনে করো
মানুষ তার কর্মের ফল কিছু টা এই দুনিয়ায় পেয়ে জায়
এই দুনিয়ায় জাটা পায় সেটা তার জন্য পরিক্ষা আর বাকি টা পাবে আখেরাতে

__ | wiki  of  Reality 

｢ create by : 𝐌𝐝 𝐉𝐚𝐡𝐢𝐝 𝐇𝐚𝐬𝐚𝐧 𝐑𝐚𝐣𝐢𝐛 ｣\n
`, event.threadID, event.messageID);
}
