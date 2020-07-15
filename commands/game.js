const Discord = require("discord.js");
const Report = require("../report.js")
const mongoose = require("mongoose");
module.exports.run = async (bot, message, args) => { 
var move = args[0]
if(move == "rock") {
message.channel.send("Paper, I won.")
}
}
module.exports.help = {
name: "play"
}
