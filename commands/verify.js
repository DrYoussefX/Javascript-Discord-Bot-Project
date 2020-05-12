const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let verifyno = Math.floor((Math.random() * 5000) + 100);
message.channel.send(`Type the verification code :- **${verifyno}**, you have`)
const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
console.log(collector)
collector.on('collect', message => {
    if(message.content == verifyno) {
message.channel.send("You were successfully verified")
    } else {
        if(message.contet !== verifyno) {
            message.channel.send("You entered a wrong verification code.")
        }
    }
    })
}
module.exports.help = {
    name: "verify"
}
