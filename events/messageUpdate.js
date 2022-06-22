const Discord = require("discord.js")
const config = require(`../config.json`)

module.exports = {
    name: "messageUpdate",
    run: async function runAll(bot, oldMessage, newMessage) {
        if(newMessage.author.bot) return
        
        let embed = new Discord.MessageEmbed()
            .setColor("ORANGE")
            .setTitle("Message updated")
            .setDescription("Message updated in <#" + newMessage.channel.id + ">")
            .addField("Old message content", `${oldMessage.content}`, true)
            .addField("New message content", `${newMessage.content}`, true)
            .addField("Message ID", `[${newMessage.id}](${newMessage.url})`, false)
            .setTimestamp(new Date())
            .setFooter({ 
                text: newMessage.author.tag, 
                iconURL: newMessage.author.displayAvatarURL() 
            })
            
        
        let channel = newMessage.guild.channels.cache.find(ch => ch.name === config.logChannel)
        
        if (!channel) return
        channel.send({ embeds: [embed] })
    }
}