import Tweet from "./models/tweet";
import Configuration from "./config/configuration";

import Twitter from "./clusters/twitter";

import * as Utils from "./helpers/utils";
import logger from "./helpers/log";

import Message from './message'


var express = require('express')
var app = express()
console.log(__dirname + '/static')
app.use(express.static('static'));
 
app.get('/tweet', function (req, res) {
  console.log("Je suis dans le serveur twitter", req.query.message);
  Message.sendTweetMessage(req.query.message);
  res.send();
});

app.get('/simple', function (req, res) {
  console.log("Je suis dans le serveur simple", req.query.message);
  Message.sendSimpleMessage(req.query.message);
  res.send();
});

app.listen(3000);


