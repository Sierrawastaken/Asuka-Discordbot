const punishmentSchema = require(`../models/punishment-schema`)

module.exports = {
    name: `ban`,
    aliases: `kill`,
    description: `removes a user from the server`,

    async execute(client, message, cmd, args, Discord) {
        let userId = args.shift()
        const duration = args.shift()
        const reason = args.join(` `)
        let user

        if (message) {
            user = message.mentions.users?.first()
        }

        if (!user) {
            userId = userId.replace(/[<@!>]/g, ``)
            user = await client.users.fetch(userId)

            if (!user) {
                return message.channel.send(`Couldnt find matching user`)
            }
        }

        userId = user.id
        
        let time
        let type 
        try {
            const split = duration.match(/\d+|\D+/g)
            time = parseInt(split[0])
            type = split[1].toLowerCase()
        } catch (e) {
            return message.channel.send(`Invaild syntax`)
        }

        if (type === `h`) {
            time *= 60
        } else if (type === `d`) {
            time *= 60 * 24
        } else if (type != `m`) {
            return message.channel.send(`Unexpected time increment`)
        }

        const expires = new Date()
        expires.setMinutes(expires.getMinutes() + time)

        const result = await punishmentSchema.findOne({
            guildId: guild.id,
            userId,
            type: `ban`,
        })

        if (result) {
            return message.channel.send(`<@${userId} is already banned`)
        }

        try {
            await guild.members.ban(userId, {days: 1, reason })

            await new punishmentSchema({
                userId,
                guildId: guild.id,
                staffId: staff.id,
                reason,
                expires,
                type: `ban`,
            }).save()
        } catch (ignored) {
            return message.channel.send(`Cannot ban that user`)
        }

        return message.channel.send(`<@${userId}> will be banned for "${duration}"`)
    }

}