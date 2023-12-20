const {GatewayDispatchEvents} = require('@discordjs/core')

module.exports = {
    name: GatewayDispatchEvents.Ready,
    run: (client) => {
        console.log('Bot online');
    }
}