const Discord = require("discord.js");
const Action = require("../mute.js");
const mongoose = require("mongoose");
const ms = require("ms");
module.exports.run = async (bot, message, args) => {
    //await message.delete();
    
    let aUser = message.mentions.members.first();
    if(!aUser) return message.reply("Couldn't find the mentioned member.");
    let mutetime = args[1]
   
    if (!mutetime) return message.reply("No time interval found")
    let areason = args.slice(2).join(" ");
    if(!areason) return message.reply("Provide a reason for the mute")
        if(!aUser) {
          var unmute = new Discord.RichEmbed()
          
          .setTitle("Command: Kute")
          .setColor('#0099ff')
          .setDescription("Mute a discord member to prevent him from sending messages in text channels!\n **USAGE** :- \n >mute [user] (Mentioned User) [time in seconds] [reason] \n **Examples** :- \n>Mute @Youssef 10s Spamming")
              
          message.channel.sendEmbed(unmute)
      } else {
           if(!message.member.hasPermission('ADMINISTRATOR')) {
               var noperms = new Discord.RichEmbed()
     .setAuthor(`${aUser.user.username}`, `${aUser.user.avatarURL}`)
        .setTitle("Mute Notification")
        .setColor('#0099ff')
        .setFooter(`Mute attempt by ${message.author.username} (${message.author.id})`)
        .setDescription(`Sorry, ${message.author.username}, you lack permissions for this command.`);
      message.channel.sendEmbed(noperms)
  } else {
      if(message.member == aUser) {
        var mutedself = new Discord.RichEmbed()
        .setAuthor(`${aUser.user.username}`, `${aUser.user.avatarURL}`)
        .setTitle("Mute Notification")
        .setColor('#0099ff')
        .setFooter(`Mute attempt by ${message.author.username} (${message.author.id})`)
        .setDescription(`You can't unmute yourself, ${aUser.user.username}!`);
        message.channel.sendEmbed(mutedself)
    } else {
        if (aUser.roles.some(role => role.name === 'Muted')) {
        var unmute1 = new Discord.RichEmbed()
        .setAuthor(`${aUser.user.username}`, `${aUser.user.avatarURL}`)
 .setFooter(`Mute attempt by ${message.author.username} (${message.author.id})`)
    .setTitle("Mute Notification")
    .setColor('#0099ff')
    .setDescription(`User ${aUser.user.username}  is already muted!`);
       message.channel.sendEmbed(unmute1);
    } else {
       
     
      
         
         var unmuted = new Discord.RichEmbed()
    .setAuthor(`${aUser.user.username}`, `${aUser.user.avatarURL}`)
    .setTitle("Mute Notification")
    .setColor('#0099ff')
   // .setFooter(`Mute done by ${message.author.username} (${message.author.id})`)
   .setDescription(`**Mute successfully logged for ${aUser.user.username}** (${aUser.user.id})\n**Reason :-** ${areason}\n**Mute Time:-** ${ms(ms(mutetime))}\n**Muted By :-** ${message.author.username} (${message.author.id})\n **Muted At :-** ${message.createdAt}`)
    aUser.addRole(message.guild.roles.find(c => c.name == "Muted"));
      message.channel.sendEmbed(unmuted)
      setTimeout(function(){
        aUser.removeRole(message.guild.roles.find(c => c.name == "Muted"))
        var embedT = new Discord.RichEmbed()
        .setAuthor(`${aUser.user.username}`, `${aUser.user.avatarURL}`)
        .setTitle("Unute Notification")
    .setColor('#0099ff')
    .setDescription(`**${aUser.user.username}** was unmuted, time interval ended.`)
    message.channel.sendEmbed(embedT)
        //message.channel.send("User was unmuted")
      }, ms(mutetime))
    
    }
    }
      
  }
}
}





module.exports.help = {
name: "mute"
}
