const Twit = require('twit');
const {HANDLE_GET_QUOTES} = require('./libs/quotes/fetch');
const {HANDLE_POSTQUOTE_ON_TWITTER} = require('./libs/twitter')
let config;

if(process.env.NODE_ENV !== 'production'){
config  = require('./libs/config');
}else{
    config={
        consumer_key: process.env.consumer_key,
        consumer_secret: process.env.consumer_secret,
        access_token: process.env.access_token,
        access_token_secret: process.env.access_token_secret,
    }
};

const Twitter = new Twit(config);


( async()=>{

    const quote = await HANDLE_GET_QUOTES();
    await HANDLE_POSTQUOTE_ON_TWITTER(Twitter,quote);
})()