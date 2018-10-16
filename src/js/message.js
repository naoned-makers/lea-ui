
import Tweet from "./models/tweet";
import * as Utils from "./helpers/utils";
import Arduino from "./clusters/arduino";
import Twitter from "./clusters/twitter";

/**
 * Consdtructeur.
 * @constructor
 */
function Message () {

}

Message.sendSimpleMessage = function(msg) {
    let tweet = Utils.generateTweet(msg);
    tweet.motion = 'KUNG_FU_PANDA';
    Arduino.messageHandler(tweet);
}

Message.sendTweetMessage = function(msg) {
    Twitter.sendTweet(msg);
    //Arduino.messageHandler(tweet);
}
module.exports = Message;