var Discord = require("discord.js");
global.bot = new Discord.Client();
var handler = require("./handler");
const config = require("./config.json")

bot.on("ready", () => {
    handler(bot);
});

bot.login(config.token);
