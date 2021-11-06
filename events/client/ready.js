module.exports = (client, Discord) =>{
    console.log('Online.')

    client.user.setActivity("Developed by baztuoi", {
        type: "STREAMING",
        url: ""
      });

      client.user.setPresence({
        game: { name: 'NeoBot | -help' },
        status: 'online',
       });


}