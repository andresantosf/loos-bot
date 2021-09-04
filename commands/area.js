Discord = require("discord.js");

module.exports = {
    area: async function area(message, args, variavel) {
        Discord = require("discord.js");
        if(args.length === 0 && variavel == " "){
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('????')
            .setDescription('???')
            message.inlineReply(mensagem);
        }else if(variavel == "triângulo" || variavel == "triangulo"){
            resultado = args[0]*args[1]/2
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Área do Triângulo')
            .addFields(
            { name: 'Valores', value: 'B: '+args[0]+' cm\nH: ' + args[1] + ' cm\n\nA = '+ resultado+ " cm²"},
            )
            message.inlineReply(mensagem);
        }else if(variavel == "retangulo" || variavel == "retângulo"){
            resultado = args[0]*args[1]
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Área do Retângulo')
            .addFields(
            { name: 'Valores', value: 'B: '+args[0]+' cm\nH: ' + args[1] + ' cm\n\nA = '+ resultado +" cm²"},
            )
            message.inlineReply(mensagem);
        }else if(variavel == "circulo"){
            if(args.length == 2){
                pi = args[1]
            }else{
                pi = 3.1415
            }
            resultado = (args[0]*pi).toFixed(2)
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Área do Circulo')
            .addFields(
            { name: 'Valores', value: 'r: '+args[0]+' cm\n\nA = '+ resultado+' cm²'},
            )
            message.inlineReply(mensagem);
        }else if(variavel == "trapézio" || variavel == "trapezio"){
            resultado = ((args[0]+args[1])*args[2])/2
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Área do Trapézio')
            .addFields(
            { name: 'Valores', value: 'B: '+args[0]+' cm\nb: '+args[1]+' cm \nH: '+args[2]+' cm\n\nA = '+ resultado+' cm²'},
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