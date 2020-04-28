const Discord = require("discord.js");
const Config = require("../config.js")
const mongoose = require("mongoose");
module.exports.run = async (bot, message, args) => {
    //await message.delete();
    mongoose.connect('mongodb+srv://joealex:el7etan1@cluster0-hv0fc.mongodb.net/Prefix?retryWrites=true&w=majority');
    let prefix = args[1]
    Config.findOneAndUpdate({guildID: message.guild.id}, {prefix: prefix}, function(err, config) {
        message.channel.send(`Prefix was successfully changed to ${config.prefix}`)
    })
}
module.exports.help = {
    name: "setprefix"
}
