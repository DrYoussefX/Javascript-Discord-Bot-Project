Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@Jesse541 
Learn Git and GitHub without any code!
Using the Hello World guide, you’ll start a branch, write comments, and open a pull request.


Jesse541
/
awebto
forked from Awebdo/awebto
0
02
 Code
 Pull requests 0 Actions
 Projects 0
 Wiki
 Security 0
 Insights
 Settings
awebto/bot.js /
@Jesse541 Jesse541 Update bot.js
62f9dfa 9 minutes ago
@Awebdo@Jesse541
82 lines (72 sloc)  2.85 KB
  
Code navigation is available!
Navigate your code with ease. Click on function and method calls to jump to their definitions or references in the same repository. Learn more

const discord = require("discord.js");
const fs = require("fs");
const config = require("./config.json");
const mongoose = require("mongoose");
const Config = require("./config.js")
const bot = new discord.Client({disableEveryone: true});

// When bot ready
bot.on("ready", async () => {
  var channel = bot.channels.get('488369199593422879');
 channel.send("درك بيمسي عليكم")
  mongoose.connect('mongodb+srv://joealex:el7etan1@cluster0-hv0fc.mongodb.net/Prefix?retryWrites=true&w=majority');
  console.log(`${bot.user.username} is ready for action!`);
  bot.user.setActivity(">help || ST. Prefix >");
});

// Load commands
bot.commands = new discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  let jsfiles = files.filter(f => f.split(".").pop() === "js");

  if (jsfiles.length <= 0) return console.log("There are no commands to load...");

  console.log(`Loading ${jsfiles.length} commands...`);
  jsfiles.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${i + 1}: ${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

// Message event
bot.on("message", async message => {
  Config.findOne({
    guildID: message.guild.id
}, (err, guild) => {
    if (err) console.error(err);

    if (!guild) {
        const newConfig = new Config({
            guildID: message.guild.id,
            prefix: config.prefix
        });

        return newConfig.save();
    }
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  let prefix = guild.prefix;
  let messageArray = message.content.split(" ");
  let command = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);

  if (!command.startsWith(prefix)) return;

  let cmd = bot.commands.get(command.slice(prefix.length));
  if (cmd) cmd.run(bot, message, args);
  
  })
})
bot.on("message", message => {
if(message.content.startsWith(">prefix")) {
 mongoose.connect('mongodb+srv://joealex:el7etan1@cluster0-hv0fc.mongodb.net/Prefix?retryWrites=true&w=majority');
 Config.findOne({guildID: message.guild.id}, function(err, config) {
 message.channel.send(`Your server prefix is **${config.prefix}**`);
 })
}
})
bot.on("message", message => {
  if(message.content.startsWith(">setprefix")) {
  mongoose.connect('mongodb+srv://joealex:el7etan1@cluster0-hv0fc.mongodb.net/Prefix?retryWrites=true&w=majority');
    mongoose.set('useFindAndModify', false);
    let prefix = message.content.slice(">setprefix").trim().split(/ +/g);
    if(!prefix) return message.channel.send("No prefix found")
    Config.findOneAndUpdate({guildID: message.guild.id}, {prefix: prefix}, function(err, config) {
        if(err) console.log(err)
        message.channel.send(`Prefix was successfully changed.`)
    })
  }
})
bot.login(process.env.BOT_TOKEN);
