Discord = require("discord.js");

module.exports = {
    mruv: async function mruv(message, args, variavel) {
        if(args.length === 0 && variavel == " "){
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Movimento Retilíneo Uniformemente Variado')
            .addFields(
            { name: 'MRUV', value: 'O Movimento Retilíneo Uniformemente Variado (MRUV) é aquele que é realizado em linha reta, por isso é chamado de retilíneo. Além disso, apresenta variação de velocidade sempre nos mesmos intervalos de tempo. Uma vez que varia da mesma forma, o que revela constância, o movimento é chamado de uniformemente variado.' }
            )
            .setImage('https://i.ibb.co/B3s3757/So-Vot-at-2.png')
            message.inlineReply(mensagem);
        }else if(variavel == "s" || variavel == "d"){
            resultado = args[0] + args[1]*args[2]+(args[3]*args[2]**2)/2
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Movimento Retilíneo Uniformemente Variado')
            .addFields(
            { name: 'Valores', value: 'So: '+args[0]+'m\nVo: ' + args[1]+'m/s\nt: ' + args[2]+'s\na: ' + args[3] + 'm/s²\n\nS = '+ resultado+'m'},
            )
            message.inlineReply(mensagem);
        }else if(variavel == "t"){
            resultado = args[0]/args[1]
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Movimento Retilíneo Uniformemente Variado')
            .addFields(
            { name: 'Valores', value: 'ΔV: '+args[0]+'m/s\na: ' + args[1] +  'm/s²\n\nt = '+ resultado+'s'},
            )
            message.inlineReply(mensagem);
        }else{
            const mensagem = new Discord.MessageEmbed() 
            .setColor('#dd2e44')
            .setTitle(`❌ Desculpe, mas acho que há algo de errado ❌`)
            .setDescription(
                'Talvez você tenha escrito algo errado, essa é a forma certa do comando: ```f.mruv (incognita) valor1 ... valorN```'
            )
            .setFooter('Você pode consultar melhor as posições de cada variavel em: f.help formulas')
            reacao = await message.channel.send(mensagem)
            reacao.react('<:x_vermelho:849389416413134858>') 
        }
    }
}