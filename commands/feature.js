const discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    let update = new discord.RichEmbed()
    .setTitle("Update Notification")
    .setFooter(`New update released by Drdery`)
  .setDescription(args.slice(">feature").join(" "))
  .setColor("#9400D3")
   message.channel.sendEmbed(update)
}
module.exports.help = {
    name: "feature"
}
