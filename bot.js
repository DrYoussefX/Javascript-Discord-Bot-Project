const discord = require ('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
client.on('i am ready!');
});
client.on('message', message => {
if (message.content === 'ping') {
message.reply('pong!');
}
});
client.login(process.env.BOT_TOKEN) ://where BOT_TOKEN is the token of our bot
