module.exports = {
	name: 'encourage',
	description: "Information!",
	async execute(client, message, args, Discord){
		
        const input = args.slice(0).join(' ');

        const guild = message.guild.id

        const echannel = require(`../guilds/${guild}.json`)
        const thisGuild = echannel.encourage

        const channel = client.channels.cache.find(channel => channel.name === `${echannel.encourage}`)
        
        channel.send(input)


	}
}