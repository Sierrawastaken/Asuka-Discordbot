module.exports = {
    name: `ping`,
    description: `replys ping`,
    permissions: ["SEND_MESSAGES"],

    execute(client, message, cmd, args, Discord) {
        message.channel.send(`pong`)

    }
}