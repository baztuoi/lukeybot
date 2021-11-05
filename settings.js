const log = require('../controllers/Log')
const Message = require('../controllers/Message')
exports.run = function(client, message, args) {
    const fs = require('fs');
    const guild = message.guild.id;
    const thisGuild = require(`../guilds/${guild}.json`)
    const prefix = thisGuild.guild.settings.prefix;

    ('User ran settings with arguments: ' +args)
    if(args[0]){
        (args[0])
        switch(args[0]){
            case "edit":

                switch(args[1]){
                    case "prefix":
                        if(args[2]){
                            EditPrefix(args[2])
                        } else {
                            message.reply('Please enter a new prefix.')
                        }
                    break;
                    case "links":
                        if(args[2] === 'allow'){
                            if(thisGuild.guild.settings.links === 'true'){
                                Message.error('Link posting is already enabled!', message);
                                return;
                            }
                            EnableLinks();
                        } else if(args[2] === 'disallow') {
                            if(thisGuild.guild.settings.links === 'false'){
                                Message.error('Link posting is already disabled!', message);
                                return;
                            }
                            DisableLinks();
                        }
                    break;
                    case "messages":
                        
                        switch(args[2]){
                            case "welcome":
                            if(args[3] == "enable" || args[3] == "disable" || args[3] == "channel"){
                                switch(args[3]){
                                    case "enable":
                                    EnableWelcome();
                                    break;
                                    case "disable":
                                    DisableWelcome();
                                    break;
                                    case "channel":
                                    MsgChannel(args[4]);
                                    break;
                                } 
                            } else {
                                let str = args.slice(3).join(' ');
                                (str);
                                if(str){
                                    EditWelcome(str)
                                } else {
                                    Message.error('Please enter a welcome message.', message);
                                }
                            }
                            break;
                            case "leave":
                            if(args[3] == "enable" || args[3] == "disable" || args[3] == "channel"){
                                switch(args[3]){
                                    case "enable":
                                    EnableLeave();
                                    break;
                                    case "disable":
                                    DisableLeave();
                                    break;
                                    case "channel":
                                    MsgChannel(args[4]);
                                    break;
                                } 
                            } else {
                                let str = args.slice(3).join(' ');
                                (str);
                                if(str){
                                    EditLeave(str)
                                } else {
                                    Message.error('Please enter a leave message.', message);
                                }
                            }
                            break;
                            default:
                                Message.error('Please enter a valid message property.', message);
                            break;
                        }

                    break;
                    case "announcements":
                        switch(args[2]){
                            case "channel":
                                AnnChannel(args[3])
                            break;
                            default:
                                Message.error('Please provide a valid property.', message);
                            break;
                        }
                    break;
                    case "role":
                        
                        switch(args[2]){
                            case "mod":
                                if(args[3]){
                                    ModRole(args[3])
                                } else {
                                    Message.error('Please @mention a role.', message);
                                }
                            break;
                            case "admin":
                                if(args[3]){
                                    AdminRole(args[3])
                                } else {
                                    Message.error('Please @mention a role.', message);
                                }
                            break;
                            case "superadmin":
                                if(args[3]){
                                    SuperadminRole(args[3])
                                } else {
                                    Message.error('Please @mention a role.', message);
                                }
                            default:
                                Message.error('Please enter a valid role property.', message);
                            break;
                        }

                    break;
                    default:
                        Message.error('`'+args[1]+'` is not a valid option.', message);
                    break;
                }

            break;
            case "help":
                help();
            break;
            default:
                Message.error('`'+args[0]+'` is not a valid option.', message);
            break;
        }
    } else {
        help();
    }

    function EditPrefix(prefix){
        (`Editing prefix to ${prefix} for the guild: ${message.guild.name}`);
        thisGuild.guild.settings.prefix = prefix;
        fs.writeFileSync(`./guilds/${guild}.json`, JSON.stringify(thisGuild), function (err) {
        });
        log.send(`[${message.guild.id}/${message.guild.name}:${message.author.username}] Prefix changed to '${prefix}'.`);
        Message.success(`Prefix successfully changed to \`${prefix}\``, message)
    }

    function ModRole(role){
        let f1 = role.substring(3);
        let f2 = f1.slice(0, -1)
        thisGuild.guild.roles.moderator = f2;
        fs.writeFileSync(`./guilds/${guild}.json`, JSON.stringify(thisGuild), function (err) {
        });
        Message.success(`Moderator role successfully changed.`, message)
    }

    function SuperadminRole(role){
        let f1 = role.substring(3);
        let f2 = f1.slice(0, -1)
        thisGuild.guild.roles.moderator = f2;
        fs.writeFileSync(`./guilds/${guild}.json`, JSON.stringify(thisGuild), function (err) {
        });
        Message.success(`Superadmin role successfully changed.`, message)
    }

    function AdminRole(role){
        let f1 = role.substring(3);
        let f2 = f1.slice(0, -1)
        thisGuild.guild.roles.admin = f2;
        fs.writeFileSync(`./guilds/${guild}.json`, JSON.stringify(thisGuild), function (err) {
        });
        Message.success(`Administrator role successfully changed.`, message)
    }

        function EditWelcome(msg){
            (msg)
            thisGuild.guild.messages.welcome.message = msg;
            fs.writeFileSync(`./guilds/${guild}.json`, JSON.stringify(thisGuild), function (err) {
            });
            Message.success(`Welcome message successfully changed.`, message) 
        }

        function EnableWelcome(){
            thisGuild.guild.messages.welcome.enabled = 'true';
            fs.writeFileSync(`./guilds/${guild}.json`, JSON.stringify(thisGuild), function (err) {
            });
            Message.success(`Welcome message successfully enabled.`, message)
        }

        function DisableWelcome(msg){
            (msg)
            thisGuild.guild.messages.welcome.enabled = 'false';
            fs.writeFileSync(`./guilds/${guild}.json`, JSON.stringify(thisGuild), function (err) {
            });
            Message.success(`Welcome message successfully disabled.`, message) 
        }
            
            function EditLeave(msg){
                (msg)
                thisGuild.guild.messages.leave.message = msg;
                fs.writeFileSync(`./guilds/${guild}.json`, JSON.stringify(thisGuild), function (err) {
                });
                Message.success(`Leave message successfully changed.`, message) 
            }
    
            function EnableLeave(){
                thisGuild.guild.messages.leave.enabled = 'true';
                fs.writeFileSync(`./guilds/${guild}.json`, JSON.stringify(thisGuild), function (err) {
                });
                Message.success(`Leave message successfully enabled.`, message) 
            }
    
            function DisableLeave(msg){
                thisGuild.guild.messages.leave.enabled = 'false';
                fs.writeFileSync(`./guilds/${guild}.json`, JSON.stringify(thisGuild), function (err) {
                });
                Message.success(`Leave message successfully disabled.`, message) 
            }

            function MsgChannel(msg){
            (msg)
            let f1 = msg.substring(2);
            let f2 = f1.slice(0, -1)
            thisGuild.guild.messages.channel = f2;
            fs.writeFileSync(`./guilds/${guild}.json`, JSON.stringify(thisGuild), function (err) {
            });
            Message.success(`Welcome message successfully disabled.`, message) 
        }

            function AnnChannel(msg){
                (msg)
                let f1 = msg.substring(2);
                let f2 = f1.slice(0, -1)
                thisGuild.guild.announcements.channel = f2;
                fs.writeFileSync(`./guilds/${guild}.json`, JSON.stringify(thisGuild), function (err) {
                });
                Message.success(`Announcement channel successfully changed.`, message) 
            }
            
            function EnableLinks(){
                thisGuild.guild.settings.links = 'true';
                fs.writeFileSync(`./guilds/${guild}.json`, JSON.stringify(thisGuild), function (err) {
                });
                Message.success(`Users will now be able to post links.`, message) 
            }
        
            function DisableLinks(){
                thisGuild.guild.settings.links = 'false';
                fs.writeFileSync(`./guilds/${guild}.json`, JSON.stringify(thisGuild), function (err) {
                });
                Message.success(`Users will no longer be able to post links.`, message) 
            }

            function help(){
                message.channel.send({embed: {
                    color: 3447003,
                    author: {
                      name: 'Guild Settings',
                      icon_url: client.user.avatarURL
                    },
                    description: "Modify server-specific settings.",
                    fields: [{
                        name: "Change Bot Prefix",
                        value: `\`${prefix}settings edit prefix <newPrefix>\``
                      }
                    ]
                  }
                });
                message.channel.send({embed: {
                    color: 3447003,
                    author: {
                      name: 'Role Settings',
                      icon_url: client.user.avatarURL
                    },
                    description: "Change role settings.",
                    fields: [{
                        name: "Change Moderator Role",
                        value: `\`${prefix}settings edit role mod @role\``
                      },
                      {
                        name: "Change Administrator Role",
                        value: `\`${prefix}settings edit role admin @role\``
                      }
                    ]
                  }
                });
                message.channel.send({embed: {
                    color: 3447003,
                    author: {
                      name: 'Message Settings',
                      icon_url: client.user.avatarURL
                    },
                    description: "Set join and leave messages.",
                    fields: [{
                        name: "Edit Welcome Message",
                        value: `\`${prefix}settings edit messages welcome <message>\`\nYou can use the \`[user]\` variable to get the users name.`
                      },
                      {
                        name: "Edit Leave Message",
                        value: `\`${prefix}settings edit messages leave <message>\`\nYou can use the \`[user]\` variable to get the users name.`
                      },
                      {
                        name: "Disable/Enable Messages",
                        value: `\`${prefix}settings edit messages welcome|leave disable|enable\``
                      },
                      {
                        name: "Set Welcome/Leave Channel",
                        value: `\`${prefix}settings edit messages welcome|leave channel #channel\`\nSet where join and leave announcements will be sent to.`
                      },
                      {
                        name: "Set Announcements Channel",
                        value: `\`${prefix}settings edit announcements channel #channel\``
                      },
                      {
                        name: "Allow/Disallow Link Posting",
                        value: `\`${prefix}settings edit links allow|disallow\``
                      }
                    ]
                  }
                });
            }
}