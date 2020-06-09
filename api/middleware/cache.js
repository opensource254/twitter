const memoryCache = require('memory-cache')

const cache = (duration) => {
    return (req, res, next) => {
        let key = req.originalUrl || req.url
        let cachedResponse = memoryCache.get(key)
        if (cachedResponse) {
            return res.send(cachedResponse)
        }
        res.sendResponse = res.send
        res.send = (body) => {
            memoryCache.put(key, body, duration * 1)
            res.sendResponse(body)
        }
        next()
    }
}

module.exports = cache
