const config = require(`../config.json`)
const Discord = require("discord.js")

module.exports = {
  name: "guildMemberAdd",
  run: function runAll(bot, member) {
      
    let role = member.guild.roles.cache.find((role) => role.name === config.defaultrole)
    
    if (role) {
      member.roles.add(role)
    }

    let welcomeChannel = member.guild.channels.cache.find(c => c.name === config.WelcomeChannelName)
    if (!welcomeChannel) {
      return console.log("No welcome channel found (make sure you have it set in config.json)")
    }

    const message = `Fuck off <@${member.id}>`
    welcomeChannel.send(message)

    let logChannel = member.guild.channels.cache.find(ch => ch.name === config.logChannel)
    if (!logChannel) {
      return console.log("No log channel found (make sure you have it set in config.json)")
    }

    const embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("Member Added")
      .setImage(member.displayAvatarURL())
      .setDescription(`<@${member.id}> joined the server`)
      .setTimestamp(new Date())
    
    return logChannel.send({ embeds: [embed] })
    
  }
}