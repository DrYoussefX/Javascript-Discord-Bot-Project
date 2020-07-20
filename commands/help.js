

//COPYRIGHTS RESERVED FOR HAWK ( TWOON BOT )
  


const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => { 
message.member.send(`Hey **${message.author.username}**! \n**Twoon**'s website link :- http://twoon.ga/?i=1 \n **Twooon**'s support server :- https://discord.com/invite/rB6vZt6 \nI hope you enjoy using me!`)
message.react("✅")
}
module.exports.help = {
name: "help"
}
