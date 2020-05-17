const discord = require("discord.js");
const bot = new discord.Client({disableEveryone: true});
const sqlite3 = require("sqlite3").verbose()
module.exports.run = async (bot, message, args) => {
  let db = new sqlite3.Database('./commands/Accounts.db');
 let accountname = args.slice(">stats").join("")
  let sql = `SELECT * FROM Accounts WHERE AccountName = "${accountname}"`;
  
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {
      let embed = new discord.RichEmbed()
      .setTitle("DarkShadow Server Info")
      .setDescription(`**${accountname} Account Stats**\n\n**Account Name :- **${row.AccountName}\n**Serial :-** ${row.Serial}\n**Money :-** ${row.Money}$\n**Bank Balance :- ** ${row.BankBalance}$\n**Level :- ** ${row.Level}\n**EXP :- ** ${row.Exp}`)
      .setColor('#9400D3')
      message.channel.sendEmbed(embed)
    });
  });
  db.close();

  }

module.exports.help = {
    name: "stats"
}
