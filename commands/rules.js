const colors = require('../config/colors.json')

module.exports = {
	name: 'rulesiterige',
	description: "Information!",
	async execute(client, message, args, Discord){
		

const { MessageEmbed } = require('discord.js');
const rules1 = new MessageEmbed()
	.setColor('#339cff')
	.setTitle(':pushpin: **(1)** No NSFW')
	.setDescription('We do not tolerate NSFW or 18+ videos or images in this server. They will be deleted.')

const rules2 = new MessageEmbed()
	.setColor('#ff4070')
	.setTitle(':pushpin: **(2)** No Chat Flood or Spam')
	.setDescription('Any spamming/flooding the chat will not be tolerated, we like to keep a clean cheat.')

const rules3 = new MessageEmbed()
	.setColor('#339cff')
	.setTitle(':pushpin: **(3)** Be respectful')
	.setDescription('Be genuinely respectful to others, we allow banter but will not tolerate genuine disrepsect.')

const rules4 = new MessageEmbed()
	.setColor('#ff4070')
	.setTitle(':pushpin: **(4)** Avoid spamming @Luke for his attention.')
	.setDescription('Please do not spam @Lukey/XZII for his attention, as this is part of our spamming/flooding guideline.')

const rules5 = new MessageEmbed()
	.setColor('#339cff')
	.setTitle(':pushpin: **(5)** No Advertisement')
	.setDescription('Advertising links, youtube channels, discord servers, minecraft servers are not permitted.')

const rules6 = new MessageEmbed()
	.setColor('#ff4070')
	.setTitle(':pushpin: **(6)** Avoid spamming @Luke for his attention.')
	.setDescription('Please do not spam @Lukey/XZII for his attention, as this is part of our spamming/flooding guideline.')

const rules = new MessageEmbed()
	.setColor('#ff4070')
	.setTitle(':pushpin: **Rules and Guidelines**')
	.setDescription('These guidelines are set and created in order for our community to follow, so we can have a structured and well mannered environment for our members.\n\n**PLEASE NOTE:** These rules can be changed and updated at any time, and it is your responsibility to follow them.')

const wronged = new MessageEmbed()
	.setColor('#339cff')
	.setDescription('*If you believe that a punishment made against you was unnecessary or misunderstood, please contact one of our managers in red.*')


	message.delete();
	message.channel.send({ embeds: [rules] });
	message.channel.send({ embeds: [rules1] });
	message.channel.send({ embeds: [rules2] });
	message.channel.send({ embeds: [rules3] });
	message.channel.send({ embeds: [rules4] });
	message.channel.send({ embeds: [rules5] });
	message.channel.send({ embeds: [rules6] });
	message.channel.send({ embeds: [wronged] })

	}
}