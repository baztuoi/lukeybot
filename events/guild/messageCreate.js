module.exports = (client, Discord, messageCreate, message) =>{
    const guild = messageCreate.guild.id;
    const thisGuild = require(`../../guilds/${guild}.json`)
    const prefix = thisGuild.prefix
    if(!messageCreate.content.startsWith(prefix) || messageCreate.author.bot) return;

    const fs = require('fs');

    const args = messageCreate.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd);;

    if(!command){

        messageCreate.delete()
        const { MessageEmbed } = require('discord.js');
        const nocmd = new MessageEmbed()
            .setColor('#ff3939')
            .setTitle('This command does not exist!')
            .setDescription('Please refer to -help for a list of commands!')

            messageCreate.channel.send({ embeds: [nocmd] }).then(message => {
                setTimeout(() => message.delete(), 3500)
            })
            .catch

    }

    if(command) command.execute(client, messageCreate, args, Discord)
    
}