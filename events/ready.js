module.exports = {
    name: "ready",
    run: async (bot) => {
        const { client, botTag } = bot
    
        client.user.setActivity("Hentai", { type: "WATCHING" })
        console.log(`Logged in as ${botTag}`)
    }
}