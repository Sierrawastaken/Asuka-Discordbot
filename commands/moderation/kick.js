module.exports = {
    name: `kick`,
    permissions: ["ADMINISTRATOR", "KICK_MEMBERS"],
    devOnly: false,
    run: ({client, message, args}) => {
        let target = message.mentions.users.first()

        if (!target) {
            target = args.shift()
        }
        
        args.shift()
        const reason = args.join(` `)
        
        if (target) {
            const targetID = message.guild.members.cache.get(target.id)
            if (!reason) {
                targetID.kick()
                return message.channel.send(`${targetID} was kicked`)
            }
            targetID.kick()

            return message.channel.send(`${targetID} was kicked for ${reason}`)
        }
        else {
            return message.channel.send(`no member specified`)
        }
        
    }
} 