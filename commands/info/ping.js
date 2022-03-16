module.exports = {
    name: `ping`,
    permissions: ["SEND_MESSAGES"],
    devOnly: false,
    run: async ({client, message, args}) => {
        message.channel.send("pong")
    }

}