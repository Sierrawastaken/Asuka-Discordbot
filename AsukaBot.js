//modules
const Discord = require("discord.js")
//const fs = require("fs")
const mongoose = require("mongoose")
//const prompt = require("prompt")
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
    owner: config.ownerID,
    botTag: config.botTag
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()
client.buttons = new Discord.Collection()

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)
client.loadButtons = (bot, reload) => require("./handlers/buttons")(bot, reload)

client.loadEvents(bot, false)
client.loadCommands(bot, false)
client.loadButtons(bot, false)

module.exports = bot

mongoose.connect(config.MongoDBLogin, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    //userFindAndModify: false
}).then(() => {
    console.log("Database connection established")
}).catch((err) => {
    console.log("Database connection failed (You probably have your vpn on you dense fuck)")
})

//client.start(config.token, false)
client.login(config.token)
