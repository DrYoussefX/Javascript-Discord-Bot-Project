const Discord = require("discord.js");
const Report = require("../report.js")
const mongoose = require("mongoose");
module.exports.run = async(bot, message, args) => {
 
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
        if(!message.member.hasPermission('ADMINISTRATOR')) {
          var noperms = new Discord.RichEmbed()
.setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
   .setTitle("Logged Infractions")
   .setColor('#9400D3')
   //.setFooter(`Mute attempt by ${message.author.username} (${message.author.id})`)
   .setDescription(`Sorry, ${message.author.username}, you lack permissions for this command.`);
 message.channel.sendEmbed(noperms)
        } else {
        if(!report) {
           let noReport = new Discord.RichEmbed()
            .setTitle("Logged Infractions")
          .setDescription(`No infractions logged for ${rUser.user.username}.`)
           .setColor('#9400D3')
            message.channel.sendEmbed(noReport)
        } else if(report) {
        //  let foundReport = new Discord.RichEmbed()
           // .setTitle("Logged Infractions")
       //    .setDescription(report)
          //  .setColor('#9400D3')
     //   let found = foundReport.content.replace("warnID", "Warn ID")
        message.channel.send(report).then((msgf) => {
                                          msgf.edit(msgf.content.replace("warnID", "Warn ID"))
                                          )}
        
        
         
      
        }
      }
    })
  }
module.exports.help = {
    name: "infr"
}
