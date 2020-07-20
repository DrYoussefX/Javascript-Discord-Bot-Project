const Discord = require("discord.js");
const Report = require("../report.js")
const mongoose = require("mongoose");
module.exports.run = async (bot, message, args) => { 
var move = args[0]
var botmoves = ["rock", "paper", "scissors"];
var ran = Math.floor(Math.random() * botmoves.length); 
  if(!move) return message.channel.send("What's your move? [rock, paper, scissors]\n Ex: >play rock")
  if(move == "paper") {
     if(botmoves[ran] == "paper") {
message.channel.send("Paper, its a Draw!")
    } else {
      if(botmoves[ran] == "rock") {
        message.channel.send("Rock, you won!")
        } else {
          if(botmoves[ran] == "scissors") {
            message.channel.send("Scissors, better luck next time!")
            }
          }
      
        }
}
  if(move == "rock") {
     if(botmoves[ran] == "rock") {
message.channel.send("Rock, its a Draw.")
    } else {
      if(botmoves[ran] == "scissors") {
        message.channel.send("Scissors, you won!")
        } else {
          if(botmoves[ran] == "paper") {
            message.channel.send("Paper, better luck next time!")
            }
          }
      
        }
}
  if(move == "scissors") {
     if(botmoves[ran] == "scissors") {
message.channel.send("scissors, its a Draw!")
    } else {
      if(botmoves[ran] == "paper") {
        message.channel.send("Paper, you won!")
        } else {
          if(botmoves[ran] == "rock") {
            message.channel.send("Rock, better luck next time!")
            }
          }
      
        }
}
}
module.exports.help = {
name: "play"
}
