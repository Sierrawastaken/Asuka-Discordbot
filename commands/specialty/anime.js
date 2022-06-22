const malScraper = require('mal-scraper')
const discord = require("discord.js")

module.exports = {
    name: `anime`,
    permissions: ["SEND_MESSAGES"],
    devOnly: false,
    run: async ({client, message, args}) => {
      const name = args.join(` `)

      if (!name) return message.channel.send("Please enter a vaild search")

      const data = await malScraper.getInfoFromName(name).catch((e) => message.channel.send(`An unknown error occured. Error: ${e.response}`))

      let title = data.englishTitle
      let trailer = data.trailer

      if (title === '' || undefined) {
        title = data.synonyms[0]
          if (title === '' || undefined ) {
            title = data.title
          }
      }

      if (trailer.includes("embed/")) {
        trailer = trailer.replace("embed/", "watch?v=")
      } if (trailer.includes("?enablejsapi=1&wmode=opaque&autoplay=1")) {
        trailer = trailer.replace("?enablejsapi=1&wmode=opaque&autoplay=1", "")
      }

      const result = new discord.MessageEmbed()
            .setColor("#5d8aa8")
            .setImage(`${data.picture}`)
            .setTitle(`${title}`)
            .setURL(`${data.url}`)
            .setDescription(`${data.synopsis}`)
            .addFields(
              { name: "Status", value: `${data.status}‎`, inline: true },
              { name: "Episodes", value: `${data.episodes}‎`, inline: true },
              { name: "Genres", value: `${data.genres}‎`, inline: true },
              { name: "Score", value: `${data.score}‎`, inline: true },
              { name: "Popularity", value: `${data.popularity}‎`, inline: true },
              { name: "Trailer", value: `[YT link](${trailer})`, inline: true }
            )
            .setTimestamp(new Date())
            .setFooter({
              text: "Data collected from MAL",
              iconURL: "https://i.imgur.com/apUNdr8.png"
            })

      return message.channel.send({ embeds: [result] })

    }
}