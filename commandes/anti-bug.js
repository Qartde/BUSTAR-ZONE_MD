
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "antibug", categorie: "protection" }, async (dest, zk, commandeOptions) => {
  const { repondre, message } = commandeOptions;

  try {
    const bugPatterns = [
      /‏‏/g, // RTL characters
      /️️️️️️️️️️️️️️️️/g, // Invisible characters
      /⃫/g, /̸/g, /͡/g, /͜/g // Special characters used in crash texts
    ];

    const isBug = bugPatterns.some(pattern => pattern.test(message));

    if (isBug) {
      await zk.sendMessage(dest, { delete: message.key });
      await repondre("⚠️ Bug message detected and removed.");
    } else {
      await repondre("✅ Anti-bug system is active. No bugs found in the last message.");
          await _0x1174cb.sendMessage(_0xbc4120, {
      'audio': {
        'url': "https://files.catbox.moe/uv6fb5.mp3"
      },
      'mimetype': "audio/mp4",
      'ptt': true,
      'contextInfo': {
        'externalAdReply': {
          'title': "BUG",
          'body': "🌟 𝐏𝐈𝐍𝐆: " + _0x43b672 + "ms\n📅 *Date:* " + _0x2f4549 + "\n✅ *Time:* " + _0x5c9745,
          'thumbnailUrl': "https://files.catbox.moe/zotx9t.jpg",
          'mediaType': 0x1,
          'renderSmallThumbnail': true
                }
            }
        }, { quoted: ms });
  } catch (error) {
    console.error("Anti-bug error:", error);
    await repondre("❌ Error while running anti-bug command.");
  }
});
