const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = "-";

 

client.on('ready', () => {

    console.log('I am ready!');

});
client.on('message', message => {
let messageArray = message.content.split(" ");
let args = messageArray.slice(1).join(" ");
if (message.content.startsWith(prefix + "suggest")) {
message.delete(1000)
message.reply("suggestion was successfully sent :white_check_mark:");
client.channels.get('572137978365739010').send(` ${message.author} has submitted a sugestion. \nSuggestion is : **${args}** `);
}
});

client.on('message', message => {
var msgArray = message.content.split(" ");
var args = msgArray.slice(1);
var warnUser = message.guild.member(message.mentions.users.first());
var warnReason = args.join(" ").slice(22);
const embedsi = new Discord.RichEmbed()
.setColor('#32CD32')
 .setAuthor('Twoon BOT')
 .setTitle('Recent warn')
 .addField(`${warnUser} has been warned by ${message.author.username}`, `Reason : "${warnReason}"`)
 .setTimestamp()
 .setFooter('Neo programmed by Jesse')
if (message.content.startsWith(prefix + "warn")) {
	if (message.member.roles.some(role => role.name === 'Mod')) {
message.channel.send(`${warnUser} was successfully warned :white_check_mark:`);
client.channels.get('572129682552520704').send(`__**Recent Warnings**__ : \nMember ${warnUser} was warned by Moderator **${message.author.username}** for **"${warnReason} "**`);
} else { 
message.reply("No! you are not a mod <:angrycowboy:569627380084375573>");
}
}
});

 client.on("message", message => {
   var embedfoo = new Discord.RichEmbed()
   .setAuthor('Twoon BOT', 'https://steembottracker.com/img/bot_logo.png')		
   .setTitle('Echo!')		
   .setColor('#0099ff')		
   .setDescription(message.content.replace('-echoembed', ''))		
   .setTimestamp()		
   .setFooter('Twoon bot programmed by Jesse & Awebdo')
  if (message.content.startsWith("-echoembed")) {		
   if (message.member.roles.some(role => role.name === 'Dev')) {
   message.delete(1000)		
  message.channel.send({embed: embedfoo});		

 } else {
  message.channel.send("Sorry mate, but you are not allowed to use this command :sob:")
  }
   
 
   				}			

   				});		

    client.on("message", message => {
	      if (message.content.startsWith(prefix + "verify")) {
		      if (message.channel.id !== '571292840227897365') return;
	      if (message.member.roles.some(role => role.name === 'Verified')) {
		      message.channel.send("You're already verified.");
	      } else {
	      let num = Math.floor((Math.random() * 4783) + 10);    
     message.channel.send(`Please type the following number : **${num}**`).then(m => {     
         message.channel.awaitMessages(res => res.content == `${num}`, {       
           max: 1,     
           time: 60000,    
           errors: ['time'],       
         }).then(collected => {    
          message.channel.bulkDelete(3)
message.channel.send(`${message.author.username} was successfully verified :white_check_mark:`)
           message.author.sendMessage(`Hey, ${message.author} you were automatically verified by me! You now have permissions to the main server channels. \n \nEnjoy! :wink:`);
		 message.member.addRole(message.guild.roles.find(c => c.name == "Verified"));     
 
 
          }).catch(() => {     
           m.edit(`You took to long to type the number.\nRe-type the command again if you want to verify yourself.`).then(m2 => m.delete(15000));     
       });
	    })
		      }
		      }
	    })
       
         client.on("message", message=> {
 var embedth = new Discord.RichEmbed()
 .setColor('#32CD32')
 .setAuthor('Twoon BOT')
 .setTitle('Help command')
 .addField('Help list sent using a private message :white_check_mark:', 'Wanna take a look on the rules? Use -rules command :wink:')
 .setTimestamp()
 .setFooter('Twoon BOT programmed by Jesse & Awebdo')
 if (message.content.startsWith(prefix + "help")) {
	 if (message.channel.id === '572057152559120394') {
  message.react('✅');
  message.author.sendMessage(" Help list - to be edited. ");
  message.channel.sendEmbed(embedth);
 
       } else {
	       message.channel.send("No, use <#572057152559120394> instead <:angrycowboy:569627380084375573>");
	       }
	 }
 });
 
client.on("message", message=> {
    if (message.content.startsWith(prefix + "clear")) {
if (message.member.roles.some(role => role.name === 'Mod')) {
     message.channel.bulkDelete(10);
message.channel.send(" 10 messages successfully deleted :white_check_mark:");
message.channel.bulkDelete(1);
} else {
message.reply("you do not have permissions to use this command")
}
    }
});
 
client.on("message", message=> {
 var embedfi = new Discord.RichEmbed()
 .setColor('#FF0000')
 .setAuthor('Twoon BOT', 'https://steembottracker.com/img/bot_logo.png')
 .setFooter('Twoon programmed by Jesse & Awebdo')
 .setTimestamp()
 .addField('Version 0.1', 'Server moderation with multiple features')
 .addField('Wanna take a look on server commands? Use -help command. :wink:', 'Use -rules to get the server rules DMed :wink:')
    if (message.content.startsWith(prefix + "info")) {
	    if (message.channel.id === '572057152559120394') {
		    var emojiang = '569627380084375573';
     message.react('✅')
     message.channel.sendEmbed(embedfi);
} else {
message.channel.send("Nope, use <#572057152559120394> instead <:angrycowboy:569627380084375573>");
}
}
});

client.on('message', message => {
    if(message.content.startsWith(prefix + "ping")) {
            message.channel.send('Pong! Your ping is `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
       }
});


client.on('message', message => {
  
     if (message.content.includes("shit") || message.content.includes("fuck") || message.content.includes("احا") || message.content.includes("كسم") || message.content.includes("شرموط") || message.content.includes("متناك") || message.content.includes("kosom") || message.content.includes("a7a") || message.content.includes("ksm") || message.content.includes("asshole") || message.content.includes("cunt") || message.content.includes("bitch") || message.content.includes("mtnak")) {
     if (message.member.roles.some(role => role.name !== 'warnx1')) {
     	message.member.addRole(message.guild.roles.find(c => c.name == "warnx1"));
    
       message.delete(100)
                        
       message.reply("No swearing allowed, Swear deleted :slight_smile:, you were given the first warning.")
       }
       }
});

client.on('message', message => {
  
     if (message.content.includes("shit") || message.content.includes("fuck") || message.content.includes("احا") || message.content.includes("كسم") || message.content.includes("شرموط") || message.content.includes("متناك") || message.content.includes("kosom") || message.content.includes("a7a") || message.content.includes("ksm") || message.content.includes("asshole") || message.content.includes("cunt") || message.content.includes("bitch") || message.content.includes("mtnak")) {
     if (message.member.roles.some(role => role.name === 'warnx1')) {
     	message.member.addRole(message.guild.roles.find(c => c.name == "warnx2"));
    
       message.delete(100)
                        
       message.reply("No swearing allowed, Swear deleted :slight_smile:, you were given the second warning.")
       }
       }
});


 
client.on('message', message => {
 if (message.author.bot) return;
    if (message.isMentioned(client.user)) {
       message.reply("Here! :slight_smile:")
    }
});



client.on('message', message => {
   if (message.content.startsWith(prefix + "say")) {
    var text = message.content.split(' ').slice(1).join (' ')
    if (!text) return message.reply('Say what? I didnt hear you.')
    message.channel.send(text)
    message.delete(100)
   }
});


// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret

