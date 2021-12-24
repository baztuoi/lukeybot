module.exports = (client, Discord, messageCreate, guildMember) =>{

    const fs = require('fs');


    const joinRole = guild.roles.cache.find(role => role.name === 'Member');

    client.on('guildMemberAdd', guildMember => {
        guildMember.roles.add(joinRole);
        console.log(`Add ${joinRole} to ${guildMember}`)
    })
    
    
}