const Discord = require("discord.js")
const bot = new Discord.Client()

const config = require("./config/main.json")
const cmd = require("./config/commands.json")

const prefix = config.prefix


// HEAD
console.log("Inicializando bot...")

bot.on("ready", () => {
    console.log("Bot listo.")
    bot.user.setStatus('Online')
    console.log("\nCommands executed:")
});


// BODY
bot.on("message", (msg) => {
    if(msg.author != bot.user)
    {
        var excecute = true
        switch (msg.content)
        {
            case prefix + cmd.yes.word:
                msg.channel.send("no")
                break
            case prefix + cmd.no.word:
                msg.channel.send("yes")
                break
            case prefix + cmd.YES.word:
                msg.channel.send("NO")
                break
            case prefix + cmd.NO.word:
                msg.channel.send("YES")
                break
            default:
                excecute = false
        }
        if (excecute === true) {
            console.log(`${msg.author.username}: ${msg.content}`)
        }
    }
});

const token = require("./config/token.json")
bot.login(token.token);