const Discord = require("discord.js");
const Report = require("../report.js")
const mongoose = require("mongoose");
module.exports.run = async (bot, message, args) => {
    mongoose.connect('mongodb+srv://joealex:el7etan1@cluster0-hv0fc.mongodb.net/Actionss?retryWrites=true&w=majority');
    let id = args[0]
    Report.findOneAndDelete({warnID: id}, function(err, report) {
        if(!report) return message.channel.send("This ID is not valid.")
        var delembed = new Discord.RichEmbed()
      .setTitle("Infraction notification")
      .setDescription(`Infraction ID **${id}** logged for **${report.username}** was successfully deleted.`)
      .setColor('#0099ff')
      message.channel.sendEmbed(delembed)
    })
}
module.exports.help = {
    name: "delinfr"
}
