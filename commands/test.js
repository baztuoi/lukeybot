const colors = require('../config/colors.json')
const { MessageEmbed } = require('discord.js');
const { MessageButton } = require('discord-buttons');

module.exports = {
	name: 'test',
	description: "Information!",
	async execute(client, message, args, Discord){
		//

            const button1 = new MessageButton()
                .setStyle('gray')
                .setLabel('Click')
                .setID('button1')


            message.channel.send("Touch to", button1);


    //

	}
}