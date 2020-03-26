const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = "-";

 

client.on('ready', () => {

    console.log('I am ready!')
);
client.on('message', message => {
if(message.content.includes("test") {
   message.channel.send("hi");
   }
}
client.login(process.env.BOT_TOKEN);
