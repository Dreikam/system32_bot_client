require('dotenv').config();

module.exports = {
    config: {
        token: process.env.BOT_TOKEN,
        clientId: process.env.BOT_CLIENT_ID
    }
}