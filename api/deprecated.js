/**
 * Return a deprecated endpoint message
 * @param {Array} _req 
 * @param {Array} res 
 */
const deprecated = (_req, res) => {
    res.json('Sorry this endpoint has been deprecated please use /api/v3')
}

module.exports = deprecated
