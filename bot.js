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





	




client.login(process.env.BOT_TOKEN);
