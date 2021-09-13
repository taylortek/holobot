const Discord = require('discord.js');
require('dotenv').config();
const api = require('bee-api');
const redditFetch = require('reddit-fetch');

const { Client, Intents } = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS] });
const PREFIX = "$"

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in`);
});

client.on('messageCreate', (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith("r/")){
    sub = message.content;
    redditFetch({

        subreddit: sub.substr(2,message.content.length),
        sort: 'hot',
        allowNSFW: true,
        allowModPost: true,
        allowCrossPost: true,
        allowVideo: true
    
    }).then(post => {
        message.channel.send(post.url);
    });
};
});

client.login(process.env.HOLO_BOT_TOKEN);