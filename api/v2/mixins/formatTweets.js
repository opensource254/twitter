const relativeTime = require('./relativeTime')
/**
 * Return formatted tweets
 * @param {Array} tweets 
 */
const formatTweets = (tweets = []) => {
    return tweets.map(status => {
        return {
            id: status.id,
            tweet: status.full_text,
            media: status.entities.media,
            created_at: status.created_at,
            relative_time: relativeTime(status.created_at),
            user: status.user.name
        }
    })
}

module.exports = formatTweets
