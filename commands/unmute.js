const config = require(`../config.json`)

module.exports = {
    name: `unmute`,
    description: `un-silences a member`,
    permissions: ["ADMINISTRATOR", "BAN_MEMBERS"],
    
    execute(client, message, args, Discord) {
        const target = message.mentions.users.first()
        if(target) {
            let muterole = message.guild.roles.cache.find(role => role.name === config.muteRole)
            let mainrole = message.guild.roles.cache.find(role => role.name === `AOT fan`)

            let memberTarget = message.guild.members.cache.get(target.id)

            memberTarget.roles.remove(muterole.id)
            memberTarget.roles.add(mainrole.id)
         // message.channel.send(`<@${memberTarget.user.id}> has been unmuted`)
            message.channel.send(`<@${memberTarget.user.id}> has experienced capitalism`)
           
        } else {
            message.channel.send((`Couldn't find a matching user`))
        }
    }
}