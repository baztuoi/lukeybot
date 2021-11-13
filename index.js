const Discord = require('discord.js');
const token = require('./config/token.json')
const client = new Discord.Client({
  allowedMentions: {
      parse: ['users', 'roles'],
      repliedUser: true,

  },
  intents: [
      "GUILDS",
      "GUILD_MESSAGES",
      "GUILD_PRESENCES",
      "GUILD_MEMBERS",
      "GUILD_MESSAGE_REACTIONS",
  ],
});


client.commands = new Discord.Collection();
client.events = new Discord.Collection();


['command_handler', 'event_handler'].forEach(handler =>{
  require(`./handlers/${handler}`)(client, Discord);
})

client.login(token.token2)