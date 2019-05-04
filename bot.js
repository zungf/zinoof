const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const { Client, Util } = require('discord.js');
const fs = require('fs');
const getYoutubeID = require('get-youtube-id');
const moment = require('moment');
const db = require('quick.db');
const client = new Discord.Client();  
const giphy = require('giphy-api')();    
const googl = require('goo.gl');  
const translate = require('google-translate-api');  
const UserBlocked = new Set();
const jimp = require('jimp');  
const math = require('math-expression-evaluator');
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const google = require('google-it');
const queue = new Map();
const zalgo = require('zalgolize');  
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const sql = require("sqlite");
 const dateFormat = require('dateformat');
 const pretty = require('pretty-ms')
const sWlc = {}

const adminprefix = "z";



const developers = ['536009907120504847'];

client.on('message', message => {//Toxic Codes
    var argresult = message.content.split(` `).slice(1).join(' ');//Toxic Codes
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(prefix + 'setgame')) {
    client.user.setGame(argresult);
      message.channel.send(`**✽ Changed the Bot PLAYING to » __${argresult}__**.`)
  } else 
     if (message.content === (prefix + "leave")) {//Toxic Codes
    message.guild.leave();   //Toxic Codes
  } else  
  if (message.content.startsWith(prefix + 'setwatch')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✽ Changed the Bot WATCHING to » __${argresult}__**.`)
  } else 
  if (message.content.startsWith(prefix + 'setlisten')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✽ Changed the Bot LISTENING to » __${argresult}__**.`)
  } else 
  if (message.content.startsWith(prefix + 'setstream')) {
    client.user.setGame(argresult, "https://www.twitch.tv/imd3s_x");
      message.channel.send(`**✽ Changed the Bot STREAMING to » __${argresult}__**.`)
  }
  if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`**✽ Changed the Bot NAME to » __${argresult}__**.`)
} else
  if (message.content.startsWith(prefix + 'setprefix1')) {
  client.user.setPrefix(argresult).then
      message.channel.send(`**✽ Changed the Bot PREFIX to » __${argresult}__**.`)
} else
if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`**✽ Changed the Bot AVATAR to » __${argresult}__**.`);
}
});

client.on('message', message => {  
let CH = client.guilds.get("501728913710645260").emojis.find(r => r.name === "check");
let CR = client.guilds.get("501728913710645260").emojis.find(r => r.name === "cross");
    if (message.author.bot) return;
if (message.content.startsWith(prefix + 'clear')) { //Codes
    if(!message.channel.guild) return message.reply('**${CR}| This Command For Servers Only!**'); 
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`**${CR} | You don't have Premissions!**`);
        if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send(`**${CR} | I don't have Permission!**`);
 let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 100) return message.reply(`**${CR} | The number can't be more than **100** .**`).then(messages => messages.delete(5000))
    if(!messagecount) args = '100';
    message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.send(`**${CH} | Done , Deleted \`${args}\` messages.**`).then(messages => messages.delete(5000));
  }
  });



	




client.login(process.env.BOT_TOKEN);
