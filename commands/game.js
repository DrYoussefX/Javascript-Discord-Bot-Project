const Discord = require("discord.js");
const Report = require("../report.js")
const mongoose = require("mongoose");
module.exports.run = async (bot, message, args) => { 
var move = args[0]
var facts = ["rock", "paper", "scissors"];
var fact = Math.floor(Math.random() * facts.length); 
  if(move == "paper") {
     if(facts[fact] == "paper") {
message.channel.send("Paper, its a Draw.")
    } else {
      if(facts[fact] == "rock") {
        message.channel.send("Rock, you won!")
        } else {
          if(facts[fact] == "scissors") {
            message.channel.send("Scissors, better luck next time")
            }
          }
      
        }
}
}
module.exports.help = {
name: "play"
}
