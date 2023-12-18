const { REST } = require('@discordjs/rest');
const { WebSocketManager } = require('@discordjs/ws')
const {
    GatewayIntentBits,
    Client
} = require('@discordjs/core');
const fs = require('fs');
const path = require('path');

const {config} = require('./Utils/config');

const rest = new REST({ version: "10"}).setToken(process.env.BOT_TOKEN);
const ws = new WebSocketManager({
    token: config.token,
    intents: 
    GatewayIntentBits.Guilds |
    GatewayIntentBits.GuildMessages |
    GatewayIntentBits.GuildMembers,
    rest
});

const client = new Client({
    gateway: ws,
    rest
});

const events = fs.readdirSync(path.join(__dirname, 'Events'));
console.log(events);
for(const file of events ) {
    const event = require(path.join(__dirname, 'Events', file))
    client.on(event.name, (...args) => event.execute(client, ...args))
}

try {
    ws.connect()
} catch (error) {
    console.log(error)
}