const Discord = require("discord.js");
const Report = require("../report.js")
const mongoose = require("mongoose");
module.exports.run = async (bot, message, args) => {
 
  // perform actions on the collection object
  mongoose.connect('mongodb+srv://joealex:el7etan1@cluster0-hv0fc.mongodb.net/Actionss?retryWrites=true&w=majority');
    let rUser = message.mentions.members.first();
    var usersProjection = { 
        _id: false,
        rID: false,
        time: false,
        userID: false,
        rUsername: false,
        __v: false,
        username: false
    };
    Report.find({username: rUser.user.username}, usersProjection, function(err, report) {
        var userMap = {};
    
        report.forEach(function(report) {
          userMap[report._id] = report.username;
        });
        //console.log(report)
       
        if(!report) {
           let noReport = new Discord.RichEmbed()
            .setTitle("Warn notification")
          .setDescription(`No warns logged for ${rUser.user.username}.`)
           .setColor('#0099ff')
            message.channel.sendEmbed(noReport)
        } else if(report) {
          let foundReport = new Discord.RichEmbed()
            .setTitle("Warn notification")
           .setDescription(report)
            .setColor('#0099ff')
        message.channel.sendEmbed(foundReport)
        }
        
            })
        }
module.exports.help = {
    name: "infr"
}
