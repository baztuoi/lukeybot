module.exports = (client, Discord, messageCreate) =>{

    const fs = require('fs');

    const welcomeChannel = '796538164193394708'

    client.on('guildMemberAdd', member => {
        member.roles.add(member.guild.roles.cache.find(i => i.name === 'logs'))
    
        const welcomeEmbed = new Discord.MessageEmbed()
    
        welcomeEmbed.setColor('#5cf000')
        welcomeEmbed.setTitle('**' + member.user.username + '** is now Among Us other **' + member.guild.memberCount + '** people')
    
        member.guild.channels.cache.find(i => i.name === 'logs').messageCreate(welcomeEmbed)
    })
    
    
}