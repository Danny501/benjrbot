const discord = require('discord.js')
const bot = new discord.Client()

module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(message, args) {
        const target = message.mentions.users.first();
        if(target) {

            let kicklogguild = message.guild
            let kicklogchannel = kicklogguild.channels.cache.find(channel => channel.name === 'kick-logs')

            let kicked = new discord.MessageEmbed()
                .setTitle('User Kicked')
                .addField('User', `${target}`)
                .addField('Admin', `${message.author}`)
                .setTimestamp()            

            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send(kicked);
            kicklogchannel.send(kicked)

            target.send(kicked)
        } else {

            let invalidMember = new discord.MessageEmbed()
                .setTitle('Invalid Member')
                .setDescription('This member is **not** kickable.')
                .setTimestamp()

            message.channel.send(invalidMember)
        }
    }
}