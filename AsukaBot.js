//modules
const Discord = require("discord.js")
const fs = require("fs")

//dependencies
const generateImage = require("./dependencies/generateImage")

const client = new Discord.Client({
    intents:[
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

[`command_handler`, `event_handler`].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord)
})

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(config.WelcomeChannelId).send({
        content: `<@${member.id}> Welcome to the server!`,
        files: [img]
    })
})

client.login(config.token)