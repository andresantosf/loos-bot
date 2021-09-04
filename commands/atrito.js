Discord = require("discord.js");

module.exports = {
    atr: async function atr(message, args, variavel) {
        if(args.length === 0){
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Atrito')
            .addFields(
            { name: '', value: '' }
            )
            .setImage('https://i.ibb.co/B3s3757/So-Vot-at-2.png')
            message.inlineReply(mensagem);
        }else if(variavel == "fat"){
            resultado = args[0] * args[1]
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Atrito')
            .addFields(
            { name: 'Valores', value: 'μ: '+args[0]+'\nNormal: ' + args[1]+'N\nFat = '+ resultado+'N'},
            )
            message.inlineReply(mensagem);
        }
    }
}