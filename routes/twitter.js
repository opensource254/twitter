const Router = require('express').Router()
const Twitter = require('twitter')

/**
 * --------------------------------------
 * Create a new Twitter client
 * This is for version one of the API
 * --------------------------------------
 */
const client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

Router.get('/', (_req, res, _next) => {
    res.json('This endpoint has been deprecated please use /api/v2');
})



Router.get('/:user/recent', (req, res) => {
    res.json('This endpoint has been deprecated please use /api/v2');
})

module.exports = Router
