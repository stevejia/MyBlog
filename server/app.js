const api = require("./api");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(api);
// app.get("*", function(req, res){
//     const html = fs.readFileSync(path.resolve(___dirname, "../"))

// });
app.listen(8088);
console.log("success listen");