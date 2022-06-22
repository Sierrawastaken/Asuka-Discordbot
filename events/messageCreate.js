const fs = require("fs").promises
const config = require(`../config.json`)
const cringeUsers = require(`../utils/userAttributes.json`)
//import PowershellInstance from '../utils/consoleRun'

module.exports = {
    name: "messageCreate",
    run: async function runAll(bot, message) {
        const { client, prefix } = bot
        let user = message.author

        if (message.author.bot) return

        if (user.id === cringeUsers.bannedUsers) {
            user.send("Sorry you were blacklisted in that server")
            message.guild.members.ban(user, {reason: "Asuka had globaly blacklisted this user for something, contact Sierra for a reason"})
        } else if (user.id === cringeUsers.blacklistedUsers) {
            return
        }

        if (message.content.includes("google it", "look it up", "search it", "lmgtfy") && message.reference.messageId) {
            let repliedMessage = await message.fetchReference()
            let content = repliedMessage.content.split(` `)
            let query = content.join("%20")
            let idiot = repliedMessage.author
            message.channel.send(`Here ${idiot}, I'll do the work for you:\n http://lmgtfy.com/?q=${query}`)
        }

        let badLinkStart = "https://media.discordapp.net/attachments/"
        if (message.content.includes(badLinkStart && ".mp4", ".webm" )) {
            let fullLink = message.content.slice(badLinkStart).trim().split(".net")
            message.reply("Bad link you sad fuck, here is a good one: https://cdn.discordapp.com" + fullLink[1])
        }


        /*
        * Anything below here is just command shit, if you want a msg listener do it above
        */


        if (!message.content.startsWith(prefix)) return

        const args = message.content.slice(prefix.length).trim().split(/ +/g)
        const cmdstr = args.shift().toLowerCase()

        let command = client.commands.get(cmdstr)
        let member = message.member 

        
        if (!command) {
            message.reply(`*"${cmdstr}"* is an invaild command`)
            console.log(`Invaild command at: https://discord.com/channels/` + message.guild.id + `/` + message.channel.id + `/` + message.id)
            return
        }
        
        if (message.guildId != "847638726419152896") {
            try {
                await fs.appendFile(`log.txt`, `\n[${message.guild}, ${message.author}] '${message.content}' on ${message.createdAt}`)
            } catch (e) {
                console.log(e)
            }
        }
        
        if (message.guildId != "847638726419152896" && cmdstr === "scrape") return
        
        if (command.devOnly && message.author != config.ownerID){
            return message.reply("Only i can run this bitch")
        }

        if (command.permissions && member.permissions.missing(command.permissions).length !== 0){
            return message.reply("You do not have permission to use this command")
        }

        try {
            await command.run({...bot, message, args})
        }
        catch (err) {
            console.log(err)
        }
    } 
}