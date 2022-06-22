const Discord = require("discord.js")

module.exports = {
    name: `invite`,
    permissions: ["SEND_MESSAGES"],
    devOnly: false,
    run: ({client, message}) => {
    
        const embed = new Discord.MessageEmbed()

            .setColor("#886146")
            .setTitle("Want to invite me to your discord server?\nClick the link below to add me :) ")
            .setThumbnail("https://i.imgur.com/apUNdr8.png")
            .addFields(
                { name: "Full use\n(including moderation)", value: "[Discord invite](https://discord.com/api/oauth2/authorize?client_id=940450983891324948&permissions=8&scope=bot)", inline: true },
                { name: "Limited uses\n(no moderation commands)", value: "[Discord invite](https://discord.com/api/oauth2/authorize?client_id=940450983891324948&permissions=274945330240&scope=bot)", inline: true },
                { name: "Source Code", value: "[GitHub](https://github.com/sierrawastaken/Asuka-Discordbot)", inline: true }
            )
            .setTimestamp(new Date())
            .setFooter({
                text: "Created by Sierra#7079",
                iconURL: "https://i.imgur.com/apUNdr8.png"
            })

        message.channel.send({ embeds: [embed] })
        

    }
    
}
