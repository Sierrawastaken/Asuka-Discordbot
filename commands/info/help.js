const config = require(`../../config.json`)
const Discord = require("discord.js")

module.exports = {
    name: `help`,
    permissions: ["SEND_MESSAGES"],
    devOnly: false,
    run: ({client, message}) => {
    
        /*
        const embed = new Discord.MessageEmbed()

            .setColor("#886146")
            .setTitle("Asuka Help Commands")
            .setURL("https://github.com/Sierrawastaken/Asuka-Discordbot#readme")
            .setThumbnail("https://i.imgur.com/apUNdr8.png")
            .setDescription("Asuka is a fuck awful bot. Here are the main public commands, there are also the regular moderation commands aswell.\nIgnore the github ive changed everything since then lmao")
            .addFields(
                { name: "Help", value: "Displays this message", inline: false },
                { name: "Invite", value: "Sends links for you to invite asuka to your server", inline: false },
                { name: "Anime", value: "Displays information about a queried anime", inline: false },
                { name: "Hentai", value: "Sends a queried doujinshi", inline: false },
                { name: "Image", value: "Sends a queried image", inline: false },
                { name: "Pack", value: "Sends a download for the default resource/behaviour pack", inline: false }
            )
            .setFooter({
                text: "Created by Sierra#7079",
                iconURL: "https://i.imgur.com/apUNdr8.png"
            })

        message.channel.send({ embeds: [embed] })
        */
        message.channel.send("⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⡠⠖⠋⠉⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⠉⠓⠦⣄\n⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⣠⠔⠉⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⠈⠳⡄\n⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢠⠞⠁⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⠘⢆\n⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢠⣀⢀⢀⢀⡴⠃⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⠈⢰\n⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⠸⣿⣿⣶⠞⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢸⣶⡀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⠘⡆\n⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢻⣿⠏⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢸⣿⣿⣆⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀ ⢆\n⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⠹⢀⢀⡆⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⠘⣿⣿⣿⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢰\n⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⡖⢀⢘⣷⢀⢀⢀⣌⢀⢀⢀⢀⢀⢀⢀⢀⣤⠻⣿⠇⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢰\n⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⣇⢠⣿⣿⡀⢀⣼⣯⢀⢀⢀⢀⡀⢀⢀⣸⡿⢀⢀⢀⢀⢀⡄⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢰\n⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢸⣿⣿⣿⣿⣿⣶⡟⣿⣿⢀⢀⡞⡇⢀⣾⣿⠁⠆⢀⢀⠘⣼⣧⣦⡇⢀⢀⢀⢰⡇⢀⢀⢀⢀⢀⢀⢰⡄\n⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⣸⣿⡿⢼⣿⣿⣿⡏⣿⣿⢀⢀⡷⣷⣼⣿⡏⢀⠰⢀⢀⢀⣿⣿⣿⡇⢀⢀⢀⢰⡇⢀⢀⢀⢀⢀⢀⢸⡇\n⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⣿⣿⠃⢸⣿⣿⣿⡇⣿⣿⣥⣼⡇⣿⣿⣻⡟⠓⠒⢹⡀⢀⣿⣿⣿⠇⢀⢀⢀⣾⢀⢀⢀⢀⢀⢺⣄⢸⡇\n⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⣿⣿⣴⠿⣿⣿⣿⡿⣿⢹⣿⣿⡇⣿⣿⠉⡧⠄⡀⢀⢻⣿⣿⣿⣿⢀⢀⢀⢀⣿⢀⢀⢀⢀⢀⢹⣿⣿⡇\n⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⣿⡟⢻⡀⢟⣻⣿⠣⠘⠈⠙⠉⠁⠙⢿⠿⣿⣷⣷⣧⣊⢿⣿⣿⣿⢀⢀⢀⢀⣿⢀⢀⢀⢀⢀⢿⣿⣿⡇\n⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⣿⣧⢀⠑⠺⢯⡏⢀⢀⢀⢀⢀⢀⢀⠁⢀⢛⣻⣿⣿⠉⢻⣿⣿⣿⢀⢀⢀⢸⠿⠗⢦⢀⢀⢀⢸⣿⣿⡃\n⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⣿⣿⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⠤⢼⠷⢼⡧⠴⠟⢻⣿⣿⢀⢀⢀⣽⠄⢶⠎⣧⡞⡠⣻⣿⣿⠇\n⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⣿⣿⢀⢀⢀⢀⡌⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢸⣿⣿⢂⢀⡐⣿⡄⢀⢀⡗⠼⣳⣿⣿⣿\n⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⣿⣿⢀⢀⢀⢀⠇⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢸⣿⣿⣦⣩⣷⣿⠃⢀⣼⣷⢰⢴⣿⣿⣿\n⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⣿⣿⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢸⣿⣿⣿⣿⣿⡇⣠⣾⣿⣿⣔⣿⣿⣿⣿\n⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⣿⣿⡀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⣿⣿⣷⡀⢀⠈⠉⢅⠆⠤⢀⢀⠤⢀⢀⢀⢀⢀⢀⢀⢀⢀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⣿⣿⣿⡿⠆⠲⡀⡢⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⠔⠆⡿⠛⠁⡀⠜⢈⢔⡁⢀⢀⢀⢀⢀⢀⢀⢀⢀⣀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⠐⠈⡀⠄⠈⢀⢀⠐⠁⣺⡄⢀⢀⢀⣀⣤⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇\n⢀⢀⢀⢀⢀⢀⢀⠄⢀⢀⠔⠈⢀⢀⡠⢀⢀⢀⣼⣿⠉⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧\n⢀⢀⢀⢀⢀⢀⠂⠄⠂⠁⢀⢀⠄⠈⢀⢀⣠⣾⣿⡟⠉⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄\n⢀⢀⢀⢀⠠⠃⢀⢀⢀⢀⠐⠁⢀⢀⣠⣾⣿⣿⡿⠁⡼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⣀\n⢀⢀⢀⠐⠁⢀⢀⢀⢀⢀⢀⢀⣴⣾⣿⠿⠋⠁⠐⠈⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄")

    }
    
}

