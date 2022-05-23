import DiscordJS, { Intents, MessageAttachment} from "discord.js"
import WOKCommands from "wokcommands";
import path from 'path'
import dotenv from 'dotenv'
dotenv.config();

const client = new DiscordJS.Client({
    intents:[
       [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES],
    ]
})

client.on('ready', () =>{
    console.log('the bot is ready')

    new WOKCommands(client,{
        commandDir: path.join(__dirname,'misc'),
        typeScript: true
    })

const guildid = "736594105231999016"
const guild = client.guilds.cache.get(guildid)
let commands

if(guild){
    commands = guild.commands;
}else{
    commands = client.application?.commands;
}


});


client.login(process.env.TOKEN);
