
module.exports = {
    name: `latency`,
    permissions: ["SEND_MESSAGES"],
    devOnly: false,
    run: async ({client, message}) => {
        message.channel.send(`Latency is \`${Date.now() - message.createdTimestamp}ms\`. API Latency is \`${Math.round(client.ws.ping)}ms\``);
    }
}