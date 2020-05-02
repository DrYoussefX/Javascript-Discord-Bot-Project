const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});


module.exports.run = async (bot, message, args) => {
    //if (message.author.roles.some(role => role.name === 'Verified')) return message.channel.send("You're already verified")
    message.guild.channels.get('706280557033553980').send(`User ${message.author.username} has requested verification. Would you like to verify him?`).react("👍").react("👎")
}
module.exports.help = {
    name: "verify"
}
