const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    let text = args.slice(0).join(" ");
    message.channel.send(`First one to re-send this message wins **1K CREDITS**\n\n${text}`)
    const filter = m => m.content.includes('discord');
const collector = message.channel.createMessageCollector(filter, { time: 15000 });
collector.on('collect', m => {
	console.log(`${m.author.username} won the game!`);
});
}
module.exports.help = {
    name: "msgame"
}