const { API, TagTypes } = require(`nhentai-api`)
const discord = require("discord.js")
const config = require(`../../config.json`)
const fs = require("fs").promises

module.exports = {
    name: `hentai`,
    permissions: ["SEND_MESSAGES"],
    devOnly: true,
    run: async ({client, message, args}) => {
        const api = new API();
        
        if (!message.channel.nsfw) {
            message.channel.send(`This command can only be run in NSFW channels`)
            return
        }
        // maybe implement mass search, generate several ids in txt file - or just link them all
        // maybe look into the module itself and reverse engineer some tag shit
        // including excluding tags
        if (!args[0]) {
          return message.channel.send(`Please enter query such as *${config.prefix}hentai search your_search*, or *${config.prefix}hentai random*`)
        }

        let modifiers = args.shift()
        let bookNum = Math.floor(Math.random() * 20)
        
        /*
        if (isNaN(args[1])) {
            bookNum = args.shift()
        } 
        let last = args.slice(-1)      Somehow this doesnt work im gonna kms grahhhhh
        if (isNaN(last)) {
            bookNum = args.pop()
        }
        */
        
        if (modifiers === `random`) {
            let result = await api.getRandomBook()
            //let cover = api.getThumbURL(result.books[bookNum].id)

            let randomEmbed = new discord.MessageEmbed()
              .setColor("#ed2553")
              .setTitle(result.title.english)
              //.setThumbnail(cover)
              .setURL(`https://www.nhentai.net/g/${result.id}`)
              .setDescription("**TAGS**")
              .setFooter({
                  text: `Uploaded on ${result.uploaded}`,
                  iconURL: "https://i.imgur.com/apUNdr8.png"
              })
            
            for ( let i = 0; i < result.tags.length; i++ ) {
              randomEmbed.addField(`${result.tags[i].name}`, `#${result.tags[i].count}`, true)
            }
            
            return message.channel.send({ embeds: [randomEmbed]})
        }
        
        if (modifiers === `search` || modifiers === `search-title`) {
            let query = args.join(` `)
            let result = await api.search(query)

            let cover = api.getThumbURL(result.books[bookNum].id)
          
            let searchEmbed = new discord.MessageEmbed()
              .setColor("#ed2553")
              .setTitle(result.books[bookNum].title.english)
              .setThumbnail(cover)
              .setURL(`https://www.nhentai.net/g/${result.books[bookNum].id}`)
              .setDescription("**TAGS**")
              .setFooter({
                  text: `Uploaded on ${result.books[bookNum].uploaded}`,
                  iconURL: "https://i.imgur.com/apUNdr8.png"
              })
            
            for ( let i = 0; i < result.books[bookNum].tags.length; i++ ) {
              searchEmbed.addField(`${result.books[bookNum].tags[i].name}`, `#${result.books[bookNum].tags[i].count}`, true)
            }
            
            return message.channel.send({ embeds: [searchEmbed]})
        }

        if (modifiers === `bulksearch`) {
            let bulkEmbed = new discord.MessageEmbed()
              .setColor("#ed2553")
              .setTitle("Bulk search")
              .setDescription("uhhh whatever")
            
            let query = args.join(` `)

            for await (const result of api.searchGenerator(query)) {
              for ( let i = 0; i <= result.books.length; i++ ) {
                //bulkEmbed.addField(`${result.books[i].id}`, `num-${i}`, true )
                fs.appendFile(`bulk-result.txt`, `${result.books[i].id}`)
              }

              if (result.page >= result.pages - 1) break
            }
        }
        
        let tags = [ "artists", "categories",  "artists",  "parodies", "characters",  "groups",  "languages" ]
        if (modifiers === `tag-search` || `search-tag` || `search-tags` || `tags-search`) {
          console.log(args[0])
          if(!args[0] === tags) {
            message.channel.send(`Please specify a correct tag group`)
            return
          }

          if(args[0] === `artists`) {
            api.search(book.getTagsWith({ type: 'artist', })).then(async search => {
            message.channel.send(search)
            return
            })
          }
        }
    }

}