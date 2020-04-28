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
    console.log(process.env.CONSUMER_KEY)
    let user = req.params.user
    client.get('/statuses/user_timeline.json', { screen_name: `${user}`, count: 15 }, function (error, tweets, response) {
        console.log(tweets)
        let twts = tweets.map((statuses) => {
            return { tweet: statuses.text, created_at: statuses.created_at }
        })

        res.json({ 'tweets': twts })
    });
})

module.exports = Router
