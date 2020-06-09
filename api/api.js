const Router = require('express').Router()
const client = require('./twitter');
const cacheMiddleware = require('./middleware/cache');
const formatTweets = require('./mixins/formatTweets');

/**
 * -------------------------------------------------
 * 
 * Get the recent tweets from a given username
 * 
 * -----------------------------------------------
 */
Router.get('/:username', cacheMiddleware(600), async (req, res, _next) => {
    let count = 100
    const username = req.params.username

    if (req.query.count) {
        count = req.query.count
    }

    try {
        const tweets = await client.get('/statuses/user_timeline.json', { screen_name: `${username}`, count: count, tweet_mode: 'extended' })
        res.json(formatTweets(tweets))
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

module.exports = Router
