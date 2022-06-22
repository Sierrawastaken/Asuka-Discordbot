const punishmentSchema = require(`../../models/punishment-schema`)
const test = require(`../../features/expired-punishments`)
const config = require(`../../config.json`)

module.exports = {
    name: `mute`,
    permissions: ["ADMINISTRATOR", "MODERATE_MEMBERS"],
    devOnly: false,
    run: async ({client, message, args}) => {
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
        
        if (user && !duration && !reason) {
            const muteRole = message.guild.roles.cache.find((role) => role.name === config.muteRole)

            if (!muteRole) {
                return message.channel.send("No mute role found (make sure you have it set in config.json)")
            }

            const member = await message.guild.members.fetch(userId)
            member.roles.add(muteRole)

            return message.channel.send({
                content: `${user}`,
                files: [{
                  attachment: 'utils/images/mute.png',
                  name: 'mute.png',
                  description: 'L bozo'
                }]
              })
        }

        userId = user.id
        
        let time
        let type 

        try {
            const split = duration.match(/\d+|\D+/g)
            time = parseInt(split[0])
            type = split[1].toLowerCase()
        } catch (e) {
            return message.channel.send(`Invaild Syntax`)
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
            guildId: message.guild.id,
            userId,
            type: `mute`,
        })

        if (result) {
            return message.channel.send(`<@${userId}> is already experiencing communism`)
        }

        try {
            const member = await message.guild.members.fetch(userId)
            if (member) {
                const muteRole = message.guild.roles.cache.find((role) => role.name === config.muteRole)
                if (!muteRole) {
                    return message.channel.send(`This server has no ${config.muteRole} role`)
                }

                member.roles.add(muteRole)
            }

            await new punishmentSchema({
                userId,
                guildId: message.guild.id,
                reason,
                expires,
                type: `mute`,
            }).save()

        } catch (err) {
            message.channel.send(`Cannot mute that user`)
            return console.log(err)
        }

        return message.channel.send(`<@${userId}> will experience communism for "${duration}"`)
    }

}