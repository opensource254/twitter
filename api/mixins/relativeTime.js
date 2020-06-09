const moment = require('moment-timezone')

/**
 * This method is used to return the relative time from a date
 * 
 * @param {Date} timestamp 
 * @param {String} timezone 
 */
const relativeTime = (timestamp, timezone = 'Africa/Nairobi') => {
   return moment(new Date(timestamp)).tz(timezone).fromNow()
}

module.exports = relativeTime
