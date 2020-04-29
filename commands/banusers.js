const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    let member = message.mentions.members.first()
    member.ban()
    .then(console.log)
    .catch(console.error)
}
module.exports.help = {
    name: "aybroban"
}
