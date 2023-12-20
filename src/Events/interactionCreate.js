const { GatewayDispatchEvents, InteractionType } = require("@discordjs/core");

module.exports = {
  name: GatewayDispatchEvents.InteractionCreate,
  run: async (client, { data: int, api }) => {
    if (int.type == InteractionType.ApplicationCommand) {
      const cmd = client.slashCommands.find(
        (slash) => slash.name == int.data.name
      );
      if (!cmd) return;
      cmd.run(int, api);
    }
  },
};
