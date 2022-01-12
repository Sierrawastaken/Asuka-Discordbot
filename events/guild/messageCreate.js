const { Message } = require("discord.js")
const config = require("../../config.json")

module.exports = (Discord, client, message) => {
    const prefix = config.prefix
    if (!message.content.startsWith(config.prefix) || message.author.bot ) return
    const args = message.content.slice(config.prefix.length).split(/ +/)
    const cmd = args.shift().toLocaleLowerCase()

    const command = client.commands.get(cmd)

    if(command) command.execute(client, message, args, Discord)
}