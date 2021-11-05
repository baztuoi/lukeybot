module.exports = {
	name: 'test',
	description: "Information!",
	async execute(client, message, args, Discord){
		
        message.channel.send("hey").then(message => {
            setTimeout(() => message.delete(), 3500)
        })
        .catch


	}
}