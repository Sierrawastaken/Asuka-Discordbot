const Discord = require("discord.js")
const config = require("../../config.json")

module.exports = async (Discord, client, message) => {
    const prefix = config.prefix
    if (!message.content.startsWith(config.prefix) || message.author.bot ) return
    const args = message.content.slice(config.prefix.length).split(/ +/)
    const cmd = args.shift().toLocaleLowerCase()
    console.log(`test`)

    const command = client.commands.get(cmd)

    try {
      command.execute(client, message, cmd, args, Discord)
    } catch (err) {
      message.reply(`There was an error when trying to execute this command`)
      console.log(err)
    }

    if (message.content.includes(`<@!929643844360871956>`) && message.reference.messageId) {
      let repliedMessage = await message.fetch(message.reference.messageId)
      console.log(`${repliedMessage}`)
    } 

}
