const discord = require("discord.js");
const fs = require("fs");
const config = require("./config.json");
const mongoose = require("mongoose");
const Config = require("./config.js")
const bot = new discord.Client({disableEveryone: true});

bot.on("message", message => {
if(message.startsWith(">prefix") {
 mongoose.connect('mongodb+srv://joealex:el7etan1@cluster0-hv0fc.mongodb.net/Prefix?retryWrites=true&w=majority');
 Config.findOne({guildID: message.guild.id}, function(err, config) {
 message.channel.send(`Your server prefix is **${config.prefix}**`);
 })
}
})
bot.login(process.env.BOT_TOKEN)
