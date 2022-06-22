var Scrapper = require(`images-scraper`)

const google = new Scrapper({
    puppeteer: {
      headless: true,
    }
  })

module.exports = {
    name: `image`,
    permissions: ["SEND_MESSAGES"],
    devOnly: false,
    run: async ({client, message, args}) => {
        const imageQuery = args.join(` `)
        if (!imageQuery) {
          message.channel.send(`Please enter keywords to search`)
          return 
        }

        const imageResults = await google.scrape(imageQuery, 1)
        message.channel.send(imageResults[0].url)
    }
}