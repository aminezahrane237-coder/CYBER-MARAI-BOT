module.exports.config = {
  name: "ajan",
  version: "2.0",
  hasPermssion: 0,
  credits: "Islamick Cyber Chat",
  description: "সেট করা সময় অনুযায়ী স্বয়ংক্রিয়ভাবে বার্তাগুলি পাঠানো হবে!",
  commandCategory: "AutoTime",
  countDown: 3
};

module.exports.onLoad = async ({ api }) => {
  const timerData = {
    "03:45 AM": {
      message: ".   ╭•┄┅══❁🌺❁══┅┄•╮\n•—»✨ফজরে আজান✨«—•\n   ╰•┄┅══❁🌺❁══┅┄•╯\n\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n আসসালামু আলাইকুম-!!🖤💫\n প্রিয় মুসলিম ভাই ও বন এখন ফজরের আজান দেওয়া হয়েছে সবাই নামাজ এর জন্য প্রস্তুতি নিয়ে নিন আর কিছু সময় বাকি ফজর এর নামাজ শুরু হবার-!!✨🧡\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n𝐓𝐇𝐄 𝐂𝐀𝐋𝐋 𝐓𝐎 𝐏𝐑𝐀𝐘𝐄𝐑 𝐖𝐀𝐒 𝐆𝐈𝐕𝐄𝐍",
      url: "https://drive.google.com/uc?id=1mB8EpEEbVKZo6iI7GJwuMpb1MMj72kby"
    },
"01:45 PM": {
      message: ".   ╭•┄┅══❁🌺❁══┅┄•╮\n•—»✨জোহরের আজান✨«—•\n  ╰•┄┅══❁🌺❁══┅┄•╯\n\n•⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n আসসালামু আলাইকুম-!!🖤💫\n প্রিয় মুসলিম ভাই ও বন এখন জোহরের আজান দেওয়া হয়েছে সবাই নামাজ এর জন্য প্রস্তুতি নিয়ে নিন আর কিছু সময় বাকি জোহরের  এর নামাজ শুরু হবার-!!✨🧡\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n𝐓𝐇𝐄 𝐂𝐀𝐋𝐋 𝐓𝐎 𝐏𝐑𝐀𝐘𝐄𝐑 𝐖𝐀𝐒 𝐆𝐈𝐕𝐄𝐍",
      url: "https://drive.google.com/uc?id=1mNVwfsTEM-VjliXoM464EQR1gTYYG2ay"
    },
    "06:45 PM": {
      message: ". ╭•┄┅══❁🌺❁══┅┄•╮\n•—»✨আসর আজান✨«—•\n  ╰•┄┅══❁🌺❁══┅┄•╯\n\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n আসসালামু আলাইকুম-!!🖤💫\n প্রিয় মুসলিম ভাই ও বন এখন আসর আজান দেওয়া হয়েছে সবাই নামাজ এর জন্য প্রস্তুতি নিয়ে নিন আর কিছু সময় বাকি আসর এর নামাজ শুরু হবার-!!✨🧡\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n𝐓𝐇𝐄 𝐂𝐀𝐋𝐋 𝐓𝐎 𝐏𝐑𝐀𝐘𝐄𝐑 𝐖𝐀𝐒 𝐆𝐈𝐕𝐄𝐍",
      url: "https://drive.google.com/uc?id=1mkNnhFFvSpTIQSpw0qqAlkvtqaxH8BTy"
    },
    "07:47 PM": {
      message: ".   ╭•┄┅══❁🌺❁══┅┄•╮\n•—»✨মাগরিব আজান✨«—•\n  ╰•┄┅══❁🌺❁══┅┄•╯\n\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n আসসালামু আলাইকুম-!!🖤💫\n প্রিয় মুসলিম ভাই ও বন এখন মাগরিবের আজান দেওয়া হয়েছে সবাই নামাজ এর জন্য প্রস্তুতি নিয়ে নিন আর কিছু সময় বাকি মাগরিবের  নামাজ শুরু হবার-!!✨🧡\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n𝐓𝐇𝐄 𝐂𝐀𝐋𝐋 𝐓𝐎 𝐏𝐑𝐀𝐘𝐄𝐑 𝐖𝐀𝐒 𝐆𝐈𝐕𝐄𝐍",
      url: "https://drive.google.com/uc?id=1m5jiP4q9FPqDbIX4BoNTbse57h2SpgmC"
    },
    "08:45 PM": {
      message: "╭•┄┅══❁🌺❁══┅┄•╮\n•—»✨ইশা আজান✨«—•\n╰•┄┅══❁🌺❁══┅┄•╯\n\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n আসসালামু আলাইকুম-!!🖤💫\n প্রিয় মুসলিম ভাই ও বন এখন ইশা আজান দেওয়া হয়েছে সবাই নামাজ এর জন্য প্রস্তুতি নিয়ে নিন আর কিছু সময় বাকি ইশারের নামাজ শুরু হবার-!!✨🧡\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n𝐓𝐇𝐄 𝐂𝐀𝐋𝐋 𝐓𝐎 𝐏𝐑𝐀𝐘𝐄𝐑 𝐖𝐀𝐒 𝐆𝐈𝐕𝐄𝐍",
      url: "https://drive.google.com/uc?id=1mP2HJlKRGRc2P9joj2IpA1wH-eSrtazz"
    }
  };

  const checkTimeAndSendMessage = async () => {
    const currentTime = new Date(Date.now() + 21600000).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).split(',').pop().trim();

    if (timerData[currentTime]) {
      console.log(timerData[currentTime].message);
      console.log(timerData[currentTime].url);
      try {
       let messageData = { body: timerData[currentTime].message,attachment:(await require('axios').get(timerData[currentTime].url, { responseType: 'stream' })).data };

        global.data.allThreadID.forEach(i => api.sendMessage(messageData, i));
      } catch (error) {
        console.error(`Failed to send message for time ${currentTime}:`, error);
      }
    }
    setTimeout(checkTimeAndSendMessage, 45000);
  };

  checkTimeAndSendMessage();
};

module.exports.run= ({}) => {};
