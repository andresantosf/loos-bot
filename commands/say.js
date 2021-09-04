const Discord = require("discord.js");

module.exports = {
    say: async function say(args,message){
    texto = ''
    args.forEach(arg => {
      texto += arg + ' '
      console.log(texto)
    });
    message.channel.send(texto)
    message.delete()
  }
}