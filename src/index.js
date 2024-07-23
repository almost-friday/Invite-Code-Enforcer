require('dotenv').config();
const { Client, IntentsBitField, PartialGroupDMChannel } = require('discord.js');

const client = new Client({ 
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ],
});

client.on('ready', (c) => { console.log(`${c.user.tag} online`) } );

const regex = /^(?!-)\d{18}(?!>)($|\s)/;
const validChannelId = '<#772517401459556412>';
client.on('messageCreate', (msg) => { 
    if (msg.content.match(regex) && msg.channel != validChannelId){
        msg.channel.send(`${msg.author} please post server invite codes in ${validChannelId}`);
        msg.delete();
    }
 } );


client.login(process.env.TOKEN);