Discord = require("discord.js");

module.exports = {
    trabalho: async function trabalho(message, args, variavel) {
        if(args.length === 0 && variavel == " "){
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Trabalho')
            .setDescription('Trabalho é uma grandeza física que mede a transferência ou a transformação da energia. A unidade de medida dessa grandeza escalar é o joule. Além disso, o trabalho que é exercido por uma força equivale à variação de energia cinética, bem como da energia potencial atribuída a um corpo ou sistema de corpos.')
            .setImage('https://i.ibb.co/pf6CPPH/Adicionar-um-t-tulo.jpg')
            message.inlineReply(mensagem);
        }else if(variavel == "w"){
            resultado = args[0]*args[1]
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Trabalho')
            .addFields(
            { name: 'Valores', value: 'F: '+args[0]+'N\nD: ' + args[1]+'m\n\nW = '+ resultado+'J'},
            )
            message.inlineReply(mensagem);
        }else if(variavel == "f"){
            resultado = args[0]/args[1]
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Trabalho')
            .addFields(
            { name: 'Valores', value: 'W: '+args[0]+'J\nD: ' + args[1]+'m\n\nF = '+ resultado+'N'},
            )
            message.inlineReply(mensagem);
        }else if(variavel == "d"){
            resultado = args[0]/args[1]
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Força')
            .addFields(
            { name: 'Valores', value: 'W: '+args[0]+'J\nF: ' + args[1]+'N\n\nD = '+ resultado+'m'},
            )
            message.inlineReply(mensagem);
        }else{
            const mensagem = new Discord.MessageEmbed() 
            .setColor('#dd2e44')
            .setTitle(`❌ Desculpe, mas acho que há algo de errado ❌`)
            .setDescription(
                'Talvez você tenha escrito algo errado, essa é a forma certa do comando: ```f.trabalho (incognita) valor1 ... valorN```'
            )
            .setFooter('Você pode consultar melhor as posições de cada variavel em: f.help formulas')
            reacao = await message.channel.send(mensagem)
            reacao.react('<:x_vermelho:849389416413134858>') 
        }
    }
}