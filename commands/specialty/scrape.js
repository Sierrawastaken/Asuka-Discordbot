const config = require(`../../config.json`)
const puppeteer = require("puppeteer")

module.exports = {
    name: `scrape`,
    permissions: ["SEND_MESSAGES"],
    devOnly: true,
    run: async ({client, message, args}) => {
        let url = args.shift()

        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.goto(url)

        const [el] = await page.$x('//*[@id="imgBlkFront"]')
        const src = await el.getProperty('src')
        const srcTxt = await src.jsonValue()

        message.channel.send(srcTxt)

        browser.close()
        return
    }

}