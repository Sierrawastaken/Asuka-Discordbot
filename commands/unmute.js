module.exports = {
    name: `unmute`,
    description: `un-silences a member`,
    permissions: ["ADMINISTRATOR", "BAN_MEMBERS"],
    
    execute(client, message, args, Discord) {
        const target = message.mentions.users.first()
        if(target) {
            let mainrole = message.guild.roles.cache.find(role => role.name === `Literally 1984`)
            let muterole = message.guild.roles.cache.find(role => role.name === `Carly`)

            let memberTarget = message.guild.members.cache.get(target.id)

            memberTarget.roles.remove(mainrole.id)
            memberTarget.roles.add(muterole.id)
         // message.channel.send(`<@${memberTarget.user.id}> has been unmuted`)
            message.channel.send(`<@${memberTarget.user.id}> has experienced capitalism`)
           
        } else {
            message.channel.send((`Couldn't find a matching user`))
        }
    }
}