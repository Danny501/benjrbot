const discord = require('discord.js')
const { strike } = require('ffmpeg-static')
const bot = new discord.Client()

module.exports = {
    name: 'role',
    description: 'Give a role',
    execute(message, args) {
        const gayLesbian = message.guild.roles.cache.get('795368885489631242')
        const straight = message.guild.roles.cache.get('795384343165665350')
        const otherorquestioning = message.guild.roles.cache.get('795368881559568416')
        const asexual = message.guild.roles.cache.get('795368883015778315')
        const pansexual = message.guild.roles.cache.get('795368883125092384')
        const bisexual = message.guild.roles.cache.get('795368884256637018')

        const sheher = message.guild.roles.cache.get('795368887045718078')
        const hehim = message.guild.roles.cache.get('795368888216977418')
        const theythem = message.guild.roles.cache.get('795368886858022972')
        const otherquestioning = message.guild.roles.cache.get('795368884379058189')

        const thirteentofifteen = message.guild.roles.cache.get('795397628639576074')
        const sixteentoeighteen = message.guild.roles.cache.get('795397657749094440')
        const eighteenplus = message.guild.roles.cache.get('795397716611170334')

        const noarguments = new discord.MessageEmbed()
            .setTitle('Roles')
            .setDescription(
                '***PLEASE TYPE ALL ROLES AS THEY ARE IN LOWERCASE!***\nOther/Questioning\nAsexual\nPansexual\nBisexual\nOther/Questioning(pronouns)\nGay\nLesbian\nThey/Them\nHe/Him\nShe/Her\nStraight\n13-15\n16-18\n18+'
            )

        let person = message.author
        const rolemember = message.guild.members.cache.get(person.id)

        if (!args[0]) {
            message.channel.send(noarguments)
        } else if (args[0] === 'gay') {
            rolemember.roles.add(gayLesbian).catch(console.error)
            message.channel.send('Successful!')
        } else if (args[0] === 'lesbian') {
            rolemember.roles.add(gayLesbian).catch(console.error)
            message.channel.send('Successful!')
        } else if (args[0] === 'straight') {
            rolemember.roles.add(straight).catch(console.error)
            message.channel.send('Successful!')
        } else if (args[0] === 'other/questioning') {
            rolemember.roles.add(otherorquestioning).catch(console.error)
            message.channel.send('Successful!')
        } else if (args[0] === 'asexual') {
            rolemember.roles.add(asexual).catch(console.error)
            message.channel.send('Successful!')
        } else if (args[0] === 'pansexual') {
            rolemember.roles.add(pansexual).catch(console.error)
            message.channel.send('Successful!')
        } else if (args[0] === 'bisexual') {
            rolemember.roles.add(bisexual).catch(console.error)
            message.channel.send('Successful!')
        } else if (args[0] === 'she/her') {
            rolemember.roles.add(sheher).catch(console.error)
            message.channel.send('Successful!')
        } else if (args[0] === 'he/him') {
            rolemember.roles.add(hehim).catch(console.error)
            message.channel.send('Successful!')
        } else if (args[0] === 'they/them') {
            rolemember.roles.add(theythem).catch(console.error)
            message.channel.send('Successful!')
        } else if (args[0] === 'other/questioning(pronouns)') {
            rolemember.roles.add(otherquestioning).catch(console.error)
            message.channel.send('Successful!')
        } else if (args[0] === '13-15') {
            rolemember.roles.add(thirteentofifteen).catch(console.error)
            message.channel.send('Successful!')
        } else if (args[0] === '16-18') {
            rolemember.roles.add(sixteentoeighteen).catch(console.error)
            message.channel.send('Successful!')
        } else if (args[0] === '18+') {
            rolemember.roles.add(eighteenplus).catch(console.error)
            message.channel.send('Successful!')
        }
    }
}