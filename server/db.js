var mongoose = require("mongoose");
var db = mongoose.connect('mongodb://localhost:27017/myblog');
console.log("DB connected.");
var Schema = mongoose.Schema;
var userInfoSechema = new Schema({
    name: String,
    password: String
});
const models = {
    UserInfo: mongoose.model("userinfo", userInfoSechema)
}
module.exports = models;