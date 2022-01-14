const { Message } = require("discord.js")
const config = require("../../config.json")

module.exports = (Discord, client, message) => {
    const prefix = config.prefix
    if (!message.content.startsWith(config.prefix) || message.author.bot ) return
    const args = message.content.slice(config.prefix.length).split(/ +/)
    const cmd = args.shift().toLocaleLowerCase()

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases.includes(cmd))

    try {
      command.execute(client, message, cmd, args, Discord)
    } catch (err) {
      message.reply(`There was an error when trying to execute this command`)
      console.log(err)
    }

}