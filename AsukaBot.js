const Discord = require("discord.js")
const generateImage = require("./dependencies/generateImage")
const config = require("./config.json")
const fs = require("fs")

const client = new Discord.Client({
    intents:[
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.config = config;
client.commands = new Discord.Collection()

const events = fs.readdirSync("./events").filter(file => file.endsWith(".js"))
for (const file of events) {
    const eventName = file.split(".")[0];
    const event = require(`./events/${file}`);
    client.on(eventName, event.bind(null, client));
}

const commands = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for (const file of commands) {
  const commandName = file.split(".")[0];
  const command = require(`./commands/${file}`);

  console.log(`Attempting to load command ${commandName}`);
  client.commands.set(command.name, command);
}

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

//listens for "hi" and resonds 

client.on("messageCreate", (message) => {
    if (message.content == "hi") {
        message.reply("hello world!")
    }
})

//listens for members joining and welcomes them
client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(config.WelcomeChannelId).send({
        content: `<@${member.id}> Welcome to the server!`,
        files: [img]
    })
})

//listen for msgs
client.on("message", async msg =>{
    //ignore msgs that dont start with the prefix and parse the msg
    if (!msg.content.startsWith(config.prefix) || msg.author.bot ) return
    const args = msg.content.slice(config.prefix.length).split(/ +/)
    const command = args.shift().toLocaleLowerCase()

    
    //ping command, just replies with "pong"
    if (command === "ping") {
        msg.reply("pong")
    }
    

    // membercount command
    if (command === "membercount") {
        msg.reply(`There are ${msg.guild.memberCount} members in this server`)
    }

    //poll command
    if (command === "poll") {
        let message = await msg.reply(args.join(``))
        await message.react(`✔`) 
        await message.react(`❌`)
    }
    if (command === "say") {
        let text = args.join(" ")
        msg.delete()
        msg.channel.send(text)
    }
})
client.login(config.token)