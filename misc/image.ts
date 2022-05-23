import { Client, Interaction } from "discord.js";

const {MessageAttachment,MessageEmbed} = require('discord.js');

module.exports = {
    name:"waifu",
    description:"wysyla obrazek",
    run: async (client,interaction) =>{
      const attachment = new MessageAttachment(
          "waifu/22.05.2022.jpg.jpg"
      )
    interaction.followUp({files:[attachment]});
    }

}