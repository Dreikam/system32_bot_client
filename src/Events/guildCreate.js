const { GatewayDispatchEvents } = require("@discordjs/core");
const { axios } = require("../Utils/axios");

module.exports = {
  name: GatewayDispatchEvents.GuildCreate,
  run: async (client, { data: guild }) => {

    const guildData = {
      guildId: guild.id,
      name: guild.name,
      avatar: guild.icon,
      members: guild.members.map((m) => ({
        name: m.user.username,
        discordId: m.user.id,
        avatar: m.user.avatar,
        bot: m.user.bot,
      })),
      channels: guild.channels.map((c) => ({
        name: c.name,
        channelId: c.id,
        type: c.type,
      }))
    };

    try {
      const { data } = await axios.post("/guilds", guildData);

      console.log(data);
    } catch (error) {
      console.log(error.response.data);
    }
  },
};
