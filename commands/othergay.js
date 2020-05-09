const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    let gay = message.mentions.members.first()
let gayness = Math.floor((Math.random() * 100) + 10);
let gayEmbed = new Discord.RichEmbed()
.setTitle("Gayness Rate")
.setFooter(`Requested by ${message.author.username} || Bot programmed by :- DRDERY`)
.setDescription(`${gay.user.username} is ${gayness}% gay :gay_pride_flag:`)
message.channel.sendEmbed(gayEmbed)
}
module.exports.help = {
    name: "gay"
}
