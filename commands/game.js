const Discord = require("discord.js");
const Report = require("../report.js")
const mongoose = require("mongoose");
module.exports.run = async (bot, message, args) => { 
var move = args[0]
var facts = ["rock", "paper", "scissors"];
var fact = Math.floor(Math.random() * facts.length); 
  if(!move) return message.channel.send("What's your move? [rock, paper, scissors]\n Ex: >play rock")
  if(move == "paper") {
     if(facts[fact] == "paper") {
message.channel.send("Paper, its a Draw!")
    } else {
      if(facts[fact] == "rock") {
        message.channel.send("Rock, you won!")
        } else {
          if(facts[fact] == "scissors") {
            message.channel.send("Scissors, better luck next time!")
            }
          }
      
        }
}
  if(move == "rock") {
     if(facts[fact] == "rock") {
message.channel.send("Rock, its a Draw.")
    } else {
      if(facts[fact] == "scissors") {
        message.channel.send("Scissors, you won!")
        } else {
          if(facts[fact] == "paper") {
            message.channel.send("Paper, better luck next time!")
            }
          }
      
        }
}
  if(move == "scissors") {
     if(facts[fact] == "scissors") {
message.channel.send("scissors, its a Draw!")
    } else {
      if(facts[fact] == "paper") {
        message.channel.send("Paper, you won!")
        } else {
          if(facts[fact] == "rock") {
            message.channel.send("Rock, better luck next time!")
            }
          }
      
        }
}
}
module.exports.help = {
name: "play"
}
