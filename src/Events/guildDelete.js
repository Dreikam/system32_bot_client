const { axios } = require("../Utils/axios");
const { GatewayDispatchEvents } = require("@discordjs/core");

module.exports = {
    name: GatewayDispatchEvents.GuildDelete,
    run: async (client, {data: {id}}) => {
        try {
            const res = await axios.delete(`/guilds/${id}`)

            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }
}