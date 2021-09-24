const Twit = require('twit');
const {HANDLE_GET_QUOTES} = require('./libs/quotes/fetch');
const {HANDLE_POSTQUOTE_ON_TWITTER} = require('./libs/twitter');
const NodeCron = require('node-cron');
let config;

require('dotenv').config()

console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV !== 'production'){
config  = require('./libs/config');
}else{
    config={
        consumer_key: process.env.QUOTE_CONSUMER_KEY,
        consumer_secret: process.env.QUOTE_CONSUMER_SECRET,
        access_token: process.env.QUOTE_ACCESS_TOKEN,
        access_token_secret: process.env.QUOTE_ACCESS_TOKEN_SECRET,
    }
};

const Twitter = new Twit(config);


/**
 * Shedule Tweets
 * 8am and 8pm everyday
 */

NodeCron.schedule('0,0,0 7,19 * * *', async()=>{
    // console.log('Scheduling.')
    const quote = await HANDLE_GET_QUOTES();
    await HANDLE_POSTQUOTE_ON_TWITTER(Twitter,quote);
});