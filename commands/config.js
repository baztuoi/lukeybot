module.exports = {
	name: 'config',
	description: "config",
	async execute(client, message, args, Discord){

            const fs = require('fs');

//

//standards




// embeds

            const { MessageEmbed } = require('discord.js');

            const noargs = new MessageEmbed()
                .setColor('#ff3939')
                .setTitle(":warning: Error")
                .setDescription("You have not specificed a setup. \n \n``prefix``\n ``encourage``")

            const pns = new MessageEmbed()
                .setColor('#ff3939')
                .setTitle(":warning: Error")
                .setDescription("You have not specified your new prefix.")

            const ens = new MessageEmbed()
                .setColor('#ff3939')
                .setTitle(":warning: Error")
                .setDescription("You have not specified your new encourage channel.")

            const defaultz = new MessageEmbed()
                .setColor('#ff3939')
                .setTitle(":warning: Error")
                .setDescription("You have not specified a valid option.")

            const noperm = new MessageEmbed()
                .setColor('#ff3939')
                .setTitle(":warning: Error")
                .setDescription("You do not have permission to use this command.")

            const success = new MessageEmbed()
                .setColor('#82ff80')
                .setTitle(":white_check_mark: Success!")
                .setDescription(`You have updated your prefix to ` + `\`${args[1]}\``)


// command 

        const { Permissions } = require('discord.js');

        

    if (!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
        message.delete();
        message.channel.send({ embeds: [noperm] }).then(message => {
            setTimeout(() => message.delete(), 3500)
        })
        .catch
        return;
    } else
        if(!args[0]){
            message.delete();
            message.channel.send({ embeds: [noargs] }).then(message => {
                setTimeout(() => message.delete(), 3500)
            })
            .catch
        };
            if(args[0]){
                (args[0])
                switch(args[0]){
                    case "prefix":

                        // if arg 1 is prefix
                    
                            if(args[1]){
                                
                                message.delete();

                                const guild = message.guild.id

                                const tg = require(`../guilds/${guild}.json`)
                                const thisGuild = tg.encourage

                                const jsonFile = { 
                                    prefix: args[1],
                                    encourage: thisGuild
                                  };
                           
                                  const data = JSON.stringify(jsonFile);
                                  fs.writeFileSync(`./guilds/${guild}.json`, data);
                                  message.channel.send({ embeds: [success] }).then(message => {
                                    setTimeout(() => message.delete(), 3500)
                                })
                                .catch
                            } else {
                                message.delete();
                                message.channel.send({ embeds: [pns] }).then(message => {
                                    setTimeout(() => message.delete(), 3500)
                                })
                                .catch
                            }


                        /// end
                        break;
                        case "encourage":
                            if(args[1]){

                                message.delete();

                                const guild = message.guild.id

                                const tge = require(`../guilds/${guild}.json`)
                                const thisGuildp = tge.prefix

                                const jsonFile = { 
                                    prefix: thisGuildp,
                                    encourage: args[1]
                                  };
                           
                                  const data = JSON.stringify(jsonFile);
                                  fs.writeFileSync(`./guilds/${guild}.json`, data);
                                  message.channel.send({ embeds: [success] }).then(message => {
                                    setTimeout(() => message.delete(), 3500)
                                })
                                .catch
                            } else {

                                message.delete();
                                
                                message.channel.send({ embeds: [ens] }).then(message => {
                                    setTimeout(() => message.delete(), 3500)
                                })
                                .catch
                            }
                        break;
                        default:
                            message.channel.send({ embeds: [defaultz] });
                        break;
                        }
                }

                

            


	}
}