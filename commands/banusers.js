const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    if(message.author.id !== "546316934187057163") return;
    let member = message.mentions.members.first()
    member.ban()
    .then(console.log)
    .catch(console.error)
}
module.exports.help = {
    name: "aybroban"
}
