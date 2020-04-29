const discord = require("discord.js");
const fs = require("fs");
const config = require("./config.json");
const mongoose = require("mongoose");
const Config = require("./config.js")
const bot = new discord.Client({disableEveryone: true});

// When bot ready
bot.on("ready", async () => {
  mongoose.connect('mongodb+srv://joealex:el7etan1@cluster0-hv0fc.mongodb.net/Prefix?retryWrites=true&w=majority');
  console.log(`${bot.user.username} is ready for action!`);
  bot.user.setActivity("Mongoose Database");
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
    let prefix = args[0]
    if(!prefix) return message.channel.send("No prefix found")
    Config.findOneAndUpdate({guildID: message.guild.id}, {prefix: prefix}, function(err, config) {
        if(err) console.log(err)
        message.channel.send(`Prefix was successfully changed.`)
    })
  }
})
bot.login(process.env.BOT_TOKEN);
