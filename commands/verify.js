const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    let verified = message.mentions.members.first()
let verifyno = Math.floor((Math.random() * 5000) + 100);
message.channel.send(`Hey ${message.author}, would you like to get verified at ${message.guild.name}`)
const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
console.log(collector)
collector.on('collect', message => {
    if(message.content === "y") {
    message.channel.send(`Alright, you have 20 seconds to type the follwoing number :- **${verifyno}**.`)
    if(message.content === verifyno) {
    message.channel.send("You were successfully verified.")
    }
    } else {
        if(message.content === "n") {
            message.channel.send(`Alright, as you wish.`)
        }
    }
})
}
module.exports.help = {
    name: "verify"
}
