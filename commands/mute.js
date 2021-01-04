const discord = require('discord.js')
const bot = new discord.Client()

const ms = require('ms');
module.exports = {
    name: 'mute',
    description: "This mutes a member",
    execute(message, args) {
        const target = message.mentions.users.first();
        if (target) {

            let mutelogsguild = message.guild
            let mutelogschannel = mutelogsguild.channels.cache.find(channel => channel.name === 'mute-logs')

            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
 
            let memberTarget = message.guild.members.cache.get(target.id);
 
            if (!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted`);
                return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);
 
            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));

        } else {

            let invalidMember = new discord.MessageEmbed()
                .setTitle('Invalid Member')
                .setDescription('This member is **not** muteable.')
                .setTimestamp()

            message.channel.send(invalidMember);
        }
    }
}