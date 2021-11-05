module.exports = {
	name: 'config',
	description: "config",
	async execute(client, message, args, Discord){

            const fs = require('fs');

// embeds

            const { MessageEmbed } = require('discord.js');

            const noargs = new MessageEmbed()
                .setColor('#ff3939')
                .setTitle(":warning: Error")
                .setDescription("You have not specificed a setup. \n \n``prefix``")

            const pns = new MessageEmbed()
                .setColor('#ff3939')
                .setTitle(":warning: Error")
                .setDescription("You have not specified your new prefix.")

            const defaultz = new MessageEmbed()
                .setColor('#ff3939')
                .setTitle(":warning: Error")
                .setDescription("You have not specified a valid option.")

            const success = new MessageEmbed()
                .setColor('#82ff80')
                .setTitle(":white_check_mark: Success!")
                .setDescription(`You have updated your prefix to ` + `\`${args[1]}\``)


// command 

        if(!args[0]){
            message.channel.send({ embeds: [noargs] });
        };
            if(args[0]){
                (args[0])
                switch(args[0]){
                    case "prefix":
                            if(args[1]){
                                const jsonFile = { 
                                    prefix: args[1]
                                  };
                           
                                  const data = JSON.stringify(jsonFile);
                                  fs.writeFileSync(`./config/prefix.json`, data);
                                  message.channel.send({ embeds: [success] });
                            } else {
                                message.channel.send({ embeds: [pns] });
                            }
                        break;
                        default:
                            message.channel.send({ embeds: [defaultz] });
                        break;
                        }
                }

                

            


	}
}