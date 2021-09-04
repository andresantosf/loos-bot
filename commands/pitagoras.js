Discord = require("discord.js");

module.exports = {
    pitagoras: async function pitagoras(message, args, variavel) {
        if(args.length === 0 && variavel == " "){
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Teorema de Pitágoras')
            .setDescription('O teorema de Pitágoras diz que o quadrado da hipotenusa é igual à soma dos quadrados dos catetos. Podemos utilizar esse teorema para facilitar o cálculo da diagonal de um quadrado e altura de um triângulo equilátero (triângulo com os lados iguais).')
            .setImage('https://i.ibb.co/QkDzcvY/Inserir-um-t-tulo.png')
            message.inlineReply(mensagem);
        }else if(variavel == "a"){
            resultado = Math.sqrt(args[0]**2 + args[1]**2)
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Teorema de Pitágoras')
            .addFields(
            { name: 'Valores', value: 'b: '+args[0]+'\nc: ' + args[1]+'\n\na = '+ resultado},
            )
            message.inlineReply(mensagem);
        }else if(variavel == "b"){
            resultado = Math.sqrt(args[0]**2 - args[1]**2)
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Teorema de Pitágoras')
            .addFields(
            { name: 'Valores', value: 'a: '+args[0]+'\nc: ' + args[1]+'\n\nb = '+ resultado},
            )
            message.inlineReply(mensagem);
        }else if(variavel == "c"){
            resultado = Math.sqrt(args[0]**2 - args[1]**2)
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Teorema de Pitágoras')
            .addFields(
            { name: 'Valores', value: 'a: '+args[0]+'\nb: ' + args[1]+'\n\nc = '+ resultado},
            )
            message.inlineReply(mensagem);
        }else{
            const mensagem = new Discord.MessageEmbed() 
            .setColor('#dd2e44')
            .setTitle(`❌ Desculpe, mas acho que há algo de errado ❌`)
            .setDescription(
                'Talvez você tenha escrito algo errado, essa é a forma certa do comando: ```f.pitagoras (incognita) valor1 ... valorN```'
            )
            .setFooter('Você pode consultar melhor as posições de cada variavel em: f.help formulas')
            reacao = await message.channel.send(mensagem)
            reacao.react('<:x_vermelho:849389416413134858>') 
        }
    }
}