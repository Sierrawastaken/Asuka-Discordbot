const Discord = require("discord.js")
module.exports = {
    name: "reload",
	permissions: ["SEND_MESSAGES"],
    adminOnly: true,
    run: async (bot) => {
        var { client, message, config } = bot;           
		await client.loadCommands(client, true); //reload is true
        await client.loadEvents(client, true);
        await client.loadButtons(client, true);

		message.channel.send(
			new Discord.MessageEmbed()
				.setColor("#8DC685")
				.setTitle("Bot Reload Complete")
				.setDescription(
					client.functions.get("functions").autoAlign([
						[`\`${client.commands.size}\``, `Commands`],
						[`\`${client.events.size}\``, `Events`],
						[`\`${client.buttons.size}\``, `Functions`],
					])
				)
		)
    }
}