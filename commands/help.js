const Discord = require("discord.js");
const Report = require("../report.js")
const mongoose = require("mongoose");
module.exports.run = async (bot, message, args) => {
    let help = new Discord.RichEmbed()
    .setTitle("Command: Help")
    .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
    .setFooter(`Skull Team BOT Programmed By Drdery`)
    .setDescription(`Hey **${message.author.username}**, here's what you need to know about **Skull Team** BOT.\n **Features** :-\n-A fully programmed safe warn system which depends on a database. **(>warn)**\n-Ability to get information about a warn using it's id **(>infr**)\n-Ability to delete a certain infraction from user's infraction history. **(>delinfr)**\n-A fully programemd mute system, whcih depends on a database. **(>mute)**\n-Ability to get previous mute actions taken against the user **(>infr)**\n-Ability to delete infractions logged on a user. **(>delinfr)**\n-Fun command, which predicts the gayness rate of a user! **(>gay)**`)
message.channel.sendEmbed(help)
}
module.exports.help = {
    name: "help"
}
