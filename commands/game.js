const Discord = require("discord.js");
const Report = require("../report.js")
const mongoose = require("mongoose");
module.exports.run = async (bot, message, args) => { 
var move = args[0]
var facts = ["Rock", "Paper", "Scissors"];
var fact = Math.floor(Math.random() * facts.length); 
  if(move == facts[fact]) {
message.channel.send("Stalemate!")
}
}
module.exports.help = {
name: "play"
}
