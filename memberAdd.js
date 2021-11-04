const fs = require('fs')
const log = require('../controllers/Log')
module.exports = function(member, client, message, guild) {
    log.send(`[${member.guild.id}/${member.guild.name}:${member.user.username}] ${member.user.username} was added to this guild.`);
    const tguild = require('../guilds/'+member.guild.id+'.json')
    const guilds = member.guild;
    if(tguild.guild.messages.welcome.enabled == "true"){
        let str = tguild.guild.messages.welcome.message;
        let res = str.replace("[user]", `${member.user.username}`)
        if(tguild.guild.messages.channel == ''){
            log.send(`[${member.guild.id}/${member.guild.name}:${member.user.username}] Unable to send welcome message because channel not set.`);
            return
        }
        member.guild.channels.get(tguild.guild.messages.channel).send(res).catch(err => {

        });
    }

}