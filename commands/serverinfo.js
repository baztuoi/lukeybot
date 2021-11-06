module.exports = {
	name: 'serverinfo',
	description: "Information!",
	async execute(client, message, args, Discord){
		
        // embed variables

        const memberCount = message.member.guild.memberCount
        const serverIcon = message.guild.iconURL();
        const guildName = message.member.guild.name
        const location = message.member.guild.region
        const emojis = message.guild.emojis.cache;
        const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());


        // date 
        const moment = require('moment')
        const guild = message.member.guild
        const dateCreated = moment(guild.createdAt)
        


        const { MessageEmbed } = require('discord.js');
            const info = new MessageEmbed()
                .setColor('#479aff')
                .setTitle("Server Information")
                .setDescription("General information about the server you are in!")
                .setAuthor(guildName, serverIcon)
                .addField("Server Creation Date", `${dateCreated.format("DD/MM/YYYY")}`, true)
                .addField("Server Member Count", `${memberCount} Members`, true)
                .addField("Server Location", `Sydney`, true)
                .addField("Emoji Count", `${emojis.size}`, true)
                .addField("Role Count", `${roles.length - 1}`, true)
                .setTimestamp()
                .setFooter(client.user.username, client.user.avatarURL);



			message.channel.send({ embeds: [info] })



	}
}