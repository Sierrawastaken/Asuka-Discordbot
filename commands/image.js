var Scrapper = require(`images-scraper`)

const google = new Scrapper({
    puppeteer: {
      headless: true,
    }
  })

module.exports = {
    name: `image`,
    description: `finds a image`,
    permissions: ["SEND_MESSAGES"],

    async execute(client, message, cmd, args, Discord) {
        const imageQuery = args.join(` `)
        if (!imageQuery) return message.channel.send(`Please enter keywords to search`)

        const imageResults = await google.scrape(imageQuery, 1)
        message.channel.send(imageResults[0].url)
    }
}