const config = require(`../../config.json`)

module.exports = {
    name: `unmute`,
    permissions: ["ADMINISTRATOR", "MODERATE_MEMBERS"],
    devOnly: false,
    run: ({client, message}) => {
        const target = message.mentions.users.first()
        if(target) {
            let muterole = message.guild.roles.cache.find(role => role.name === config.muteRole)
            let mainrole = message.guild.roles.cache.find(role => role.name === config.defaultrole)

            let memberTarget = message.guild.members.cache.get(target.id)

            memberTarget.roles.remove(muterole.id)
            memberTarget.roles.add(mainrole.id)
            message.channel.send(`<@${memberTarget.user.id}> has experienced capitalism`)
           
        } else {
            message.channel.send((`Couldn't find a matching user`))
        }
    }
}