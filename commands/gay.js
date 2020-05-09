const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    //let gay = message.mentions.members.first()
let gayness = Math.floor((Math.random() * 100) + 10);
let gayEmbed = new Discord.RichEmbed()
.setTitle("Gayness Rate")
.setFooter(`Requested by ${message.author.username} || Bot programmed by :- DRDERY`)
.setDescription(`${message.author.username} is ${gayness}% gay :gay_pride_flag:`)
}
module.exports.help = {
    name: "gay"
}
