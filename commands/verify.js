const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
module.exports.run = async (bot, message, args) => {
let verifyno = Math.floor((Math.random() * 5000) + 100);
    if (message.member.roles.some(role => role.name === 'Verified')) return message.channel.send("You're already verified.")
message.channel.send(`Type the verification code :- **${verifyno}** .`)
const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
console.log(collector)
collector.on('collect', message => {
        if(message.contet !== verifyno) {
            message.channel.send("You entered a wrong verification code.")
        } else {
            if(message.content == verifyno) {
                message.channel.send(`You've succesfully passed the first stage of verification. Your request must be accepted by server admins.`)
               // message.member.addRole(message.guild.roles.find(c => c.name == "Verified"));
               const filter = (reaction, user) => reaction.emoji.name === '👌' && user.id === '546316934187057163'
               let msg = bot.channels.get("709775175331217519")
               msg.send(`User ${message.author.username} has request verification, would you like to verify him? (y/n)`)
               msg.react("👍")
               msg.react("👎")
               msg.awaitReactions(filter, { time: 15000 })
  .then(collected => console.log(`Collected ${collected.size} reactions`))
  .catch(console.error);
        }
    }
    })
}
module.exports.help = {
    name: "verify"
}
