const fs = require('fs')
module.exports = member => {

        let welcomeRole = member.guild.roles.cache.find(role => role.name === 'Member');
     
        member.roles.add(welcomeRole);

}