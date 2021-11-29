const colors = require('../config/colors.json')
const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');

module.exports = {
	name: 'test',
	description: "Information!",
	async execute(client, message, args, Discord){
		//
        message.channel.send("Test Complete")
	}
}