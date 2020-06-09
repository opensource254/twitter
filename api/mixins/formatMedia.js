/**
 * ----------------------------------------------
 * This function is used to format media
 * @param {Array} media 
 */
const formatTweetMedia = (media = []) => {
    return media.map(item => {
        return {
            type: item.type,
            media_url_https: item.media_url_https
        }
    })
}

module.exports = formatTweetMedia
