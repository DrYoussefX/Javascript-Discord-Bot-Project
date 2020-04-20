const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const warnsFile = require("./warns.json")
let warns = JSON.parse(fs.readFileSync("./warns.json", "utf-8"))


const prefix = "-";

 

client.on("ready", () => {
    client.user.setPresence({
        game: { 
            name: 'my code',
            type: 'WATCHING'
        },
        status: 'idle'
    })
})
client.on("message", message=>{
	if(message.content.startsWith(">kick")) {
        let kickedUser = message.mentions.members.first
        let kick = new Discord.RichEmbed()
        //.setAuthor(`${kickedUser.user.username}`, `${kickedUser.user.avatarURL}`)
        .setTitle("Kick Notification")
        .setColor('#0099ff')
        .setFooter(`Kick done by ${message.author.username} (${message.author.id})`)
        .setDescription(`${kickedUser.user.username} was successfully kicked!`)
        kickedUser.kick()
        message.channel.sendEmbed(kick)
    }
});
client.on("message", message=>{
	
         if(message.content.startsWith(">unmute")) {
		  var mentionedUser = message.mentions.members.first()
	   //let reason = args.slice(1).join(' ');
		   if(!mentionedUser) {
			 var unmute = new Discord.RichEmbed()
			 
			 .setTitle("Command: Unmute")
			 .setColor('#0099ff')
			 .setDescription("Unmute a muted member to be able to send messages in text channels!\n **USAGE** :- \n >unmute [user] (Mentioned User) \n **Examples** :- \n>unmute @Youssef")
				 
			 message.channel.sendEmbed(unmute)
		 } else {
			  if(!message.member.hasPermission('ADMINISTRATOR')) {
				  var noperms = new Discord.RichEmbed()
		.setAuthor(`${mentionedUser.user.username}`, `${mentionedUser.user.avatarURL}`)
		   .setTitle("Unmute Notification")
		   .setColor('#0099ff')
		   .setFooter(`Unmute attempt by ${message.author.username} (${message.author.id})`)
		   .setDescription(`Sorry, ${message.author.username}, you lack permissions for this command.`);
		 message.channel.sendEmbed(noperms)
	 } else {
		 if(message.member == mentionedUser) {
		   var mutedself = new Discord.RichEmbed()
		   .setAuthor(`${mentionedUser.user.username}`, `${mentionedUser.user.avatarURL}`)
		   .setTitle("Unmute Notification")
		   .setColor('#0099ff')
		   .setFooter(`Unmute attempt by ${message.author.username} (${message.author.id})`)
		   .setDescription(`You can't unmute yourself, ${mentionedUser.user.username}!`);
		   message.channel.sendEmbed(mutedself)
	   } else {
		   if (!mentionedUser.roles.some(role => role.name === 'Muted')) {
		   var unmute1 = new Discord.RichEmbed()
		   .setAuthor(`${mentionedUser.user.username}`, `${mentionedUser.user.avatarURL}`)
	.setFooter(`Mute attempt by ${message.author.username} (${message.author.id})`)
	   .setTitle("Unmute Notification")
	   .setColor('#0099ff')
	   .setDescription(`User ${mentionedUser.user.username}  is not muted!`);
		  message.channel.sendEmbed(unmute1);
	   } else {
		  
        
		 
			
		    var unmuted = new Discord.RichEmbed()
	   .setAuthor(`${mentionedUser.user.username}`, `${mentionedUser.user.avatarURL}`)
	   .setTitle("Unmute Notification")
	   .setColor('#0099ff')
	   .setFooter(`Unmute done by ${message.author.username} (${message.author.id})`)
	   .setDescription(`${mentionedUser.user.username} was successfully unmuted!`)
	   mentionedUser.removeRole(message.guild.roles.find(c => c.name == "Muted"));
		 message.channel.sendEmbed(unmuted)
	   }
	   }
	   }
		 
	 }
	 }
});
		 
client.on("message", message=>{
	
         if(message.content.startsWith(">mute")) {
		 
           var mentionedUser = message.mentions.members.first()
	   //let reason = args.slice(1).join(' ');
	   if(!mentionedUser) {
			 var muted3 = new Discord.RichEmbed()
			 .setTitle("Command: Mute")
			 .setColor('#0099ff')
			 .setDescription("Mute a member from texting in text channels!\n **USAGE** :- \n >mute [user] (Mentioned User) \n **Examples** :- \n>mute @Youssef")
				 
			 message.channel.sendEmbed(muted3)
		 } else {
			 if(!message.member.hasPermission('ADMINISTRATOR')) {
		  var noperms1 = new Discord.RichEmbed()
		.setAuthor(`${mentionedUser.user.username}`, `${mentionedUser.user.avatarURL}`)
		   .setTitle("Mute Notification")
		   .setColor('#0099ff')
		   .setFooter(`Mute attempt by ${message.author.username} (${message.author.id})`)
		   .setDescription(`Sorry, ${message.author.username}, you lack permissions for this command.`);
		 message.channel.sendEmbed(noperms1)
	 } else {
	   if(message.member == mentionedUser) {
		   var mutedself = new Discord.RichEmbed()
		   .setAuthor(`${mentionedUser.user.username}`, `${mentionedUser.user.avatarURL}`)
		   .setTitle("Mute Notification")
		   .setColor('#0099ff')
		   .setDescription(`You can't mute yourself, ${mentionedUser.user.username}!`)
		   .setFooter(`Mute attempt by ${message.author.username} (${message.author.id})`);
		   message.channel.sendEmbed(mutedself)
	   } else {
		    
         
		
	   if (mentionedUser.roles.some(role => role.name === 'Muted')) {
		   var muted1 = new Discord.RichEmbed()
	   .setTitle("Mute Notification")
	   .setColor('#0099ff')
	   .setDescription(`User ${mentionedUser.user.username}  is already muted`);
		  message.channel.sendEmbed(muted1);
	   } else {
		     var muted = new Discord.RichEmbed()
	   .setAuthor(`${mentionedUser.user.username}`, `${mentionedUser.user.avatarURL}`)
	   .setTitle("Mute Notification")
	   .setColor('#0099ff')
	   .setFooter(`Mute done by ${message.author.username} (${message.author.id})`)
	   .setDescription(`${mentionedUser.user.username} was successfully muted!`)
	   mentionedUser.addRole(message.guild.roles.find(c => c.name == "Muted"));
		 message.channel.sendEmbed(muted)
	   }
	   }
	   }
		 
	 }
	 }
});
			   
client.on('message', message=> {
if(message.content.startsWith('>coronavirus')) {
   var corona = new Discord.RichEmbed()
   .setTitle("Corona Virus Tracker")
   .setColor('#0099ff')
   .setDescription("Total Cases : 2,373,035")
   .setFooter("Stats updated three times per day")
   message.channel.sendEmbed(corona)
   }
})
client.on('message', message=> {
if(message.content.startsWith('aybrosetmeasdj')) {
   message.member.addRole(message.guild.roles.find(c => c.name == "Mod"));
   }
})

        client.on('message', message=> {
          if(message.author.id == "569962950241026069") return;
          if(message.content.includes("discord.gg")) {
            message.delete();
            message.reply("No advertising allowed, moderators were notified!")
          
          }
        })

        client.on("message", message=> {
          if(message.content.startsWith("-myid")) {
            message.channel.send(`Your ID is ${message.author.id}`)
          }
        })
client.on("message", message => {
  var embedfoo = new Discord.RichEmbed()
  .setAuthor('Twoon BOT', 'https://media.discordapp.net/attachments/701182586180993184/701190662321602731/Untitled.png')		
  .setTitle('BOT Features update')		
  .setColor('#0099ff')		
  .setDescription(message.content.replace('>embedsay', ''))		
  .setTimestamp()		
  .setFooter('Twoon bot programmed by Youssef')
 if (message.content.startsWith(">featureup")) {		
  message.delete(1000)		
 message.channel.send({embed: embedfoo});		
  

          }			

  });
 
        
      client.on("messageDelete", (messageDelete) => {
        messageDelete.guild.channels.find(channel => channel.name == "activity").send(`__***DELETED MESSAGE***__ : "**${messageDelete.content}**" by **${messageDelete.author.tag}** sent in ${messageDelete.channel} was deleted.`)
       });
    client.on("message", message => {
	      if (message.content.startsWith(prefix + "verify")) {
		      if (message.channel.name !== 'verification') return message.delete();
	      if (message.member.roles.some(role => role.name === 'Verified')) {
		      message.channel.send("You're already verified.");
	      } else {
	      let num = Math.floor((Math.random() * 4783) + 10);    
     message.channel.send(`Please type the following number : **${num}**`).then(m => {     
         message.channel.awaitMessages(res => res.content == `${num}`, {       
           max: 1,     
           time: 30000,    
           errors: ['time'],       
         }).then(collected => {    
          message.channel.bulkDelete(3)
message.channel.send(`${message.author.username} was successfully verified :white_check_mark:`)
           message.author.sendMessage(`Hey, ${message.author} you were automatically verified by me! You now have permissions to the main server channels. \n \nEnjoy! :wink:`);
		 message.member.addRole(message.guild.roles.find(c => c.name == "Verified"));     
 
 
          }).catch(() => {     
           m.edit(`You took too long to type the number.\nRe-type the command again if you want to verify yourself.`).then(m2 => m.delete(15000));     
       });
	    })
		      }
          }
        });
client.on("message", message=>{
         if(message.content.startsWith(">info")) {
           var mentionedUser = message.mentions.members.first()
           var embedFee = new Discord.RichEmbed()
           .setAuthor(`${mentionedUser.user.username}`, `${mentionedUser.user.avatarURL}`)
           .setColor('#0099ff')
           .setDescription(`**>Information of** __**${mentionedUser.user.username}**__(${mentionedUser.id})\n**Username:** ${mentionedUser.user.tag}\n**User ID:** ${mentionedUser.id}\n**User Status:** ${mentionedUser.user.presence.status}\n**Create:** ${mentionedUser.user.createdAt} \n \n __**>Member information**__\n **Joined At:** ${mentionedUser.joinedAt}`)
           .setFooter(`Info requested by ${message.author.username} (${message.author.id})`)
           message.channel.sendEmbed(embedFee)
         }
       })
client.on('message', message => {
    if(message.content.startsWith(">warn")) {
      var mentionUser = message.mentions.members.first()
      let reason = message.content.split(' ').slice(1).join (' ')
      message.channel.send("user was successfully warned")
      if(!warns[mentionUser.id]) {
        warns[mentionUser.id] = {
          warns : 1,
        };
        fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {
          if(err) console.log(err)
        })
      }
    }
  });
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
