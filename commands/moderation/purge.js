const discord = require("discord.js")
const config = require(`../../config.json`)

module.exports = {
    name: `purge`,
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES"],
    devOnly: false,
    run: async ({client, message, args}) => {
        
        if (isNaN(args[0])) {
            return message.reply(`Please enter a vaild string`)
        }

        if (args[0] > 99) {
            return message.reply(`Please enter a number less than 99`) 
        }

        if (args[0] < 1) {
            return message.reply(`Bruh`)
        }

        if (!args[0]) {
            return message.reply("Please specify how many messages to delete")
        }

        await message.channel.messages.fetch({limit: ++args[0]}).then(messages => {
            message.channel.bulkDelete(messages)
        })

        let embed = new discord.MessageEmbed()
            .setColor("RED")
            .setTitle("Channel purged")
            .setDescription(`${message.author} purged ${args} messages in ${message.channel}`)
            .setTimestamp(new Date())
            .setFooter({ 
                text: message.author.tag, 
                iconURL: message.author.displayAvatarURL() 
            })
            
            
        
        let channel = message.guild.channels.cache.find(ch => ch.name === config.logChannel)
        
        if (!channel) return
        return channel.send({ embeds: [embed] })
    }

}