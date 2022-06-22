module.exports = {
  name: "orientationButtons",
  run: async (bot, interaction, parameters) => {
    const roleId = parameters[0]
    if (!interaction.guild) {
      return interaction.reply({
        content: "This command can only be used in a guild!",
        ephemeral: true,
      })
    }

    const role = await interaction.guild.roles.fetch(roleId);
    if (!role) {
      return interaction.reply({ content: "Role not found", ephemeral: true })
    }

    const member = await interaction.guild.members.fetch(interaction.member.id)

    if (!member.roles.cache.has(role.id)) {
      await member.roles.add(role.id)
      if (member.roles.cache.has("967495929798213702")) {
        interaction.reply({
          content: `Why tf are you gay, get help smh. People need to beat their kids more. Added the *Gay* role`,
          ephemeral: true,
        })
        return
      } else if (member.roles.cache.has("967495873003126895")) {
        interaction.reply({
          content: `Bro picking Bi is more cringe than being Gay, its like you want to be gay but you also want that pussy. Just pick bro. Added the *Bi* role`,
          ephemeral: true,
        })
        return
      } else {
        interaction.reply({
          content: `You picked the only good choice. But you actually picked one so your retarded. Added the *Retard* role`,
          ephemeral: true,
        })
        return
      }
    }
  }
}
