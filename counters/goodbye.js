const discord = require('discord.js')
const bot = new discord.Client()

bot.on('guildMemberRemove', guildMember =>{

    let leaveEmbed = new discord.MessageEmbed()
    .setTitle('Member Left')
    .addField(`Name`, `${guildMember}`)
    .addField(`ID`, `${guildMember.id}`)
    .setTimestamp

    guildMember.guild.channels.cache.find(channel => channel.name === 'join-leave').send(leaveEmbed)
});