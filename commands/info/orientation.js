const {MessageActionRow, MessageButton, MessageEmbed} = require("discord.js")

module.exports = {
    name: "orientation",
    permissions: ["SEND_MESSAGES"],
    devOnly: true,
    run: async ({client, message, args}) => {
        message.delete()
        message.channel.send({
            embeds: [
                new MessageEmbed()
                .setTitle("Select orientation")
                .setDescription("Please select a orientation from the buttons below! We want to be inclusive to everyone and not offend you! :)")
                .setColor("BLUE")
            ],
            components: [
                new MessageActionRow()
                .addComponents([
                    new MessageButton()
                    .setCustomId("orientationButtons-967495929798213702")
                    .setStyle("PRIMARY")
                    .setLabel("Gay")
                ])
                .addComponents([
                    new MessageButton()
                    .setCustomId("orientationButtons-961835628666970172")
                    .setStyle("PRIMARY")
                    .setLabel("Straight")
                ])
                .addComponents([
                    new MessageButton()
                    .setCustomId("orientationButtons-967495873003126895")
                    .setStyle("PRIMARY")
                    .setLabel("Bi")
                ])
            ]
        })
    }
}