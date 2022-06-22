const Discord = require("discord.js")
const config = require(`../config.json`)

module.exports = {
    name: "messageDelete",
    run: async function runAll(bot, message) {
        if(message.author.bot) return
        
        let embed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("Message deleted")
            .setDescription(`Message deleted in <#${message.channel.id}>`)
            .addField("Message content", `${message.content}`, true)
            .addField("Message ID", `${message.id}`, true)
            .setTimestamp(new Date())
            .setFooter({ 
                text: message.author.tag, 
                iconURL: message.author.displayAvatarURL() 
            })
            
        
        let channel = message.guild.channels.cache.find(ch => ch.name === config.logChannel)
        
        if (!channel) return
        channel.send({ embeds: [embed] })
    }
}