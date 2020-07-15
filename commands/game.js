const Discord = require("discord.js");
const Report = require("../report.js")
const mongoose = require("mongoose");
module.exports.run = async (bot, message, args) => { 
var move = args[0]
var facts = ["Rock", "Paper", "Scissors"];
var fact = Math.floor(Math.random() * facts.length); 
  if(move == "Paper") {
     if(facts[fact] == "Paper") {
message.channel.send("Paper, its a Draw.")
    } else {
      if(facts[fact] == "Rock") {
        message.channel.send("Rock, you won!")
        } else {
          if(facts[fact] == "Scissors") {
            message.channel.send("Scissors, better luck next time")
            }
          }
      }
  }
        
}
}
module.exports.help = {
name: "play"
}
