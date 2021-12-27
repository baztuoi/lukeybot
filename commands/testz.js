const colors = require('../config/colors.json')
const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');

module.exports = {
	name: 'testz',
	description: "Information!",
	async execute(client, message, args, Discord){
		//
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setLabel('Primaryz')
                .setStyle('LINK')
				.setURL("https://discord.gg")
        );

        await message.channel.send({ content: 'Pong!', components: [row] });



    //

	}
}