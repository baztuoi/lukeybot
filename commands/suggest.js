const colors = require('../config/colors.json')

module.exports = {
	name: 'suggest',
	description: "sg",
	async execute(client, message, args, Discord){
		

        var d = new Date();
        const fs = require('fs')

        var random = Math.floor(Math.random() * 3842749) + 1;

        const input = args.slice(0).join(' ');

        if(!input){
            message.delete()
            const { MessageEmbed } = require('discord.js');
            const ens = new MessageEmbed()
                .setColor(colors.red)
                .setTitle(":warning: Error")
                .setDescription("You have not specified any input.")

			message.channel.send({ embeds: [ens] }).then(message => {
                setTimeout(() => message.delete(), 3500)
            })
        } else {
        message.delete();
        fs.writeFileSync(`./suggests/${random}${message.author.id}.txt`, `[${message.author.username}#${message.author.discriminator} ${d.toLocaleTimeString()} ${d.toLocaleDateString()}] ${input}`);
        const { MessageEmbed } = require('discord.js');
            const ens1 = new MessageEmbed()
                .setColor(colors.green)
                .setTitle(":white_check_mark: Success!")
                .setDescription("Your suggestion has been sent to the bot developer!")
                .setTimestamp()

			message.author.send({ embeds: [ens1] })
        }
	}
}