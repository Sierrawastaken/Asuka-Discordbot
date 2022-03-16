const { MessageEmbed } = require('discord.js')
const config = require(`../../config.json`)
const blacklistSchema = require(`../../models/blacklist-schema`)

module.exports = {
    name: 'blacklist',
    permissions: ["SEND_MESSAGES"],
    devOnly: true,
    run: async ({client, message, args}) => { 
        if(message.author.id != config.ownerID) {
            return message.channel.send(`This can only be ran by ${config.ownerID}`) 
        }

        let user;
        if (message.mentions.users.first()) {
          user = message.mentions.users.first()
        } else if (args[0]) {
          user = message.guild.members.cache.get(args[0]).user
        } 
        if(!user) return message.channel.send("Please specify a user to blacklist")
        
        userId = user.id

        const result = await blacklistSchema.findOne({
            userId,
        })

        if (result) {
            return message.channel.send(`<@${userId}> has already been blacklisted`)
        }

        try {

            new blacklistSchema({
                userId,
                guildId: message.guild.id,
            }).save()

        } catch (err) {
            console.log(err)
        }

        return message.channel.send(`<@${userId}> has been blacklisted`)
  
        
    }
}