const discord= require("discord.js")

module.exports = {
    name: "roleselect",
    permissions: ["SEND_MESSAGES"],
    devOnly: true,
    run: async ({client, message, args}) => {
        const filter = m => m.author === message.author

        message.channel.send("Please send the roles you would like to have options for")
        message.channel.awaitMessages({
            filter,
            max: 1,
            time: 60_000
        }).then(
            collected => {
               let maybe = collected.toJSON()
               return console.log(maybe.content)
            }
        )   
        /*
        message.channel.send({
            embeds: [
                new discord.MessageEmbed()
                .setTitle("Select orientation")
                .setDescription("Please select a orientation from the buttons below! We want to be inclusive to everyone and not offend you! :)")
                .setColor("BLUE")
            ],
            components: [
                new discord.MessageActionRow()
                .addComponents([
                    new discord.MessageButton()
                    .setCustomId("orientationButtons-967495929798213702")
                    .setStyle("PRIMARY")
                    .setLabel("Gay")
                ])
                .addComponents([
                    new discord.MessageButton()
                    .setCustomId("orientationButtons-961835628666970172")
                    .setStyle("PRIMARY")
                    .setLabel("Straight")
                ])
                .addComponents([
                    new discord.MessageButton()
                    .setCustomId("orientationButtons-967495873003126895")
                    .setStyle("PRIMARY")
                    .setLabel("Bi")
                ])
            ]
        })
        */
    }
}