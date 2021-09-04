Discord = require("discord.js");

module.exports = {
    mru: async function mru(message, args, variavel) {
        if(args.length === 0 && variavel == " "){
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Movimento Retilíneo Uniforme')
            .addFields(
            { name: 'MRU', value: 'Movimento Retilíneo Uniforme (MRU) é o movimento que ocorre com velocidade constante em uma trajetória reta. Desta forma, em intervalos de tempos iguais o móvel percorre a mesma distância.' },
            )
            .setImage('https://i.ibb.co/MPQ9KxH/S-Dist-ncia-Final-So-Dist-ncia-inicial-Vo-Velocidade-inicial-t-tempo-a-acelera-o-2.png')
            message.inlineReply(mensagem);
        }else if(variavel === "v"){
            resultado = args[0]/args[1]
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Movimento Retilíneo Uniforme ')
            .addFields(
            { name: 'Valores', value: 'D: '+args[0]+'m\nT: ' + args[1] + 's\n\nV = '+ resultado+'m/s'},
            )
            message.inlineReply(mensagem);
        }else if(variavel === "t"){
            resultado = args[0]/args[1]
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Movimento Retilíneo Uniforme ')
            .addFields(
            { name: 'Valores', value: 'D: '+args[0]+'m\nV: ' + args[1] + 'm/s\n\nT = '+ resultado+'s'},
            )
            message.inlineReply(mensagem);
        }else if(variavel === "s" || variavel === "d"){
            resultado = args[0]*args[1]
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Movimento Retilíneo Uniforme ')
            .addFields(
            { name: 'Valores', value: 'V: '+args[0]+'m/s\nT: ' + args[1] + 's\n\nD = '+ resultado+'m'},
            )
            message.inlineReply(mensagem);
        }else{
            const mensagem = new Discord.MessageEmbed() 
            .setColor('#dd2e44')
            .setTitle(`❌ Desculpe, mas acho que há algo de errado ❌`)
            .setDescription(
                'Talvez você tenha escrito algo errado, essa é a forma certa do comando: ```f.mru (incognita) valor1 ... valorN```'
            )
            .setFooter('Você pode consultar melhor as posições de cada variavel em: f.help formulas')
            reacao = await message.channel.send(mensagem)
            reacao.react('<:x_vermelho:849389416413134858>') 
        }
    }
}