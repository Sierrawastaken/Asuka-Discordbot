/*
const ytdl = require(`ytdl-core`)
const ytSearch = require(`yt-search`)
const queue = new Map()

module.exports = {
    name: `play`,
    aliases: [`skip`, `stop`],
    description: `music bot`,

    async execute(client, message, cmd, args, Discord) {

        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.channel.send(`You need to be in a voice channel to run this command`)
        //if (!permissions.has(`CONNECT`)) return message.channel.send(`You dont have the required permissions`)

        const serverqueue = queue.get(message.guild.id)

        if (cmd === `play`) {
            if (!args.length) return message.channel.send(`Incomplete syntax`)
            let song = {}

            if (ytdl.validateURL(args[0])) {
                const songInfo = await ytdl.getInfo(args[0])
                song = { title: songInfo.videoDetails.title, url: songInfo.videoDetails.video_url }
            } else {
                const videoFinder = async (query) => {
                    const videoResult = await ytSearch(query)
                    return (videoResult.videos.length > 1) ? videoResult.videos[0] : null
                }

                const video = await videoFinder(args.join(` `))
                if (video) {
                    song = { title: video.title, url: video.url}
                } else {
                    message.channel.send(`There was an error finding this video`)
                    console.log(`video playback error`)
                }
            }

            if (!serverqueue) {

                const queueConstructor = {
                    voiceChannel: voiceChannel,
                    textChannel: message.channel,
                    connection: null,
                    songs: []
                }
    
                queue.set(message.guild.id, queueConstructor)
                queueConstructor.songs.push(song)
    
                try {
                    const connection = await voiceChannel.join(" ");
                    queueConstructor.connection = connection
                    video_player(message.guild, queueConstructor.songs[0])
    
                } catch (err) {
                    queue.delete(message.guild.id)
                    message.channel.send(`There was an error connecting`)
                    throw err
                }
            } else {
                serverqueue.songs.push(song)
                return message.channel.send(`**${song.title}** was added to the queue`)
            }

        }

    }

}

const video_player = async (guild, song) => {
    const songQueue = queue.get(guild.id)

    if (!song) {
        songQueue.voiceChannel.leave()
        queue.delete(guild.id)
        return
    }

    const stream = ytdl(song.url, { filter: `audioonly` })
    songQueue.connection.play(stream, { seek: 0, volume: 0.5 })
    .on(`finish`, () => {
        songQueue.songs.shift()
        video_player(guild, songQueue.songs[0])
    })
    await songQueue.textChannel.send(`Now playing **${song.title}**`)
}
*/