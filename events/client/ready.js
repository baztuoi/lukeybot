module.exports = (client, Discord) =>{
    console.log('Online.')

    client.user.setPresence({
      status: 'online',
      activity: {
          name: "NeoBot | -help",
          type: "PLAYING"
      }
  });

      


}