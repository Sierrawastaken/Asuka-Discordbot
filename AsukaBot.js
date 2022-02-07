//modules
const Discord = require("discord.js")
const fs = require("fs")
const mongoose = require(`mongoose`)
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

client.login(config.token)