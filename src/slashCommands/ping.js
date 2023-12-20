module.exports = {
        name: 'ping',
        description: 'Pong!',
        run: async (int, api) => {
            await api.interactions.reply(int.id, int.token, {
                content: "Pong!"
            })
        }
}