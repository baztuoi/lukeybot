const colors = require('../config/colors.json')

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
                .setColor(colors.red)
                .setTitle(":warning: Error")
                .setDescription("You have not specificed a setup. \n \n``prefix``\n ``feedback``\n ``admin``")

            const pns = new MessageEmbed()
                .setColor(colors.red)
                .setTitle(":warning: Error")
                .setDescription("You have not specified your new prefix.")

            const ens = new MessageEmbed()
                .setColor(colors.red)
                .setTitle(":warning: Error")
                .setDescription("You have not specified your new feedback channel.")

            const defaultz = new MessageEmbed()
                .setColor(colors.red)
                .setTitle(":warning: Error")
                .setDescription("You have not specified a valid option.")

            const noperm = new MessageEmbed()
                .setColor(colors.red)
                .setTitle(":warning: Error")
                .setDescription("You do not have permission to use this command.")

            const success = new MessageEmbed()
                .setColor(colors.green)
                .setTitle(":white_check_mark: Success!")
                .setDescription(`You have updated your prefix to ` + `\`${args[1]}\``)

            const success2 = new MessageEmbed()
                .setColor(colors.green)
                .setTitle(":white_check_mark: Success!")
                .setDescription(`You have updated your feedback channel to ` + `\`${args[1]}\``)

            const success3 = new MessageEmbed()
                .setColor(colors.green)
                .setTitle(":white_check_mark: Success!")
                .setDescription(`You have updated your Administrator Role to ` + `\`${args[1]}\``)
            
            const successJOINROLE = new MessageEmbed()
                .setColor(colors.green)
                .setTitle(":white_check_mark: Success!")
                .setDescription(`You have updated your join role to ` + `\`${args[1]}\``)
            


// command 

        const { Permissions } = require('discord.js');

        const userGuild = message.guild.id
        const guildFile = require(`../guilds/${userGuild}.json`)

    if (!message.member.roles.cache.some(role => role.name === guildFile.moderator)) {
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
                        case "feedback":
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
                                  message.channel.send({ embeds: [success2] }).then(message => {
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
                        case "joinrole":



                            if(args[1]){

                                message.delete();

                                const guild = message.guild.id

                                const tge = require(`../guilds/${guild}.json`)
                                const thisGuildp = tge.prefix

                                const jsonFile = { 
                                    prefix: thisGuildp,
                                    encourage: tge.encourage,
                                    moderator: tge.moderator,
                                    joinrole: args[1]
                                  };
                           
                                  const data = JSON.stringify(jsonFile);
                                  fs.writeFileSync(`./guilds/${guild}.json`, data);
                                  message.channel.send({ embeds: [successJOINROLE] }).then(message => {
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
                        case "admin":
                            if(args[1]){

                                message.delete();

                                const guild = message.guild.id

                                const tge = require(`../guilds/${guild}.json`)
                                const thisGuildp = tge.prefix

                                const jsonFile = { 
                                    prefix: thisGuildp,
                                    encourage: tge.encourage,
                                    moderator: args[1]
                                  };
                           
                                  const data = JSON.stringify(jsonFile);
                                  fs.writeFileSync(`./guilds/${guild}.json`, data);
                                  message.channel.send({ embeds: [success3] }).then(message => {
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