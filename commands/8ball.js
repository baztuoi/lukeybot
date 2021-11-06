const colors = require('../config/colors.json')


module.exports = {
	name: '8ball',
	description: "8ball",
	async execute(client, message, args, Discord){
		

        // Thank you NeoBot :)

let outcomes = [
        'It is certain',
        'It is decidedly so',
        'Without a doubt',
        'Yes, definitely',
        'You may rely on it',
        'As I see it, yes',
        'Most likely',
        'Outlook good',
        'Yes',
        'Signs point to yes',
        'Reply hazy, try again',
        'Ask again later',
        'Better not tell you now',
        'Cannot predict now',
        'Concentrate and ask again',
        'Don\'t count on it',
        'My reply is no',
        'My sources say no',
        'Outlook is not so good',
        'Very doubtful'
    ];

    let _outcomes = Math.floor(Math.random()*outcomes.length);
    let outcome = outcomes[_outcomes]
    let msg = args.slice(0).join(' ');

    if(msg){
        message.channel.send(`"${msg}" 🎱 | **${outcome}**.`)
    } else {
        const { MessageEmbed } = require('discord.js');

            const noargs = new MessageEmbed()
                .setColor(colors.red)
                .setTitle(":warning: Error")
                .setDescription("You haven't chosen anything to predict!")

                message.channel.send({ embeds: [noargs] });
    }

	}
}