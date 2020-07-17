const discord = require("discord.js");
module.exports.run = async (bot, msg, args) => {
  let text = msg.content.slice('>say'.length); // cuts off the /private part 
   msg.guild.members.forEach(member => { 
      if (member.id != client.user.id && !member.user.bot) { 
         member.send(text); 
      }); 
   }
}
module.exports.help = {
    name: "say"
}
