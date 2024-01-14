const { axios } = require("../Utils/axios");
const { GatewayDispatchEvents } = require("@discordjs/core");

module.exports = {
  name: GatewayDispatchEvents.GuildMemberAdd,
  run: async (client, { data }) => {
    const newUser = {
      guildId: data.guild_id,
      member: {
        name: data.user.username,
        discordId: data.user.id,
        avatar: data.user.avatar,
        bot: data.user.bot
      },
    };

    try {
      const { data } = await axios.post(
        `/guilds/${newUser.guildId}/members/add`,
        newUser
      );

      console.log(data.message, newUser);
    } catch ({response: {data}}) {
      console.log(data);
    }
  },
};
