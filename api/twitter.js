const { Client } = require("twitter-api-sdk");


const options = {
    bearer_token: process.env.BEARER_TOKEN,
}
/**
 * --------------------------------------
 * Create a new Twitter client
 * --------------------------------------
 */
const client = new Client(options.bearer_token);

module.exports = client
