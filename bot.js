const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "-";

 

client.on('ready', () => {

    console.log('I am ready!')
client.user.setPresence({ game: { name: 'with discord.js' }, status: 'idle' })
 .then(console.log)
 .catch(console.error);

});	

   

        client.on('message', message=> {
          if(message.author.id == "569962950241026069") return;
          if(message.content.includes("discord.gg")) {
            message.delete();
            message.reply("No advertising allowed, moderators were notified!")
            message.guild.channels.find(channel => channel.name == "activity").send(`**${message.author.tag}** advertised a discord server in ${message.channel}!\n __***${message.author.username}***__ : **${message.content}** \n**Message sent at** : **${message.createdAt}**`)
          }
        })

        client.on("message", message=> {
          if(message.content.startsWith("-myid")) {
            message.channel.send(`Your ID is ${message.author.id}`)
          }
        })
client.on("message", message=> {
  let url = message.content.split(' ').slice(1).join (' ')
  if(message.content.startsWith("-readbin")) {
    message.channel.send("Just wait a few seconds, text will be sent shortly.")
    .then(message => {
      message.delete(1000)
    })
    snekfetch.get(url).then(r => message.channel.send(decodeURIComponent(r.body)));
    
  }
})
client.on("message", message => {
  var embedfoo = new Discord.RichEmbed()
  .setAuthor('Twoon BOT', 'https://code.fb.com/wp-content/uploads/2017/06/Facebook-Messenger-Bot-01.png')		
  .setTitle('Echo!')		
  .setColor('#0099ff')		
  .setDescription(message.content.replace('-echoembed', ''))		
  .setTimestamp()		
  .setFooter('Twoon bot programmed by Youssef & Awebdo')
 if (message.content.startsWith("-echoembed")) {		
  message.delete(1000)		
 message.channel.send({embed: embedfoo});		
  

          }			

  });
 
        client.on('message', message=> {
          if (message.isMentioned(client.user)) {
          message.channel.send('<@569962950241026069>');
      }
      });
      client.on("messageDelete", (messageDelete) => {
        messageDelete.guild.channels.find(channel => channel.name == "activity").send(`__***DELETED MESSAGE***__ : "**${messageDelete.content}**" by **${messageDelete.author.tag}** sent in ${messageDelete.channel} was deleted.`)
       });
    
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
