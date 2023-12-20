const { REST } = require('@discordjs/rest');
const { WebSocketManager } = require('@discordjs/ws')
const {
    GatewayIntentBits,
    Client,
    API
} = require('@discordjs/core');
const fs = require('fs');
const path = require('path');

const config = require('./Utils/bot_config');
const loadSlashCommands = require('./Handlers/loadSlashCommands');

const rest = new REST({ version: "10"}).setToken(process.env.BOT_TOKEN);
const api = new API(rest);
const ws = new WebSocketManager({
    token: config.bot.token,
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
for(const file of events ) {
    const event = require(path.join(__dirname, 'Events', file))
    console.log(`[+] Evento: ${event.name}`);
    client.on(event.name, (...args) => event.run(client, ...args))
}

loadSlashCommands(client, api)

try {
    ws.connect()
} catch (error) {
    console.log(error)
}