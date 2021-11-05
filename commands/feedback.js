module.exports = {
	name: 'feedback',
	description: "Information!",
	async execute(client, message, args, Discord){
		
        const input = args.slice(0).join(' ');

        const guild = message.guild.id

        const echannel = require(`../guilds/${guild}.json`)
        const thisGuild = echannel.encourage

        const channel = client.channels.cache.find(channel => channel.name === `${echannel.encourage}`)
        

        if(!channel){

            message.delete()

            const { MessageEmbed } = require('discord.js');
            const ens = new MessageEmbed()
                .setColor('#ff3939')
                .setTitle(":warning: Error")
                .setDescription("There is no feedback channel set.")

			message.channel.send({ embeds: [ens] }).then(message => {
                setTimeout(() => message.delete(), 3500)
            })
            .catch
            return;
        }

        if(!input){
            message.delete()

            const { MessageEmbed } = require('discord.js');
            const ens = new MessageEmbed()
                .setColor('#ff3939')
                .setTitle(":warning: Error")
                .setDescription("You have not specified any input.")

			message.channel.send({ embeds: [ens] }).then(message => {
                setTimeout(() => message.delete(), 3500)
            })
            .catch
            return;
        } else {
            const { MessageEmbed } = require('discord.js');
            const ens2 = new MessageEmbed()
                    .setColor('#5eff7e')
                    .setAuthor(`${message.author.username}#${message.author.discriminator}`)
                    .setTitle(`Feedback Received`)
                    .setDescription(`${input}`)

            message.delete()
            channel.send({ embeds: [ens2] })
        }

	}
}