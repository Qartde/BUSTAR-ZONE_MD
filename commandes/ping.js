function hi() {
  console.log("Hello World!");
}
hi();
const {
  zokou
} = require(__dirname + "/../framework/zokou");
const moment = require("moment-timezone");
const set = require(__dirname + '/../set');
moment.tz.setDefault('' + set.TZ);
zokou({
  'nomCom': "ping",
  'categorie': "General"
}, async (_0x15d66e, _0x138511, _0x58a8c2) => {
  let {
    ms: _0x764c8d
  } = _0x58a8c2;
  const {
    time: _0x5c9222,
    date: _0x1a48f0
  } = {
    'time': moment().format('HH:mm:ss'),
    'date': moment().format("DD/MM/YYYY")
  };
  const _0x46790b = Math.floor(Math.random() * 0x64) + 0x1;
  try {
    await _0x138511.sendMessage(_0x15d66e, {
      'audio': {
        'url': "https://files.catbox.moe/2wonzj.mp3"
      },
      'mimetype': 'audio/mp4',
      'ptt': true,
      'contextInfo': {
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363425127251695@newsletter",
          'newsletterName': "ʙᴜsᴛᴀʀᴢᴏɴᴇ ᴍᴅ",
          'serverMessageId': 0x8f
        },
        'forwardingScore': 0x3e7,
        'externalAdReply': {
          'title': "ʙᴜsᴛᴀʀᴢᴏɴᴇ ᴍᴅ",
          'body': "🌟 𝗽𝗶𝗻𝗴: " + _0x46790b + "ms\n📅 *Date:* " + _0x1a48f0 + "\n⏰ *Time:* " + _0x5c9222,
          'thumbnailUrl': "120363425127251695@newsletter",
          'mediaType': 0x1,
          'renderSmallThumbnail': true
        }
      }
    }, {
      'quoted': _0x764c8d
    });
  } catch (_0x26a749) {
    console.log("❌ Ping Command Error: " + _0x26a749);
    repondre("❌ Error: " + _0x26a749);
  }
});
