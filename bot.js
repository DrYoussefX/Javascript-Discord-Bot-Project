const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = "-";

 

client.on('ready', () => {

    console.log('I am ready!')
client.user.setPresence({ game: { name: 'with discord.js' }, status: 'idle' })
 .then(console.log)
 .catch(console.error);

});
client.on('message', message => {
if(message.content.includes("test") {
   message.reply("hi");
   }
}
client.login(process.env.BOT_TOKEN);
