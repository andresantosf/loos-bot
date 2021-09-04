Discord = require("discord.js");

module.exports = {
    forca: async function forca(message, args, variavel) {
        if(args.length === 0){
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Força')
            .setDescription('Força  é uma grandeza que tem a capacidade de vencer a inércia de um corpo, modificando-lhe a velocidade.')
            .setImage('https://i.ibb.co/ScwbMzS/P-W-3.png')
            message.inlineReply(mensagem);
        }else if(variavel == "f"){
            resultado = args[0]*args[1]
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Força')
            .addFields(
            { name: 'Valores', value: 'M: '+args[0]+'kg\nA: ' + args[1]+'m/s²\n\nF = '+ resultado+'N'},
            )
            message.inlineReply(mensagem);
        }else if(variavel == "m"){
            resultado = args[0]/args[1]
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Força')
            .addFields(
            { name: 'Valores', value: 'F: '+args[0]+'N\nA: ' + args[1]+'m/s²\n\nM = '+ resultado+'kg'},
            )
            message.inlineReply(mensagem);
        }else if(variavel == "a"){
            resultado = args[0]*args[1]
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Força')
            .addFields(
            { name: 'Valores', value: 'F: '+args[0]+'N\nM: ' + args[1]+'kg\n\nA = '+ resultado+'m/s²'},
            )
            message.inlineReply(mensagem);
        }
    }
}