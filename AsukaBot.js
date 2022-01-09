const Discord = require("discord.js")
require("dotenv").config()
const Token = process.env.TOKEN
const Prefix = "a!"

const generateImage = require("./dependencies/generateImage")

const client = new Discord.Client({
    intents:[
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

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

const WelcomeChannelId = "929850220811022366"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(WelcomeChannelId).send({
        content: `<@${member.id}> Welcome to the server!`,
        files: [img]
    })
})

//listen for msgs
client.on("message", async msg =>{
    //ignore msgs that dont start with the prefix and parse the msg
    if (!msg.content.startsWith(Prefix)) return
    const args = msg.content.slice(Prefix.length).split(/ +/)
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
})
client.login(Token)