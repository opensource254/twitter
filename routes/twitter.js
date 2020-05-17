const Router = require('express').Router()
const Twitter = require('twitter')

/**
 * Create a new Twitter client
 * 
 */
const client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

Router.get('/', (req, res, next) => {
    res.json({ message: 'Okay' });
})



Router.get('/:user/recent', (req, res) => {
    let user = req.params.user
    client.get('/statuses/user_timeline.json', { screen_name: `${user}`, count: 30, tweet_mode: 'extended' }, function (error, tweets, response) {
        let twts = tweets.map((statuses) => {
            return { tweet: statuses.full_text, media: statuses.entities.media, created_at: statuses.created_at }
        })

        res.json({ 'tweets': twts })
    });
})

module.exports = Router
