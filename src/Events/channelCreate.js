const { axios } = require("../Utils/axios");
const { GatewayDispatchEvents } = require("@discordjs/core");

module.exports = {
    name: GatewayDispatchEvents.ChannelCreate,
    run: async (client, {data}) => {
        const channel = {
            name: data.name,
            type: data.type,
            channelId: data.id
        }

        try {
            const res = await axios.post(`/guilds/${data.guild_id}/channels`, channel)

            console.log(res.data);
        } catch (error) {
            console.log(error.response.data);
        }
    }
}