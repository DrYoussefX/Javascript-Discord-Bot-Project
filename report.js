const mongoose = require("mongoose");
const reportSchema = mongoose.Schema({
    _id: {type:String},
    username: {type:String},
    userID: {type:String},
    Type: {type:String},
    reason: {type:String},
    rUsername: {type:String},
    rID: {type:String},
    time: {type:String},
    guild: {type:String},
    warnID: {type:String}
});
module.exports = mongoose.model("Report", reportSchema)
