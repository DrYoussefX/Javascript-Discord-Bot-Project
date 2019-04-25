const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = "$";

 

client.on('ready', () => {

    console.log('I am ready!');

});


client.on('message', message => {
    if(message.content.startsWith(prefix + "ping")) {
            message.channel.send('Pong! Your ping is `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
       }
});


client.on('message', message => {
  
     if (message.content.includes("shit") || message.content.includes("fuck") || message.content.includes("احا") || message.content.includes("كسم") || message.content.includes("شرموط") || message.content.includes("متناك") || message.content.includes("kosom") || message.content.includes("a7a") || message.content.includes("ksm") || message.content.includes("asshole") || message.content.includes("cunt") || message.content.includes("bitch") || message.content.includes("mtnak")) {
    
       message.delete(100)
                        
       message.reply("No swearing allowed, Swear deleted :slight_smile:")
   
    }

});

if(message.channel.statrtsWith("$kick")) {
 
 
   let kuser = messade.guild.member(message.mention.users.first() || message.guild.members.get(args[0]));
   if(!kuser) return message.channel.send("It seems like this person is invisible!");
   let kreason = args.join(" ").slice(22);
   if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("You can't do that.");
   if(kuser.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Can't do that to him bro.");
 
   let kickembed = new Discord.RichEmbed()
   .setDescription("KICK")
   .setColor("#1009c4")
   .addField("Kicked User", ${kuser} with ID ${kuser.id})
   .addField("Kicked By", <@${message.author.id}> with ID ${message.author.id})
   .addField("Kicked In", message.channel)
   .addField("Time", message.createedAt)
   .addField("Reason", kreason);
 
   let kickchannel = message.guild.channels.find(name, "accidents");
   if(!kickchannel) return message.channel.send("Can't seem to find Accidents channel");
 
   message.guild.member(kuser).kick(kreason)
   kickchannel.send(kickembed);

   return;
}

 
client.on('message', message => {
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

