const Discord = require("discord.js")
const config = require("../../config.json")


module.exports = async (Discord, client, message) => {

  const validPermissions = [
    "CREATE_INSTANT_INVITE",
    "KICK_MEMBERS",
    "BAN_MEMBERS",
    "ADMINISTRATOR",
    "MANAGE_CHANNELS",
    "MANAGE_GUILD",
    "ADD_REACTIONS",
    "VIEW_AUDIT_LOG",
    "PRIORITY_SPEAKER",
    "STREAM",
    "VIEW_CHANNEL",
    "SEND_MESSAGES",
    "SEND_TTS_MESSAGES",
    "MANAGE_MESSAGES",
    "EMBED_LINKS",
    "ATTACH_FILES",
    "READ_MESSAGE_HISTORY",
    "MENTION_EVERYONE",
    "USE_EXTERNAL_EMOJIS",
    "VIEW_GUILD_INSIGHTS",
    "CONNECT",
    "SPEAK",
    "MUTE_MEMBERS",
    "DEAFEN_MEMBERS",
    "MOVE_MEMBERS",
    "USE_VAD",
    "CHANGE_NICKNAME",
    "MANAGE_NICKNAMES",
    "MANAGE_ROLES",
    "MANAGE_WEBHOOKS",
    "MANAGE_EMOJIS",
  ]

    const prefix = config.prefix
    if (!message.content.startsWith(config.prefix) || message.author.bot ) return
    const args = message.content.slice(config.prefix.length).split(/ +/)
    const cmd = args.shift().toLocaleLowerCase()

    const command = client.commands.get(cmd)

    if(command.permissions.length){
      let invalidPerms = []
      for(const perm of command.permissions){
        if(!validPermissions.includes(perm)){
          return console.log(`Invalid Permissions ${perm}`);
        }
        if(!message.member.permissions.has(perm)){
          invalidPerms.push(perm);
        }
      }
      if (invalidPerms.length){
        return message.channel.send(`You dont have the required permissions to execute this command`);
      }
    }
    
    try {
      command.execute(client, message, cmd, args, Discord)
    } catch (err) {
      message.reply(`There was an error when trying to execute this command`)
      console.log(err)
    }


    
    if (message.content.includes(`<@!929643844360871956>`) && message.reference.messageId) {
      let repliedMessage = await message.fetch(message.reference.messageId)
      console.log(`${repliedMessage}`)
    } 

    if (message.content.includes(`eris`)) {
      message.channel.send(`fuck eris`)
    }

    if (message.content.includes(`emilia`)) {
      message.channel.send(`fuck emilia`)
    }
}
