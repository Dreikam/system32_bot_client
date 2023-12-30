const {GatewayDispatchEvents} = require('@discordjs/core')

module.exports = {
    name: GatewayDispatchEvents.GuildMemberRemove,
    run: (client, {data}) => {
        const removedUser = {
            discordId: data.user.id,
            guildId: data.guild_id
        }
        console.log(removedUser);
    }
}