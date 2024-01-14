const { axios } = require("../Utils/axios");
const { GatewayDispatchEvents } = require("@discordjs/core");

module.exports = {
    name: GatewayDispatchEvents.ChannelDelete,
    run: async (client, {data}) => {
        try {
            const res = await axios.delete(`/guilds/${data.guild_id}/channels/${data.id}`)

            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }
}