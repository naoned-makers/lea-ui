import cluster from 'cluster';

import Tweet from "./models/tweet";
import Configuration from "./config/configuration";

import Twitter from "./clusters/twitter";

import * as Utils from "./helpers/utils";
import logger from "./helpers/log";


var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.use(express.static(__dirname + '/static'));

app.listen(3000)


