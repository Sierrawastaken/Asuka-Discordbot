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

const bot = {
    client,
    prefix: config.prefix,
    owner: config.ownerID
}



client.commands = new Discord.Collection()
client.events = new Discord.Collection()

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)

client.loadEvents(bot, false)
client.loadCommands(bot, false)

module.exports = bot

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