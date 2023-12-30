const {GatewayDispatchEvents} = require('@discordjs/core')

module.exports = {
    name: GatewayDispatchEvents.GuildMemberAdd,
    run: (client, {data}) => {
        const newUser = {
            name: data.user.username,
            discordId: data.user.id,
            avatar: data.user.avatar,
            guildId: data.guild_id
        }

        console.log(newUser);
    }
}