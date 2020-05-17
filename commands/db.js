const discord = require("discord.js");
const bot = new discord.Client({disableEveryone: true});
const sqlite3 = require("sqlite3").verbose()
module.exports.run = async (bot, message, args) => {
  let db = new sqlite3.Database('./Accounts.db');
  if(message.content.startsWith(">info")) {
   // let accountname = args.slice(">info").join("")
  let sql = `SELECT * FROM Accounts`;
  
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {
      console.log(row.Money);
    });
  });
  

  }
}
module.exports.help = {
    name: "info"
}
