const fs = require("fs");
const config = require('../Utils/bot_config');
const path = require("path");

module.exports = async function loadSlashCommands(client, api) {
  const arraySlashcommands = [];
  client.slashCommands = []
  const slashcommands = fs.readdirSync(path.join(__dirname, '../slashCommands'));
  for(const file of slashcommands ) {
      const slashcommand = require(path.join(__dirname, '../slashCommands', file))
      console.log(`[/] SlashCommand: ${slashcommand.name}`);
      client.slashCommands.push(slashcommand)
      arraySlashcommands.push(slashcommand)
  }

  await api.applicationCommands
  .bulkOverwriteGlobalCommands(config.bot.clientId, arraySlashcommands)
  .then()
  .catch(console.error);
};
