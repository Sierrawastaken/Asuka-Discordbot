const malScraper = require('mal-scraper')

module.exports = {
    name: `anime`,
    permissions: [`ADMINISTRATOR`],
    devOnly: false,
    run: async ({client, message, args}) => {
        const name = args.join(` `)
        const bruh = 0

        malScraper.getInfoFromName(name)
        .then((data) => message.channel.send({ embeds: [{
            color: "#474954",
            image: {
              url: `${data.picture}`
            },
            title: `${data.englishTitle}`,
            url: `${data.url}`,
            description: `${data.synopsis}`,
            fields: [{
              name: "Status",
              value: `${data.status}`,
              inline: true
            },
            {
              name: "Episodes",
              value: `${data.episodes}`,
              inline: true
            },
            {
              name: "Genres",
              value: `${data.genres}`,
              inline: true
            },
            {
                name: "Score",
                value: `${data.score}`,
                inline: true
            },
            {
                name: "Popularity",
                value: `${data.popularity}`,
                inline: true
            },
            {
                name: "Trailer",
                value: `[Here](${data.trailer})`,
                inline: true
            }],
            timestamp: new Date(),
            footer: {
              icon_url: "https://i.imgur.com/apUNdr8.png",
              text: `Data collected from [MAL](https://myanimelist.net)`
            }
          }]}))
        .catch((err) => console.log(err))
    }
}