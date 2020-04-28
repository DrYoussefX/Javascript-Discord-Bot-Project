const mongoose = require("mongoose");
const configSchema = mongoose.Schema({
    guildID: String,
    prefix: String
});
module.exports = mongoose.model("Config", configSchema)
