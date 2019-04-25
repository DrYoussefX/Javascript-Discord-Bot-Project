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


 
client.on('message', message => {
    if (message.isMentxvhgfxioned(client.user)) {
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

