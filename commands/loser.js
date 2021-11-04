module.exports = {
	name: 'info',
	description: "Information!",
	async execute(client, message, args, Discord){
		

const { MessageEmbed } = require('discord.js');
const bot = require('../config/info.json')
const info = new MessageEmbed()
	.setColor('#339cff')
	.setAuthor("Lukey Bot")
	.addField("Author", `${bot.author}`, true)
	.addField("Version", `${bot.version}`, true)
	.addField("Creation Date", "4/10/2021", true)


	message.delete();
	message.channel.send({ embeds: [info] });

	}
}