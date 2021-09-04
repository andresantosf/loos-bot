Discord = require("discord.js");

module.exports = {
    epg: async function epg(message, args, variavel) {
        if(args.length === 0){
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Energia portencial gravitacional')
            .setDescription('Energia potencial gravitacional é a energia que o corpo possui devido a atração gravitacional da Terra.\n\nDesta forma, a energia potencial gravitacional depende da posição do corpo em relação a um nível de referência.')
            .setImage(' ')
            message.inlineReply(mensagem);
        }else if(variavel == "epg"){
            resultado = args[0]*args[1]*args[2]
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Energia potencial gravitacional')
            .addFields(
            { name: 'Valores', value: 'M: '+args[0]+'kg\nG: ' + args[1]+'m/s²\nH: '+ args[2]+'m\n\nEpg = '+ resultado+'J'},
            )
            message.inlineReply(mensagem);
        }else if(variavel == "m"){
            resultado = args[0]/(args[1]*args[2])
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Energia potencial gravitacional')
            .addFields(
            { name: 'Valores', value: 'Epg: '+args[0]+'J\nG: ' + args[1]+'m/s²\nH: '+ args[2]+'m\n\nM = '+ resultado+'kg'},
            )
            message.inlineReply(mensagem);
        }else if(variavel == "g"){
            resultado = args[0]/(args[1]*args[2])
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Energia potencial gravitacional')
            .addFields(
            { name: 'Valores', value: 'Epg: '+args[0]+'J\nM: ' + args[1]+'kg\nH: '+ args[2]+'m\n\nG = '+ resultado+'m/s²'},
            )
            message.inlineReply(mensagem);
        }else if(variavel == "h"){
            resultado = args[0]/(args[1]*args[2])
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Energia potencial gravitacional')
            .addFields(
            { name: 'Valores', value: 'Epg: '+args[0]+'J\nM: ' + args[1]+'kg\nG: '+ args[2]+'m/s²\n\nH = '+ resultado+'m'},
            )
            message.inlineReply(mensagem);
        }
    }
}