/** THIS FULL BOT COMMAND FILE AND ALL API CREATE BY ISLAMICK CYBET CHAT DONT CHINGE THE MY ANY CODE  **/
module.exports.config = {
  name: "\n",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Islamick Cyber Chat",
  description: "Islamick post rendom by caption",
  commandCategory: "poster",
  usages: "/",
  cooldowns: 11,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["•—»✨「 𝐈 𝐂 𝐂 ｣ ✨«—•\n༆-✿Prefix Event ༊࿐\n╭•┄┅═══❁❁═══┅┄•╮\n\n᭄࿐-ইচ্ছে!!!গুলো!!!যদি!!!পবিত্র!!হয়!✿᭄\n\n✿᭄তাহলে!!!স্বপ্ন!!! গুলো..\n\n✿᭄ ࿐- একদিন!!!পূরণ!!!হবেই!!! ✿᭄\n\n✿᭄࿐ইনশাআল্লাহ..\n\n╰•┄┅═══❁❁═══┅┄•╯\n 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐈𝐬𝐥𝐚𝐦𝐢𝐜𝐤 𝐂𝐲𝐛𝐞𝐫 𝐂𝐡𝐚𝐭",
" •—»✨「 𝐈 𝐂 𝐂 」✨«—•\n ༆-✿Prefix Event ༊࿐ \n╭•┄┅═══❁❁═══┅┄•╮\n\n_____✵♡︎\n\n___কি  হবে  এত  মানুষের প্রিয় হয়ে__\n\n__যদি আল্লাহ   প্রিয় না হতে পারি__\n\n_____✵♡︎\n\n╰•┄┅═══❁❁═══┅┄•╯\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐈𝐬𝐥𝐚𝐦𝐢𝐜𝐤 𝐂𝐲𝐛𝐞𝐫 𝐂𝐡𝐚𝐭",
"•—»✨「 𝐈 𝐂 𝐂 」  ✨«—•\n ༆-✿Prefix Event ༊࿐\n╭•┄┅═══❁❁═══┅┄•╮\n\n┏╮/╱╰️❥☆••\n╱/╰┛࿐চিরস্থায়ী কি \nজানেন͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌༒࿐͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌\n༄আপনার সুন্দর ব্যবহার!!!!࿐͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌\n\n࿐͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌যেটা মৃত্যুর পরও সবার সৃতিতে থাকবে❁ཻ͜͡ღ᭄\n\n╰•┄┅═══❁❁═══┅┄•╯\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐈𝐬𝐥𝐚𝐦𝐢𝐜𝐤 𝐂𝐲𝐛𝐞𝐫 𝐂𝐡𝐚𝐭  ",
"•—»✨「 𝐈 𝐂 𝐂 」  ✨«—•\n  ༆-✿Prefix Event ༊࿐\n╭•┄┅═══❁❁═══┅┄•╮\n\n\n\n-মক্কা তুমি ধন্য.༏༏࿐\n\n-তোমার বুকে হয়েছিলো বিশ্ব নবীর জন্ম.༏༏࿐\n\n\n\n╰•┄┅═══❁❁═══┅┄•╯\n\n 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐈𝐬𝐥𝐚𝐦𝐢𝐜𝐤 𝐂𝐲𝐛𝐞𝐫 𝐂𝐡𝐚𝐭 ",
"•—»✨「 𝐈 𝐂 𝐂 」  ✨«—•\n  ༆-✿Prefix Event ༊࿐\n╭•┄┅═══❁❁═══┅┄•╮\n\n●══❥⋆⃝ ভাগ্যর ༅༎༅ উপর ༅༎༅ কারো ༅༎༅ হাত নেই !!\n\n────\n-༅༎༅ সব ༅ ༎༅ কিছু ༅༎༅ পরিবর্তন ლ\n༅༎༅ করার  মালিক  \n\n༎༅ একমাত্র ༅༎༅ আল্লাহ \n\n╰•┄┅═══❁❁═══┅┄•╯\n\n 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐈𝐬𝐥𝐚𝐦𝐢𝐜𝐤 𝐂𝐲𝐛𝐞𝐫 𝐂𝐡𝐚𝐭",
"•—»✨「 𝐈 𝐂 𝐂 」  ✨«—•\n  ༆-✿Prefix Event ༊࿐\n╭•┄┅═══❁❁═══┅┄•╮\n\n>✨    \nwish \n\nমৃত্যুর কয়েক সেকেন্ড আগে যেন প্রত্যেকটা\nমুসলমানের মুখে\nউচ্চারিত হয় !\nলা ইলাহা ইল্লাল্লাহু\n মুহাম্মাদুর রাসূলুল্লাহ ( সঃ )\n\nআমিন\n\n╰•┄┅═══❁❁═══┅┄•╯\n\n 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐈𝐬𝐥𝐚𝐦𝐢𝐜𝐤 𝐂𝐲𝐛𝐞𝐫 𝐂𝐡𝐚𝐭",
"•—»✨「 𝐈 𝐂 𝐂 」  ✨«—•\n  ༆-✿Prefix Event ༊࿐\n╭•┄┅═══❁❁═══┅┄•╮\n\n ༅༎❥~\n\n༅༎❥━-কালি ছাড়া যেমন কলম ️\nমূল্যহীন️\n\nতেমনি নামাজ ছাড়া মুসলিম মূল্যহীন!!❥༅༎\n\n~\n\n╰•┄┅═══❁❁═══┅┄•╯\n\n 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐈𝐬𝐥𝐚𝐦𝐢𝐜𝐤 𝐂𝐲𝐛𝐞𝐫 𝐂𝐡𝐚𝐭",
"•—»✨「 𝐈 𝐂 𝐂 」  ✨«—•\n  ༆-✿Prefix Event ༊࿐\n╭•┄┅═══❁❁═══┅┄•╮\n\n°\n\n—   —\n—হযরত মুহাম্মদ (সা:)\n\n°\n\n╰•┄┅═══❁❁═══┅┄•╯\n\n 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐈𝐬𝐥𝐚𝐦𝐢𝐜𝐤 𝐂𝐲𝐛𝐞𝐫 𝐂𝐡𝐚𝐭 ",

"•—»✨「 𝐈 𝐂 𝐂 」  ✨«—•\n  ༆-✿Prefix Event ༊࿐\n╭•┄┅═══❁❁═══┅┄•╮\n\n࿐\n\nহীরার চেয়েও দামি\nহযরত মুহাম্মদ (সাঃ) এর মুখের বাণী\n\n࿐\nসুবহানাল্লাহ-\n\n╰•┄┅═══❁❁═══┅┄•╯\n\n 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐈𝐬𝐥𝐚𝐦𝐢𝐜𝐤 𝐂𝐲𝐛𝐞𝐫 𝐂𝐡𝐚𝐭",
"•—»✨「 𝐈 𝐂 𝐂 」  ✨«—•\n  ༆-✿Prefix Event ༊࿐\n╭•┄┅═══❁❁═══┅┄•╮\n\n\n- প্রতিশোধ নয়.!\n- হ্মমা করাই ইসলামের আদর্শ.!❤️\n\n- হযরত মোহাম্মদ (সাঃ)\n\n╰•┄┅═══❁❁═══┅┄•╯\n\n 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐈𝐬𝐥𝐚𝐦𝐢𝐜𝐤 𝐂𝐲𝐛𝐞𝐫 𝐂𝐡𝐚𝐭" 
 ];
;
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://i.postimg.cc/d3QDPNZJ/412b962177524045a2eb43c0f9cfa8b6.jpg",
"https://i.postimg.cc/XJHGSrn6/ramadan-ninth-month-islamic-calendar-observed-by-muslims-around-world-as-month-fasting-prayer-reperc.jpg",
"https://i.postimg.cc/mhWWRHpQ/received-1202913210365646.jpg",
"https://i.imgur.com/KxEXuch.jpeg",
"https://i.postimg.cc/yxZCwPj1/received-179416495132916.jpg",
"https://i.postimg.cc/nh4xgMJR/ornamental-arabic-lantern-with-burning-candle-glowing-night-muslim-holy-month-ramadan-kareem-1034-24.jpg",
"https://i.postimg.cc/8c2N53cf/received-2183981171798286.jpg",
"https://i.postimg.cc/6QWwyCWc/received-259795433354586.jpg",
"https://i.postimg.cc/JzWRC9S9/received-317063074088232.jpg",
"https://i.postimg.cc/5tsJvjjV/received-583147497311518.jpg",
"https://i.postimg.cc/7ZMwHKkb/received-598373762409967.jpg",
"https://i.postimg.cc/05SPq6kG/a360f6b18ac94e86a7ba87a884a7d295.jpg",
"https://i.postimg.cc/DZDKjDqp/received-659497149400143.jpg",
"https://i.postimg.cc/WpC2XD8p/received-659559285696847.jpg",
"https://i.postimg.cc/4NcXMJ26/received-819496329472643.jpg",
];
	 var callback = () => api.sendMessage({body:` ${know} `,attachment: fs.createReadStream(__dirname + "/cyber.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cyber.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cyber.jpg")).on("close",() => callback());
   };
