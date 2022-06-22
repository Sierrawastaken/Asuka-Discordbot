module.exports = {
    name: "interactionCreate",
    run: async (bot, interaction) => {
        const {client} = bot

        if (!interaction.isButton()) return
        const [name, ...params] = interaction.customId.split("-")
        const button = client.buttons.get(name)
        
        if (!button) return

        button.run(client, interaction, params)
    }
}