const discord = require('discord.js')
const bot = new discord.Client()

module.exports = {
    name: 'members',
    description: 'Check how many members there are.',
    execute(message, args) {
        const guild = bot.guilds.cache.get('720687454633459802');
        const memberCounts = message.guild.memberCount;

        let memberCounterEmbed = new discord.MessageEmbed()
            .setTitle(`Total Members: ${memberCounts}`)
            .setColor('e42643')
        message.channel.send(memberCounterEmbed)
    }
}