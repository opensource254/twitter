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
Router.get('/:username', cacheMiddleware(600), async (req, res, next) => {
    let count = 100
    const username = req.params.username

    if (!username) {
        res.status(400)
    }

    if (req.query.count) {
        count = req.query.count
    }

    try {
        const user = await client.users.findUserByUsername(username, { 'user.fields': ['id', 'public_metrics', 'created_at'], 'expansions': ['pinned_tweet_id'] })
        const tweets = await client.tweets.usersIdTweets(user.data.id, {
            'tweet.fields': [
                'attachments',
                'text'
            ],
            'max_results': count,
            'media.fields': ['url', 'alt_text', 'duration_ms'],
            'user.fields': ['name'],
        },)
        res.json(tweets.data)
    } catch (error) {
        next(error)
    }
})

module.exports = Router
