const config = require(`../config.json`)

module.exports = {
    name: `help`,
    description: `lists possible commands`,
    permissions: ["SEND_MESSAGES"],

    execute(client, message, cmd, args, Discord) {
    const embed = new Discord.MessageEmbed()

    .setColor("#886146")
    //.setAuthor("Asuka Help Commands")
    .setTitle("Asuka Help Commands")
    .setURL("https://github.com/sierrawastaken/Asuka-Discordbot#readme")
    .setDescription("Asuka is a lightweight multipurpose bot with the aims to be the only bot needed. Currently in development, if you encounter and bugs or have feature suggestions please DM `Sierra#7079` ")
    .setThumbnail("https://i.imgur.com/apUNdr8.png")
    .addField("Check the Github for more details/syntax about commands", "Prefix = a! ")
    .addFields(
        { name: "Public", value: "image", inline: true },
        { name: "Moderation", value: "Mute, Ban, Kick, Purge", inline: true },
        { name: "Features", value: "Welcome messages, Replies based Sierra's waifu preferences", inline: true } )
    .setTimestamp()
    .setFooter(":) ", "https://i.imgur.com/apUNdr8.png")

     message.channel.send({ embeds: [embed] })

    }
    
}

