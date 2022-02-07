
const generateImage = require("../../dependencies/generateImage")
const config = require(`../../config.json`)


module.exports = async (Discord, client, message) => {
    console.log(`${client.member}`)
    const img = await generateImage(member)
    member.guild.channels.cache.get(config.WelcomeChannelId).send({
        content: `<@${member.id}> Welcome to the server!`,
        files: [img]
    })

    let defaultRole = member.guild.roles.cache.find(role => role.name === `${config.defaultrole}`)

    member.roles.add(defaultRole)
}
