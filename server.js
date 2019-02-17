"use strict";

const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
var httpController = require("./controllers/httpController");
//var apiController = require("./controllers/apiController");
const model = require("./model/model");

const app = express();
app.use(express.static(__dirname + '/public'));

app.set("view engine", "ejs");
app.set('views', __dirname + '/views');

//apiController(app);
model(app);

app.listen(port);