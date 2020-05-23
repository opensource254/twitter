const Router = require('express').Router()
const client = require('./twitter')
const cacheMiddleware = require('./middleware/cache')
const moment = require('moment')
const formatInRelativeTime = require('./mixins/relativeTime')

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
        const twts = tweets.map(status => {
            return {
                id: status.id,
                tweet: status.full_text,
                media: status.entities.media,
                created_at: status.created_at,
                realtive_time: formatInRelativeTime(status.created_at),
                user: status.user.name
            }
        })
        res.json(twts)
    } catch (error) {
        res.status(500)
        res.json(error)
    }
})

module.exports = Router