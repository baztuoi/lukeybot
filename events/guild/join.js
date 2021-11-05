const fs = require('fs')
module.exports = guild => {

    fs.writeFile(`./guilds/${guild.id}.json`, `
    {  
      "prefix": "-",
      "echannel": "encouragement"
    }
    `, { flag: 'w' }, function (err) {

        if (err) 
            return console.log(err);
        console.log(`Successfully created guild preferences file for ${guild.name} as ${guild.id}.json`);
    });

}