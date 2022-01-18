module.exports = {
    name: `ping`,
    description: `replys ping`,

    execute(client, message, cmd, args, Discord) {
        message.channel.send(`pong`)

    }
}