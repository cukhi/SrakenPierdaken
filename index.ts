import DiscordJS, { Intents } from "discord.js"
import dotenv from 'dotenv'
dotenv.config();

const client = new DiscordJS.Client({
    intents:[
       [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES],
    ]
})

client.on('ready', () =>{
    console.log('the bot is ready')

const guildid = "736594105231999016"
const guild = client.guilds.cache.get(guildid)
let commands

if(guild){
    commands = guild.commands;
}else{
    commands = client.application?.commands;
}
commands?.create({
    name:"ping",
    description: 'Replies with pong'
})
commands?.create({
    name:"dodaj",
    description:"Dodaje dwie liczby",
    options:[
        {
            name:"num1",
            description: "Pierwszy numer",
            required: true,
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
        },
        {
            name:"num2",
            description: "Drugi numer",
            required: true,
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
    

        },

       

    ]
})
})

client.on('interactionCreate', async (interaction) =>{
    if(!interaction.isCommand()){
        return;
    }
    const {commandName,options} = interaction
    if(commandName === 'ping'){
        interaction.reply({
            content:'pong',
            ephemeral: true,
        })
    }else if(commandName === 'dodaj'){
        const num1 = options.getNumber('num1')!
        const num2 = options.getNumber('num2')!

        await interaction.deferReply({
            ephemeral: false
        })
        await new Promise(resolve => setTimeout(resolve,5000))

    await    interaction.editReply({
            content: `Suma wynosi ${num1 + num2}`,
            

        })
    }
})



client.login(process.env.TOKEN);
