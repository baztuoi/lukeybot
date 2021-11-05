module.exports = {
	name: 'suggest',
	description: "sg",
	async execute(client, message, args, Discord){
		

        var d = new Date();
        const fs = require('fs')

        var random = Math.floor(Math.random() * 3842749) + 1;

        const input = args.slice(0).join(' ');

        fs.writeFileSync(`./suggests/${random}${message.author.id}.txt`, `[${message.author.username}#${message.author.discriminator} ${d.toLocaleTimeString()} ${d.toLocaleDateString()}] ${input}`);

	}
}