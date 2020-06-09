const relativeTime = require('./relativeTime')
const formatTweetMedia = require('./formatMedia')
/**
 * Return formatted tweets
 * @param {Array} tweets 
 */
const formatTweets = (tweets = []) => {
    let media
    try {
        return tweets.map(status => {
            if (status.extended_entities) {
                media = status.extended_entities.media
            } else {
                media = status.entities.media
            }
            return {
                id: status.id,
                tweet: status.full_text,
                // TODO remove in version 3
                media: media,
                tweet_media: formatTweetMedia(media),
                created_at: status.created_at,
                relative_time: relativeTime(status.created_at),
                user: status.user.name
            }
        })
    }
    catch (error) {
        console.log(error)
    }
}

module.exports = formatTweets
