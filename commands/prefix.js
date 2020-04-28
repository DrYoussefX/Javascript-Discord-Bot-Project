const Discord = require("discord.js");
const Config = require("../config.js")
const mongoose = require("mongoose");
module.exports.run = async (bot, message, args) => {
    //await message.delete();
    mongoose.connect('mongodb+srv://joealex:el7etan1@cluster0-hv0fc.mongodb.net/Prefix?retryWrites=true&w=majority');
    mongoose.set('useFindAndModify', false);
    let prefix = args[0]
    if(!prefix) return message.channel.send("No prefix found")
    Config.findOneAndUpdate({guildID: message.guild.id}, {prefix: prefix}, function(err, config) {
        if(err) console.log(err)
        message.channel.send(`Prefix was successfully changed.`)
    })
}
module.exports.help = {
    name: "setprefix"
}
