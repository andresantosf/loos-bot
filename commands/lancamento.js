const Discord = require("discord.js");

module.exports = {
    lancamento: function lancamento(message,variavel) {
        if(variavel == " "){
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Explicação pika que eu vou fazer depois')
            .setDescription('Explicação muito pika que eu vou fazer depois')
            message.inlineReply(mensagem);
        }
        if(variavel == " "){
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Explicação pika que eu vou fazer depois')
            .setDescription('Explicação muito pika que eu vou fazer depois')
            message.inlineReply(mensagem);
        }
    }
}