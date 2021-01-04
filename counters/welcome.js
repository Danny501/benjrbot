const discord = require('discord.js')
const bot = new discord.Client()

bot.on('guildMemberAdd', guildMember =>{

    let welcomeEmbed = new discord.MessageEmbed()
    .setTitle('Member Joined')
    .addField(`Name`, `${guildMember}`)
    .addField(`ID`, `${guildMember.id}`)
    .setTimestamp

    guildMember.guild.channels.cache.find(channel => channel.name === 'join-leave').send(welcomeEmbed)
});