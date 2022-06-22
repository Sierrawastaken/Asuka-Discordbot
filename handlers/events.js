const fs = require("fs")

const getFiles = (path, ending) => {
    return fs.readdirSync(path).filter(f=> f.endsWith(ending))
}

module.exports = (bot, reload) => {
    const { client } = bot

    let events = getFiles("./events/", ".js")

    if (events.length === 0){
        console.log("No events to load")
    }

    events.forEach((f, i) => {
        if (reload) 
            delete require.cache[require.resolve(`../events/${f}`)]
        const event = require(`../events/${f}`)
        client.events.set(event.name, event)
    })

    if (!reload)
        initEvents(bot)
}

function triggerEventHandler(bot, event, ...args){
    const {client} = bot 

    try {
        if (client.events.has(event))
            client.events.get(event).run(bot, ...args)
        else 
            throw new Error(`Event ${event} does not exist`)
    }
    catch(err){
        console.error(err)
    }
}

function initEvents(bot) {
    const {client} = bot 

    client.on("ready", () => {
        triggerEventHandler(bot, "ready")
    })

    client.on("messageCreate", (message) => {
        triggerEventHandler(bot, "messageCreate", message)
    })

    client.on("messageDelete", (message) => {
        triggerEventHandler(bot, "messageDelete", message)
    })

    client.on("messageUpdate", (oldMessage, newMessage) => {
        triggerEventHandler(bot, "messageUpdate", oldMessage, newMessage)
    })

    client.on("guildMemberAdd", (member) => {
        triggerEventHandler(bot, "guildMemberAdd", member)
    })

    client.on("interactionCreate", (interaction) => {
        triggerEventHandler(bot, "interactionCreate", interaction)
    })
}