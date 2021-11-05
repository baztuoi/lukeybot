module.exports = {
	name: 'help',
	description: "Information!",
	async execute(client, message, args, Discord){
		
        const { MessageEmbed } = require('discord.js');


		message.delete();
		const guild = message.guild.id
        const tg = require(`../guilds/${guild}.json`)
     	const thisGuild = tg.prefix

        const help = new MessageEmbed()
            .setColor('#3898ff')
            .setTitle("NeoBot Help Menu")
            .setDescription("*List of commands and features provided by NeoBot.*")
			.addField(`\`${thisGuild}config [option] [option]\``, "Configurate your bot and setup.")
			.addField(`\`${thisGuild}info\``, "View the general information of NeoBot.")
			.addField(`\`${thisGuild}feedback [text]\``, "Send a letter of encouragement to the encourage channel.")
			.addField(`\`${thisGuild}8ball [question]\``, "Test your luck with the 8ball command.")

			message.channel.send({ embeds: [help] })


	}
}