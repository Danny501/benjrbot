const discord = require('discord.js')
const bot = new discord.Client()

module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(message, args){
        const target = message.mentions.users.first();
        let userBanned = new discord.MessageEmbed()
            .setTitle('User Banned')
            .addField('User', `${target}`)
            .addField('Admin', `${message.author}`)
            .setTimestamp()

        let invalidMember = new discord.MessageEmbed()
            .setTitle('Invalid Member')
            .setDescription('This member is **not** bannable.')
            .setTimestamp()

        let banlogguild = message.guild
        let banlogchannel = banlogguild.channels.cache.find(channel => channel.name === 'ban-logs')

        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send(userBanned);
            banlogchannel.send(userBanned)
            target.send(userBanned)

        }else{
            message.channel.send(invalidMember);
        }
    }
}