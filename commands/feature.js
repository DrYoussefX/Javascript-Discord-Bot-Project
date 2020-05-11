const discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
   let msg = args.slice(">say").join(" ")
   message.channel.send(msg)
}
module.exports.help = {
    name: "say"
}
