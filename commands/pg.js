Discord = require("discord.js");

module.exports = {
    pg: async function pg(variavel, message, args) {
        Discord = require("discord.js");
        if(args.length === 0 && variavel == " "){
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('????')
            .setDescription('???')
            message.inlineReply(mensagem);
        }else if(variavel == "an"){
            resultado = args[0]*args[1]**(args[2]-1)
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('PG')
            .addFields(
            { name: 'Valores', value: 'a₁: '+args[0]+'\nq: ' + args[1]+'\nn: ' + args[2] + '\n\naₙ = '+ resultado},
            )
            message.inlineReply(mensagem);
        }else{
            const mensagem = new Discord.MessageEmbed() 
            .setColor('#dd2e44')
            .setTitle(`❌ Desculpe, mas acho que há algo de errado ❌`)
            .setDescription(
                'Talvez você tenha escrito algo errado, essa é a forma certa do comando: ```f.pg (incognita) valor1 ... valorN```'
            )
            .setFooter('Você pode consultar melhor as posições de cada variavel em: f.help formulas')
            reacao = await message.channel.send(mensagem)
            reacao.react('<:x_vermelho:849389416413134858>') 
        }
    }
}