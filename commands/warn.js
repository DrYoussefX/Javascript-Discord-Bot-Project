const discord = require("discord.js");
const Report = require("../report.js")
const mongoose = require("mongoose");
module.exports.run = async (bot, message, args) => {
    await message.delete();
    
    
    mongoose.connect('mongodb+srv://joealex:el7etan1@cluster0-hv0fc.mongodb.net/Reports?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true');
    let rUser = message.mentions.members.first();
    if(!rUser) return message.reply("Couldn't find the mentioned member.");
    let rreason = args.slice(1).join(" ");
    if(!rreason) return message.reply("Provide a reason")
    let warnsID = Math.floor((Math.random() * 4783) + 10);  
    
const report = new Report({
    _id: mongoose.Types.ObjectId(),
    username: rUser.user.username,
    userID: rUser.id,
    reason: rreason,
    rUsername: message.author.username,
    rID: message.author.id,
    time: message.createdAt,
    warnID: warnsID
});
report.save()
.then(result => console.log(result))
.catch(err => console.log(err));
var embed = new discord.RichEmbed()
    .setTitle("Warn Notification")
    .setDescription(`**Warn successfully logged for ${report.username}** (${report.userID})\n**Reason :-** ${report.reason}\n**Warned By :-** ${report.rUsername} (${report.rID})\n **Warned At :-** ${report.time}\n**Warn ID :-**${report.warnID}`)
    .setColor('#0099ff')
    message.channel.sendEmbed(embed)
}





module.exports.help = {
name: "warn"
}
