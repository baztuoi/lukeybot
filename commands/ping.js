const colors = require('../config/colors.json')
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'ping',
	description: "Information!",
	async execute(client, message, args, Discord){
		
        const ping = new MessageEmbed()
            .setColor(colors.blue)
            .setTitle('Latency Response')
            .setDescription(`${Date.now() - message.createdTimestamp}ms`)
            .setTimestamp()

        message.channel.send({ embeds: [ping] })

	}
}