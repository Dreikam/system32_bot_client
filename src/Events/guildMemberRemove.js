const {GatewayDispatchEvents} = require('@discordjs/core')
const { axios } = require("../Utils/axios");

module.exports = {
    name: GatewayDispatchEvents.GuildMemberRemove,
    run: async (client, {data}) => {
        const removedUser = {
            discordId: data.user.id,
            guildId: data.guild_id
        }

        console.log(removedUser);
        try {
            const { data } = await axios.delete(`/guilds/${removedUser.guildId}/members/remove`, {data: removedUser});
      
            console.log(data);
          } catch ({response: {data}}) {
            console.log(data);
          }
    }
}