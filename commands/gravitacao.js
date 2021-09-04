Discord = require("discord.js");

module.exports = {
    grav: async function grav(message, args, variavel) {
        if(args.length === 0 && variavel == " "){
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Gravitação Universal')
            .setDescription('A lei da gravitação universal afirma que, se dois corpos possuem massa, ambos estão submetidos a uma força de atração mútua proporcional às suas massas e inversamente proporcional ao quadrado da distância que separa seus centros de gravidade.')
            .setImage('https://i.ibb.co/nkrLxf4/Fg-G-m1-m2-2.pnghttps://i.ibb.co/nkrLxf4/Fg-G-m1-m2-2.png')
            message.inlineReply(mensagem);
        }else if(variavel == "f"){
            const G = 6.67408*10**-11 
            resultado = G*args[0]*args[1]/args[2]**2
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Gravitação Universal')
            .addFields(
            { name: 'Valores', value: 'G: 6.67408x10^-11 N.kg²/m²\nM: '+args[0]+'kg\nm: ' + args[1]+'Kg\nd: '+ args[2]+'m\n\nEpg = '+ resultado+'N'},
            )
            message.inlineReply(mensagem);
        }else{
            const mensagem = new Discord.MessageEmbed() 
            .setColor('#dd2e44')
            .setTitle(`❌ Desculpe, mas acho que há algo de errado ❌`)
            .setDescription(
                'Talvez você tenha escrito algo errado, essa é a forma certa do comando: ```f.gravitação (incognita) valor1 ... valorN```'
            )
            .setFooter('Você pode consultar melhor as posições de cada variavel em: f.help formulas')
            reacao = await message.channel.send(mensagem)
            reacao.react('<:x_vermelho:849389416413134858>') 
        }
    }
}