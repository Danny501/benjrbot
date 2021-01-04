const discord = require('discord.js')

module.exports = {
    name: 'poll',
    description: 'Make a simple poll.',
    execute(message, args) {
        if (!args[1]) {
            message.channel.send('Please specify a poll.')
        }

        let msgArgs = args.slice(0).join(" ")

        let messagearguments = new discord.MessageEmbed()
            .setTitle(msgArgs)
            .setFooter(`${message.author.username}`)
            .setTimestamp()


        message.channel.send(messagearguments).then(MessageReaction => {
            MessageReaction.react('👍')
            MessageReaction.react('👎')
        })
    }
}