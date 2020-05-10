const Discord = require("discord.js");
const Report = require("../report.js")
const mongoose = require("mongoose");
module.exports.run = async (bot, message, args) => {
    await message.delete();
    
    
    mongoose.connect('mongodb+srv://joealex:el7etan1@cluster0-hv0fc.mongodb.net/Actionss?retryWrites=true&w=majority');
    let rUser = message.mentions.members.first();
   // if(!rUser) return message.reply("Couldn't find the mentioned member.");
    let rreason = args.slice(1).join(" ");
    
    let warnsID = Math.floor((Math.random() * 4783) + 10); 
    if(!message.member.hasPermission('ADMINISTRATOR')) {
        var noperms = new Discord.RichEmbed()
.setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
 .setTitle("Command: Warn")
 .setColor('#9400D3')
 //.setFooter(`Mute attempt by ${message.author.username} (${message.author.id})`)
 .setDescription(`Sorry, ${message.author.username}, you lack permissions for this command.`);
message.channel.sendEmbed(noperms)
      } else {
    if(!rUser) {
        var unmute = new Discord.RichEmbed()
        
        .setTitle("Command: Warn")
        .setColor('#9400D3')
        .setDescription("Warn a discord member!\n **USAGE** :- \n >warn [user] (Mentioned User) [reason] \n **Examples** :- \n>warn @Youssef Disrespecting staff.")
            
        message.channel.sendEmbed(unmute) 
        
    } else {
        if(!rreason) return message.reply("Provide a reason");
            
    
const report = new Report({
    _id: mongoose.Types.ObjectId(),
    username: rUser.user.username,
    userID: rUser.id,
    Type: "Warn",
    reason: rreason,
    rUsername: message.author.username,
    rID: message.author.id,
    time: message.createdAt,
    guild: message.guild.id,
    warnID: warnsID
});
report.save()
.then(result => console.log(result))
.catch(err => console.log(err));
var embed = new Discord.RichEmbed()
    .setTitle("Warn Notification")
    .setDescription(`**Warn successfully logged for ${report.username}** (${report.userID})\n**Reason :-** ${report.reason}\n**Warned By :-** ${report.rUsername} (${report.rID})\n **Warned At :-** ${report.time}\n**Warn ID :-**${report.warnID}`)
    .setColor('#9400D3')
    message.channel.sendEmbed(embed)
}

      }

}

module.exports.help = {
name: "warn"
}
