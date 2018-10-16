import TwitterAPI from "twitter";

import Tweet from "../models/tweet";
import Configuration from "../config/configuration";
import {chooseSound} from "../helpers/sound";
import Context from "../models/context";
import {isAdmin, isDemoOn, isDemoOff} from "../helpers/utils";
import logger from "../helpers/log";

var client;

/**
 * Constructeur.
 * @constructor
 */
function Twitter() {}

/**
 * Ecoute des tweets grâce à l'API streaming de twitter.
 * Les credentials sont fixés par des variables d'environnement
 */
Twitter.sendTweet = function(message) {
  client = new TwitterAPI({
    "consumer_key": process.env.TWITTER_CONSUMER_KEY,
    "consumer_secret": process.env.TWITTER_CONSUMER_SECRET,
    "access_token_key": process.env.TWITTER_ACCESS_TOKEN_KEY,
    "access_token_secret": process.env.TWITTER_ACCESS_TOKEN_SECRET
  });

  if (message.indexOf('@lea_nmakers') < 0) {
    message = '@lea_nmakers ' + message;
  }
  client.post('statuses/update.json', {status: message}, function(error, tweets, response) {
  });
}


module.exports = Twitter;