const colors = require('../config/colors.json')
const { MessageEmbed, MessageButton, MessageActionRow, Message } = require('discord.js');

module.exports = {
	name: 'test',
	description: "Information!",
	async execute(client, message, args, Discord){
		//



        const { MessageEmbed } = require('discord.js');

        const line1 = new MessageEmbed()
            .setColor(colors.green)
            .setTitle("ForbiddonMC Punishment Website")
            .setDescription("The launch of our bans website has just happened! Head on over to see all the punishments that occur in the server!")


			const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setLabel('bans.forbiddon.net')
                .setStyle('LINK')
				.setURL("http://bans.forbiddon.net")
        );

        await message.channel.send({ embeds: [line1], components: [row] });





	}
}