const Discord = require("discord.js");
const Report = require("../report.js")
const mongoose = require("mongoose");
module.exports.run = async (bot, message, args) => {
  mongoose.connect('mongodb+srv://joealex:el7etan1@cluster0-hv0fc.mongodb.net/Actionss?retryWrites=true&w=majority');
    //let rUser = message.mentions.members.first();
    let id = args[0]
    Report.findOne({warnID: id}, function(err, report) {
        if(!report) return message.channel.send("This ID is not valid.")
        var idembed = new Discord.RichEmbed()
      .setTitle("Warn notification")
        .setDescription(`**Infractions Logged for ${report.username}** (${report.userID})\n**Reason :-** ${report.reason}\n**Infraction done by :-** ${report.rUsername} (${report.rID})\n **Infraction logged at :-** ${report.time}\n**Infraction ID :-**${report.warnID}`)
          .setColor('#0099ff')
        message.channel.sendEmbed(idembed);
    })
}

module.exports.help = {
    name: "getinfr"
}
