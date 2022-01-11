const config = require("..../config.json")

module.exports = (Discord, client, message) => {
    const prefix = config.prefix
    if (!msg.content.startsWith(config.prefix) || msg.author.bot ) return
    const args = msg.content.slice(config.prefix.length).split(/ +/)
    const cmd = args.shift().toLocaleLowerCase()

    const command = client.commands.get(cmd)

    if(command) command.execute(client, message, args, Discord)
}