const Discord = require("discord.js")

module.exports = {
    name: `pack`,
    permissions: ["SEND_MESSAGES"],
    devOnly: false,
    run: async ({client, message, args}) => {
        if (!args[0]) {
            return message.channel.send("Please specify which pack you wish to download. (Behaviour and Resource)")
        }

        let type = args.shift().toLowerCase()

        if (type === "behaviour" | "behavior" | "b") {
            const embed = new Discord.MessageEmbed()

            .setColor("GREEN")
            .setThumbnail("https://i.imgur.com/pSGRTES.png")
            .setTitle("Minecraft Bedrock Behaviour pack download")
            .addFields(
                { name: "Current Release", value: "[Here](https://aka.ms/behaviorpacktemplate)", inline: false },
                { name: "Latest Beta", value: "[Here](https://aka.ms/minecraftbetabehaviors)", inline: false }
            )
            .setTimestamp()
            .setFooter({
                text: "*sigh*",
                iconURL: "https://i.imgur.com/apUNdr8.png"
            })
        
            message.channel.send({ embeds: [embed] })
            
            return
        }

        if (type === "resource" | "r") {
            const embed = new Discord.MessageEmbed()

            .setColor("GREEN")
            .setThumbnail("https://i.imgur.com/pSGRTES.png")
            .setTitle("Minecraft Bedrock Resource pack download")
            .setTitle("Resource Pack Download")
            .addFields(
                { name: "Current Release", value: "[Here](https://aka.ms/resourcepacktemplate)", inline: true },
                { name: "Latest Beta", value: "[Here](https://aka.ms/minecraftbetaresources)", inline: true }
            )
            .setTimestamp()
            .setFooter({
                text: "*sigh*",
                iconURL: "https://i.imgur.com/apUNdr8.png"
            })
        
            message.channel.send({ embeds: [embed] })

            return

        } else {
            message.channel.send("Please specify which pack you wish to download. (Behaviour and Resource)")
        }

        
    }

}