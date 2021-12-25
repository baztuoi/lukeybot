const colors = require('../config/colors.json')

module.exports = {
	name: 'help',
	description: "Information!",
	async execute(client, message, args, Discord){
		
        const { MessageEmbed } = require('discord.js');


		const guild = message.guild.id
        const tg = require(`../guilds/${guild}.json`)
     	const thisGuild = tg.prefix

        const help = new MessageEmbed()
            .setColor(colors.blue)
            .setTitle("NeoBot Help Menu")
            .setDescription("*List of commands and features provided by NeoBot.*")
			.addField(`\`${thisGuild}config [option] [option]\``, "Configure your bot and setup.")
			.addField(`\`${thisGuild}info\``, "View the general information of NeoBot.")
			.addField(`\`${thisGuild}8ball [question]\``, "Test your luck with the 8ball command.")
			.addField(`\`${thisGuild}serverinfo\``, "Take a look at your server's information.")
			.addField(`\`${thisGuild}suggest [text]\``, "Send a suggestion to the bot developer.")

			message.channel.send({ embeds: [help] })


	}
}