const config = require(`../../config.json`)
const fs = require("fs").promises

module.exports = {
    name: `log`,
    permissions: ["SEND_MESSAGES"],
    devOnly: false,
    run: async ({client, message, args}) => {
        let arg1 = args.shift()
        let user = message.mentions.users.first()
        let num2 = args.shift()

        if (!user) {
            arg1 = arg1.replace(/[<@!>]/g, ``)

            if (arg1.length < 18) {
                if (arg1 > 100) arg1 = 100

                await message.channel.messages.fetch({ limit: arg1 }).then( messages => {
                    fs.appendFile(`${message.author.username}'s log.txt`, `${messages.filter(m => m.content)}`)
                })
                
                message.channel.send({
                    files: [{
                      attachment: `C:/Users/josia/Desktop/Discord bot/${message.author.username}'s log.txt`,
                      name: 'log.txt',
                      description: `log requested by ${message.author.username}`
                    }]
                })

                fs.unlink(`${message.author.username}'s log.txt`)

                return
            }

            user = await client.users.fetch(arg1)

            await message.channel.messages.fetch({ limit: num2 }).then( messages => {
                fs.appendFile(`${message.author.username}'s log.txt`, `${messages.filter(m => m.author.id === user.id).size}`)
            })
            
            message.channel.send({
                files: [{
                  attachment: `C:/Users/josia/Desktop/Discord bot/${message.author.username}'s log.txt`,
                  name: 'log.txt',
                  description: `log requested by ${message.author.username}`
                }]
            })

            fs.unlink(`${message.author.username}'s log.txt`)

            return
        }
    }
}