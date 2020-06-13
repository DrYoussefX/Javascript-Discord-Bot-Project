const mongoose = require("mongoose");
const reportSchema = mongoose.Schema({
    _id: String,
    warnID: String,
    username: String,
    userID: String,
    Type: String,
    reason: String,
    rUsername: String,
    rID: String,
    time: String,
    guild: String
    
});
module.exports = mongoose.model("Report", reportSchema)
