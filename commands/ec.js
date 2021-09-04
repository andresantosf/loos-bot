Discord = require("discord.js");

module.exports = {
    ec: async function ec(message, args, variavel) {
        if(args.length === 0){
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Energia cinética')
            .setDescription('A energia cinética é a energia associada ao movimento dos corpos. Do grego o termo "cinética" significa "movimento".\n\nQualquer corpo em movimento é capaz de realizar trabalho, portanto, possui energia, que neste caso é chamada de cinética.\n\nA unidade da energia cinética, no sistema internacional, é medida em Joule (J), em homenagem ao cientista inglês James Prescott Joule (1818-1889).')
            .setImage('https://i.ibb.co/fMj9pYQ/Ec-1.png')
            message.inlineReply(mensagem);
        }else if(variavel == "ec"){
            resultado = (args[0]*args[1]**2)/2
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Energia cinética')
            .addFields(
            { name: 'Valores', value: 'M: '+args[0]+'kg\nV: ' + args[1]+'m/s\n\nEc = '+ resultado+'J'},
            )
            message.inlineReply(mensagem);
        }else if(variavel == "m"){
            resultado = (args[0]*2)/args[1]**2
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Energia cinética')
            .addFields(
            { name: 'Valores', value: 'Ec: '+args[0]+'J\nV: ' + args[1]+'m/s\n\nM = '+ resultado+'Kg'},
            )
            message.inlineReply(mensagem);
            }else if(variavel == "v"){
            resultado = Math.sqrt(args[0]*2/args[1])
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Energia cinética')
            .addFields(
                { name: 'Valores', value: 'Ec: '+args[0]+'J\nM: ' + args[1]+'Kg\n\nV = '+ resultado+'m/s'},
            )
            message.inlineReply(mensagem);
        }
    }
}