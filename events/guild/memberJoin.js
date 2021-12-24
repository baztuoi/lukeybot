module.exports = (client, Discord, messageCreate, guildMember) =>{

    const fs = require('fs');


    const joinRole = guild.roles.cache.find(role => role.name === 'Member');

    client.on('guildMemberAdd', member => {
        guildMember.roles.add(joinRole);
    })
    
    
}