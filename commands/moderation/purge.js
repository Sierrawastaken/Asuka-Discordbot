module.exports = {
    name: `purge`,
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES"],
    devOnly: false,
    run: async ({client, message, args}) => {
        if(!args[0]) return message.reply(`Please specify the number of messages to clear`)
        if(isNaN(args[0])) return message.reply(`Please enter a vaild string`)
        if(args[0] > 99) return message.reply(`Please enter a number less than 99`)
        if(args[0] < 1) return message.reply(`Bruh`)

        await message.channel.messages.fetch({limit: ++args[0]}).then(messages => {
            message.channel.bulkDelete(messages)
        })

    }

}