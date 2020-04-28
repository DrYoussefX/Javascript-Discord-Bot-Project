const Discord = require("discord.js");
const Config = require("../config.js")
const mongoose = require("mongoose");
module.exports.run = async (bot, message, args) => {
    //await message.delete();
    mongoose.connect('mongodb+srv://joealex:el7etan1@cluster0-hv0fc.mongodb.net/Prefix?retryWrites=true&w=majority');
    let prefix = args[1]
    const config = new Config({
        guildID: message.guild.id,
        prefix: prefix
    });
    config.save()
    .then(result => console.log(result))
    .catch(err => console.log(err));
}
module.exports.help = {
    name: "setprefix"
}
