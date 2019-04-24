const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = "$";

const antispam = require('discord-anti-spam')
 

client.on('ready', () => {

    console.log('I am ready!');

});

client.on('message', message => {
    if(message.content.startsWith(prefix + "ping")) {
            message.channel.send('Pong! Your ping is `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
}
    });


  antispam(client, {
        warnBuffer: 3, // Maximum ammount of messages allowed to send in the interval time before getting warned.
        maxBuffer: 5, // Maximum amount of messages allowed to send in the interval time before getting banned.
        interval: 2000, // Amount of time in ms users can send the maxim amount of messages(maxBuffer) before getting banned. 
        warningMessage: "please stop spamming!", // Message users receive when warned. (message starts with '@User, ' so you only need to input continue of it.) 
        banMessage: "has been hit by ban hammer for spamming!", // Message sent in chat when user is banned. (message starts with '@User, ' so you only need to input continue of it.) 
        maxDuplicatesWarning: 7,// Maximum amount of duplicate messages a user can send in a timespan before getting warned.
        maxDuplicatesBan: 10, // Maximum amount of duplicate messages a user can send in a timespan before getting banned.
        deleteMessagesAfterBanForPastDays: 7, // Deletes the message history of the banned user in x days.
        exemptRoles: ["Moderator"], // Name of roles (case sensitive) that are exempt from spam filter.
        exemptUsers: ["MrAugu#9016"] // The Discord tags of the users (e.g: MrAugu#9016) (case sensitive) that are exempt from spam filter.
      });
      
  // Rest of your code
});
 
client.on('message', msg => {
  client.emit('checkMessage', msg); // This runs the filter on any message bot receives in any guilds.
  
  // Rest of your code
}
 

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret

