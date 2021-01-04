const discord = require('discord.js')
const bot = new discord.Client()

module.exports = {
	name: 'cmds',
	description: 'Shows the commands for the server.',
	execute(message, args) {
		let cmdsembed = new discord.MessageEmbed()
			.addField('Member Commands', 'Play - Play music.\nRole - Add a role to yourself (or use the roles channel)\nEcho - Repeats your message in an embed.\nPoll - Create a poll.\nLeave - Make the music bot leave the vc.\nPing - Ping pong!\nMembers - Check how many members there are in the server.')
			.addField('Staff Commands', 'Kick - Kick a specified user.\nPurge - Clear a certain amount of messages!\nBan - Ban a specified user.\nMute - Temp mute a user or perm mute them.')
			.setTimestamp()
			.setFooter(`${message.author.username}`)
		message.channel.send(cmdsembed)
	}
}