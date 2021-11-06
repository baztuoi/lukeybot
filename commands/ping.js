const colors = require('../config/colors.json')

module.exports = {
	name: 'ping',
	description: "Information!",
	async execute(client, message, args, Discord){
		

        message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`)

	}
}