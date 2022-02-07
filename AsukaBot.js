//modules
const Discord = require("discord.js")
const fs = require("fs")
const mongoose = require(`mongoose`)

//dependencies
const generateImage = require("./dependencies/generateImage")
const config = require(`./config.json`)

//intents
const client = new Discord.Client({
    intents:[
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS",
    ]
})

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

;[`command_handler`, `event_handler`].forEach(handler => {
        require(`./Handlers/${handler}`)(client, Discord)
})

mongoose.connect(config.MongoDBLogin, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    //userFindAndModify: false
}).then(() => {
    console.log(`Database connection established`)
}).catch((err) => {
    console.log(err)
})


client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(config.WelcomeChannelId).send({
        content: `<@${member.id}> Welcome to the server!`,
        files: [img]
    })
})


client.login(config.token)