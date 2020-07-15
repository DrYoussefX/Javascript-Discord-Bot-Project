const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    let gay = message.mentions.members.first()
let gayness = Math.floor((Math.random() * 90) + 10);
let gayEmbed = new Discord.RichEmbed()
.setTitle("Gayness Rate")

.setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
//.setFooter(`Requested by ${message.author.username} || Bot programmed by :- DRDERY`)
.setDescription(`${message.author.username} is ${gayness}% gay :gay_pride_flag:`)
.setColor('#9400D3')
if(!gay) {
message.channel.sendEmbed(gayEmbed)
} else {
    let gayEmbedO = new Discord.RichEmbed()
.setTitle("Gayness Rate")
.setAuthor(`${gay.user.username}`, `${gay.user.avatarURL}`)
//.setFooter(`Requested by ${message.author.username} || Bot programmed by :- DRDERY`)
.setDescription(`${gay.user.username} is ${gayness}% gay :gay_pride_flag:`)
.setColor('#9400D3')
message.channel.sendEmbed(gayEmbedO)
}
}
module.exports.help = {
    name: "gay"
}

