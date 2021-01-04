let discord = require('discord.js')
let bot = new discord.Client()

module.exports = {
    name: 'echo',
    description: 'Echo a message.',
    execute(message, args) {
        let msgargs = args.slice(0).join(" ")

        let embedthing = new discord.MessageEmbed()
            .setTitle(msgargs)

        message.channel.send(embedthing)
    }
}