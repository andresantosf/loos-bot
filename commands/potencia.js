Discord = require("discord.js");

module.exports = {
    potencia: async function potencia(message, args, variavel) {
        if(args.length === 0 && variavel == " "){
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Potência')
            .setDescription('Potência é uma grandeza física escalar medida em watts (W). Pode ser definida como a taxa de realização de trabalho a cada segundo ou como o consumo de energia por segundo. O watt, unidade de potência do sistema internacional de unidades (SI), equivale a 1 joule por segundo.')
            .setImage('https://i.ibb.co/cg39CfK/P-W-1.png')
            message.inlineReply(mensagem);
        }else if(variavel == "p"){
            resultado = args[0]/args[1]
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Potência')
            .addFields(
            { name: 'Valores', value: 'W: '+args[0]+'J\nT: ' + args[1]+'s\n\nP = '+ resultado+'w'},
            )
            message.inlineReply(mensagem);
        }else if(variavel == "w"){
            resultado = args[0]*args[1]
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Potência')
    
            .addFields(
            { name: 'Valores', value: 'P: '+args[0]+'w\nT: ' + args[1]+'s\n\nW = '+ resultado+'J'},
            )
            message.inlineReply(mensagem);
        }else if(variavel == "t"){
            resultado = args[0]/args[1]
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Potência')
            .addFields(
            { name: 'Valores', value: 'P: '+args[0]+'w\nW: ' + args[1]+'J\n\nT = '+ resultado+'s'},
            )
            message.inlineReply(mensagem);
        }else{
            const mensagem = new Discord.MessageEmbed() 
            .setColor('#dd2e44')
            .setTitle(`❌ Desculpe, mas acho que há algo de errado ❌`)
            .setDescription(
                'Talvez você tenha escrito algo errado, essa é a forma certa do comando: ```f.potencia (incognita) valor1 ... valorN```'
            )
            .setFooter('Você pode consultar melhor as posições de cada variavel em: f.help formulas')
            reacao = await message.channel.send(mensagem)
            reacao.react('<:x_vermelho:849389416413134858>') 
        }
    }
}