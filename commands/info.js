const colors = require('../config/colors.json')

module.exports = {
	name: 'info',
	description: "Information!",
	async execute(client, message, args, Discord){

const { MessageEmbed } = require('discord.js');
const infos = require('../config/info.json')
const info = new MessageEmbed()
	.setColor(colors.blue)
	.setAuthor("Neo Bot")
	.addField("Author", `${infos.author}`, true)
	.addField("Version", `${infos.version}`, true)
	.addField("Creation Date", "4/10/2021", true)


	message.delete();
	message.channel.send({ embeds: [info] });

	}
}