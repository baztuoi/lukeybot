module.exports = (client, Discord) =>{
    console.log('Online.')

    client.user.setActivity("Hypixel Bedwars | 200 ⭐️ // !discord", {
        type: "STREAMING",
        url: "https://www.twitch.tv/xziigames"
      });
}