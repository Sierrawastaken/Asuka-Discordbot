module.exports = {
    name: `kick`,
    description: `kicks a user`,

    execute(client, message, cmd, args, Discord) {
        const target = message.mentions.users.first()
        const reason = args.join(` `)
        
        if (target) {
            const targetID = message.guild.members.cache.get(target.id)
            targetID.kick()
            args.shift()

            message.channel.send(`${targetID} was kicked for`)
        }
        else {
            message.channel.send(`no member specified`)
        }
        
    }
}