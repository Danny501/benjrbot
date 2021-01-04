const discord = require('discord.js');
const bot = new discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const fs = require('fs')

const welcome = require('./counters/welcome');
const goodbye = require('./counters/goodbye');

const token = "NzkyMTI0NTA1MDIyNjYwNjQ5.X-ZJbg.AxjSqR_qtz8Tgo9EvPfP8vQHwZg"

const prefix = '!';

bot.commands = new discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
}

bot.on('ready', ready => {
    console.log('Online queen.')
    bot.user.setActivity( 'Ben\'s amazing server <3', {
        type: 'WATCHING'
    })
})

bot.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping') {
        bot.commands.get('ping').execute(message, args)
    } else {
        if (command === 'play') {
            bot.commands.get('play').execute(message, args)
        } else {
            if (command === 'leave') {
                bot.commands.get('leave').execute(message, args)
            } else {
                if (command === 'cmds') {
                    bot.commands.get('cmds').execute(message, args, discord, bot)               
                } else if (command === 'members') {
                    bot.commands.get('members').execute(message, args)
                } else if (command === 'mute') {
                    if (!message.member.hasPermission(
                        'MUTE_MEMBERS'
                    )) return message.channel.send('Permission denied.')
                    bot.commands.get('mute').execute(message, args)
                } else if (command === 'unmute') {
                    if (!message.member.hasPermission(
                        'MUTE_MEMBERS'
                    )) return message.channel.send('Permission denied.')
                    bot.commands.get('unmute').execute(message, args)
                } else if (command === 'kick') {
                    if (!message.member.hasPermission(
                        'KICK_MEMBERS'
                    )) return message.channel.send('Permission denied.')
                    bot.commands.get('kick').execute(message, args)
                } else if (command === 'ban') {
                    if (!message.member.hasPermission(
                        'BAN_MEMBERS'
                    )) return message.channel.send('Permission denied.')
                    bot.commands.get('ban').execute(message, args)
                } else if (command === 'purge') {
                    if (!message.member.hasPermission(
                        'MANAGE_MESSAGES'
                    )) return message.channel.send('Permission denied.')
                    bot.commands.get('purge').execute(message, args)
                } else if (command === 'poll') {
                    bot.commands.get('poll').execute(message, args)
                } else if (command === 'echo') {
                    bot.commands.get('echo').execute(message, args)
                } else if (command === 'role') {
                    bot.commands.get('role').execute(message, args)
                }
            }
        }
    }
});

bot.login(token)