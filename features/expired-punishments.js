const punishmentSchema = require(`../models/punishment-schema`)

module.exports = (client) => {
    client.on(`guildMemberAdd`, async (member) =>{
        const result = await punishmentSchema.findOne({
            guildId: member.guild.id,
            userId: member.id,
            type: `mute`,
        })

        if (result) {
            const mutedRole = member.guild.roles.cache.find(
                (role) => role.name === `Literally 1984`
            )

            if (mutedRole) {
                member.roles.add(mutedRole)
            }
        }
    })

    const check = async () => {
        const query = {
            expires: { $lt: new Date() }
        }
        const results = await punishmentSchema.find(query)

        for (const result of results) {
            const { guildId, userId, type } = result
            const guild = await client.guilds.fetch(guildId)
            if (!guildId) {
                console.log(`"${guildId}" no longer uses Asuka`)
                continue
            }

            if (type === `ban`) {
                guild.members.unban(userId, `ban expired`)
            } else if (type === `mute`) {
                const muteRole = guild.roles.cache.find((role) => role.name === `Literally 1984`)
                if (!muteRole) {
                    console.log(`"${guildId}" has no Literally 1984 role, sadge`)
                    continue
                }

                const member = guild.members.cache.get(userId)
                if (!member) {
                    continue
                }

                member.roles.remove(muteRole)
            }
        }

        await punishmentSchema.deleteMany(query)

        setTimeout(check, 1000 * 60)
    }
    check()
}