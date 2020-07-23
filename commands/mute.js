const Discord = require("discord.js");
const sqlite3 = require("sqlite3").verbose()
const ms = require("ms");
let db = new sqlite3.Database('./commands/infractions.db');
db.run("CREATE TABLE IF NOT EXISTS infractions (punishedusername TEXT, punishedid TEXT, adminusername TEXT, adminid TEXT, type TEXT, mutetime TEXT,infractionid TEXT,reason TEXT)")
module.exports.run = async (bot, message, args) => {
  
  
    //await message.delete();
    let aUser = message.mentions.members.first();
   // if(!aUser) return message.reply("Couldn't find the mentioned member.");
    let mutetime = args[1]
   
    let infrID = Math.floor((Math.random() * 4783) + 10);
    let areason = args.slice(2).join(" ");
    if(!message.member.hasPermission('ADMINISTRATOR')) {
      var noperms = new Discord.RichEmbed()
.setAuthor(`${message.author.username}`)
.setTitle("Command: Mute")
.setColor('#9400D3')
.setFooter(`Mute attempt by ${message.author.username} (${message.author.id})`)
.setDescription(`Sorry, ${message.author.username}, you lack permissions for this command.`);
message.channel.sendEmbed(noperms)
} else {
    
        if(!aUser) {
          var unmute = new Discord.RichEmbed()
          
          .setTitle("Command: Mute")
          .setColor('#00d5ff')
          .setDescription("Mute a discord member to prevent him from sending messages in text channels!\n **USAGE** :- \n >mute [user] (Mentioned User) [time in seconds] [reason] \n **Examples** :- \n>mute @Youssef 10s Spamming")
              
          message.channel.sendEmbed(unmute)
      } else {
        
      if(message.member == aUser) {
        var mutedself = new Discord.RichEmbed()
        .setAuthor(`${aUser.user.username}`)
        .setTitle("Command: Mute")
        .setColor('#00d5ff')
        .setFooter(`Mute attempt by ${message.author.username} (${message.author.id})`)
        .setDescription(`You can't mute yourself, ${aUser.user.username}!`);
        message.channel.sendEmbed(mutedself)
    } else {
      if (!mutetime) return message.reply("No time interval found")
      if(!areason) return message.reply("Provide a reason for the mute")
        if (aUser.roles.some(role => role.name === 'Muted')) {
        var unmute1 = new Discord.RichEmbed()
        .setAuthor(`${aUser.user.username}`)
 .setFooter(`Mute attempt by ${message.author.username} (${message.author.id})`)
    .setTitle("Command: Mute")
    .setColor('#00d5ff')
    .setDescription(`User ${aUser.user.username}  is already muted!`);
       message.channel.sendEmbed(unmute1);
    } else {
   
      db.run("INSERT INTO infractions(punishedusername, punishedid, adminusername, adminid, type, mutetime,infractionid,reason) VALUES(?,?,?,?,?,?,?,?)",aUser.user.username,aUser.user.id,message.author.username,message.author.id,"Mute",mutetime,infrID,areason)
         var unmuted = new Discord.RichEmbed()
    .setAuthor(`${aUser.user.username}`)
    .setTitle("Command: Mute")
    .setColor('#00d5ff')
   // .setFooter(`Mute done by ${message.author.username} (${message.author.id})`)
   .setDescription(`**Mute successfully logged for ${aUser.user.username}** (${aUser.user.id})\n**Reason :-** ${areason}\n**Mute Time:-** ${ms(ms(mutetime))}\n**Muted By :-** ${message.author.username} (${message.author.id})\n **Muted At :-** ${message.createdAt}`)
   var unmutedd = new Discord.RichEmbed()
   .setAuthor(`${aUser.user.username}`)
    .setTitle("Command: Mute")
    .setColor('#00d5ff')
    .setDescription(`**Infraction#${infrID}**\nUser **${aUser.user.username}** was successfully muted for the following reason :- **${areason}**`)
    aUser.addRole(message.guild.roles.find(c => c.name == "Muted"));
    message.channel.sendEmbed(unmutedd)
      aUser.sendEmbed(unmuted)
      setTimeout(function(){
        aUser.removeRole(message.guild.roles.find(c => c.name == "Muted"))
        var embedT = new Discord.RichEmbed()
        .setAuthor(`${aUser.user.username}`)
        .setTitle("Unmute Notification")
    .setColor('#00d5ff')
    .setDescription(`You were unmuted,**${aUser.user.username}**, time interval ended.`)
    aUser.sendEmbed(embedT)
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
