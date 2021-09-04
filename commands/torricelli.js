Discord = require("discord.js");

module.exports = {
    torricelli: async function torricelli(message, args, variavel) {
        if(args.length === 0 && variavel == " "){
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Formula de Torricelli')
            .setDescription('A Equação de Torricelli permite o cálculo da velocidade final de um corpo que esteja em Movimento Retilíneo Uniformemente Variado (MRUV) mesmo sem saber o intervalo de tempo em que percorreu.')
            .setImage('https://i.ibb.co/BfJtghW/V-2.png')
            message.inlineReply(mensagem);
        }else if(variavel == "v"){
            resultado = Math.sqrt(args[0]**2 + 2*args[1]*args[2])
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Torricelli')
            .addFields(
            { name: 'Valores', value: 'Vo: '+args[0]+'\na: ' + args[1]+'\nΔS: ' + args[2] + '\n\nV = '+ resultado},
            )
            message.inlineReply(mensagem);
        }else{
            const mensagem = new Discord.MessageEmbed() 
            .setColor('#dd2e44')
            .setTitle(`❌ Desculpe, mas acho que há algo de errado ❌`)
            .setDescription(
                'Talvez você tenha escrito algo errado, essa é a forma certa do comando: ```f.torricelli (incognita) valor1 ... valorN```'
            )
            .setFooter('Você pode consultar melhor as posições de cada variavel em: f.help formulas')
            reacao = await message.channel.send(mensagem)
            reacao.react('<:x_vermelho:849389416413134858>') 
        }
    }
}