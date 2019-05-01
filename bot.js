const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = "-";

 

client.on('ready', () => {

    console.log('I am ready!')
client.user.setPresence({ game: { name: 'with discord.js' }, status: 'idle' })
 .then(console.log)
 .catch(console.error);

});
client.on('message', message => {
var msgArray = message.content.split(" ");
var args = msgArray.slice(1);
var warnUser = message.guild.member(message.mentions.users.first());
var warnReason = args.join(" ").slice(22);
const embedsi = new Discord.RichEmbed()
.setColor('#32CD32')
 .setAuthor('Neo BOT')
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
client.on('message', message => {
let messageArray = message.content.split(" ");
let args = messageArray.slice(1).join(" ");
if (message.content.startsWith(prefix + "suggest")) {
message.delete(1000)
message.reply("suggestion was successfully sent :white_check_mark:");
client.channels.get('572137978365739010').send(` ${message.author} has submitted a sugestion. \nSuggestion is : **${args}** `);
}
});

 client.on("message", message => {
   var embedfoo = new Discord.RichEmbed()
   .setAuthor('Twoon BOT', 'https://code.fb.com/wp-content/uploads/2017/06/Facebook-Messenger-Bot-01.png')		
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

client.on('message', message => {
	var embedrt = new Discord.RichEmbed()
	.setAuthor('Twoon BOT', 'https://code.fb.com/wp-content/uploads/2017/06/Facebook-Messenger-Bot-01.png')
	.setTitle('BOT Features')
	.setColor('#FF0000')
	.addField('Features', 'Ping check\nSay command\nWarn command\nSwear detector with auto warn and kick\nSuggest command\nReport command\nEcho with embed\nHelp command\nServer rules command\nInformation command\nAnd maybe even some easter eggs :wink:')
	.setDescription('These are the multiple features that the BOT can do, to know how to use them just type -help :slight_smile:')
	.setTimestamp()
	.setFooter('Twoon bot programmed by Jesse & Awebdo')
 if (message.content.startsWith(prefix + "features")) {
message.delete(1000)
message.channel.sendEmbed(embedrt);
}
});
	
client.on('message', message => {
let messageArray2 = message.content.split(" ");
let args2 = messageArray2.slice(1).join(" ");
if (message.content.startsWith(prefix + "report")) {
message.delete(100)
message.reply("Report was successfully sent :white_check_mark:");
client.channels.get('572825291177590814').send(` ${message.author} has submitted a report. \nReport is : **${args2}** `);
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
	    })
       
         client.on("message", message=> {
 var embedfh = new Discord.RichEmbed()
 .setColor('#0099ff')	
 .setAuthor('Twoon BOT', 'https://code.fb.com/wp-content/uploads/2017/06/Facebook-Messenger-Bot-01.png')
 .setTitle('Help list')
 .setDescription('This is a help list with all the commands you can use, Enjoy!')
 .addField('Commands', 'Use -ping to check your ping\nUse -say to make the BOT say what you want!\nUse -echoembed to make an embeded message\nUse -clear to delete 10 messages\nUse -clearall to clear all the messages\nUse -suggest to suggest an idea to the staff members!\nUse -warn to warn someone\nUse -verify to get verified!\nUse -report to report a bug or even report an user\nUse -info to get information about the BOT\nAnd finally use -help to get this message!')
 
 .setTimestamp()
 .setFooter('Twoon BOT programmed by Jesse & Awebdo')
 var embedth = new Discord.RichEmbed()
 .setColor('#32CD32')
 .setAuthor('Twoon BOT', 'https://code.fb.com/wp-content/uploads/2017/06/Facebook-Messenger-Bot-01.png')
 .setTitle('Help command')
 .addField('Help list sent using a private message :white_check_mark:', 'Wanna take a look on the rules? Use -rules command :wink:')
 .setTimestamp()
 .setFooter('Twoon BOT programmed by Jesse & Awebdo')
 if (message.content.startsWith(prefix + "help")) {
	 if (message.channel.id === '572057152559120394') {
  message.react('✅');
  message.author.sendEmbed(embedfh);
  message.channel.sendEmbed(embedth);
 
       } else {
	       message.channel.send("No, use <#572057152559120394> instead <:angrycowboy:569627380084375573>");
	       }
	 }
 });

  client.on("message", message=> {
 var embedsh = new Discord.RichEmbed()
 .setColor('#0099ff')	
 .setAuthor('Twoon BOT', 'https://code.fb.com/wp-content/uploads/2017/06/Facebook-Messenger-Bot-01.png')
 .setTitle('Server rules')
 .setDescription('This is a rules list with all of the server rules, Enjoy!')
 .addField('Rules', '1-Dont swear, swearing might get you kicked!\n2-Use the channel commands to know the commands or information on the BOT.\n3-Dont ruin the server or the staff will ban you.\n4-Dont suggest useless ideas or ideas that already exist.\n5-Dont mention the BOT or the staff for useless reasons or for no reason at all.\n6-Try not to exploit bugs instead tell the staff so they can fix it!\n7-Dont forget to have fun!')
 .setTimestamp()
 .setFooter('Twoon BOT programmed by Jesse & Awebdo')
 var embedtr = new Discord.RichEmbed()
 .setColor('#32CD32')
 .setAuthor('Twoon BOT', 'https://code.fb.com/wp-content/uploads/2017/06/Facebook-Messenger-Bot-01.png')
 .setTitle('Rules command')
 .addField('Server rules were sent using a private message :white_check_mark:', 'Wanna take a look on the commands? Use -help command :wink:')
 .setTimestamp()
 .setFooter('Twoon BOT programmed by Jesse & Awebdo')
 if (message.content.startsWith(prefix + "rules")) {
	 if (message.channel.id === '572057152559120394') {
  message.react('✅');
  message.author.sendEmbed(embedsh);
  message.channel.sendEmbed(embedtr);
 
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
    if (message.content.startsWith(prefix + "clearall")) {
if (message.member.roles.some(role => role.name === 'Mod')) {
     message.channel.bulkDelete(100);
message.channel.send(" all messages successfully deleted :white_check_mark:");
message.channel.bulkDelete(1);
} else {
message.reply("you do not have permissions to use this command")
}
    }
});
 
client.on("message", message=> {
 var embedfi = new Discord.RichEmbed()
 .setColor('#FF0000')
 .setAuthor('Twoon BOT', 'https://code.fb.com/wp-content/uploads/2017/06/Facebook-Messenger-Bot-01.png')
 .setFooter('Twoon programmed by Jesse & Awebdo')
 .setTimestamp()
 .addField('Version 0.9.8', 'Server moderation with multiple features')
 .addField('Servers', client.guilds.size)
 .addField('BOT Users', client.users.size)
 .addField ('Owners','Awebdo#9161  [Facebook account](https://www.facebook.com/profile.php?id=100007133072446)\nJesse#8454  [Facebook account](https://www.facebook.com/html541564)')
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
     	 if (message.member.roles.some(role => role.name === 'warnx1')) return;
	     if (message.author.bot) return;
	     if (message.member.roles.some(role => role.name === 'Admin')) return;
     	
     if (message.member.roles.some(role => role.name !== 'warnx1')) {
     	message.member.addRole(message.guild.roles.find(c => c.name == "warnx1"));
    
       message.delete(100)
                        
       message.reply("No swearing allowed, Swear deleted :slight_smile:, you were given the first warning.")
       }
       }
});

client.on('message', message => { 
  
     if (message.content.includes("shit") || message.content.includes("fuck") || message.content.includes("احا") || message.content.includes("كسم") || message.content.includes("شرموط") || message.content.includes("متناك") || message.content.includes("kosom") || message.content.includes("a7a") || message.content.includes("ksm") || message.content.includes("asshole") || message.content.includes("cunt") || message.content.includes("bitch") || message.content.includes("mtnak")) {
     	if (message.member.roles.some(role => role.name === 'warnx2')) return;
     if (message.member.roles.some(role => role.name === 'warnx1')) {
     	message.member.addRole(message.guild.roles.find(c => c.name == "warnx2"));
    
       message.delete(100)
                        
       message.reply("No swearing allowed, Swear deleted :slight_smile:, you were given the second warning.")
       }
       }
});
client.on('message', message => {
  
     if (message.content.includes("shit") || message.content.includes("fuck") || message.content.includes("احا") || message.content.includes("كسم") || message.content.includes("شرموط") || message.content.includes("متناك") || message.content.includes("kosom") || message.content.includes("a7a") || message.content.includes("ksm") || message.content.includes("asshole") || message.content.includes("cunt") || message.content.includes("bitch") || message.content.includes("mtnak")) {
     	if (message.member.roles.some(role => role.name === 'warnx3')) return;
     if (message.member.roles.some(role => role.name === 'warnx2')) {
     	message.member.addRole(message.guild.roles.find(c => c.name == "warnx3"));
    
       message.delete(100)
                        
       message.reply(`Swearing detected, ${message.author.username} was kicked for having three warns.`)
       message.member.kick()
       }
       }
});




 
client.on('message', message => {
 if (message.author.bot) return;
    if (message.isMentioned(client.user)) {
       message.reply("hey! :slight_smile:")
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

client.on('message', message => {
    if (message.content === ("EasterEgg1")) {
    message.reply(":thinking:")
    message.author.sendMessage("Easter egg 1\nI reAlly like battle royale especialy the battle grounds one, Do you like any of them?")
    message.delete(100)
    }
});

client.on('message', message => {
    if (message.content === ("Pubg")) {	
    message.reply(":thinking:")	
    message.author.send("Easter Egg 2\nSomeone in this server is a bit DARK, Maybe try saying his name?")
    message.delete(100)
    }
});

client.on('message', message => {
    if (message.content === ("Jesse")) {
	    message.reply(":thinking:")
	    message.author.send("Taster egg 3\n This BOT can't make mistakes, And for sure can't make spelling ones")
	    message.delete(100)
    }
});
	    
// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret

