const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Cyhper Bot Script By : DREAM`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : DREAM ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`فارس كتير كيوت`,"http://twitch.tv/فارس كتير كيوت")
client.user.setStatus("dnd")
});

client.login('NTk2MjYzODU5Nzk5NDU3Nzk0.XR3DGg.ECp_wmbbQGF600ktSmVhmL0chIA');// لا تغير فيها شيء