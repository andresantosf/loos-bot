Discord = require("discord.js");

module.exports = {
  juros: async function juros(message, args, variavel) {
    if(args.length === 0 && variavel == " "){
        const mensagem = new Discord.MessageEmbed()
        .setColor('#8A2BE2')
        .setTitle('Juros')
        .setDescription('Juro é a remuneração cobrada pelo empréstimo de dinheiro. É expresso como um percentual sobre o valor emprestado e pode ser calculado de duas formas: juros simples ou juros compostos. O juro pode ser compreendido como uma espécie de "aluguel" de dinheiro.')
        .setImage('https://i.ibb.co/dbX9vY7/M-2.png')
         message.inlineReply(mensagem);
      
      }else if(variavel == "simples"){
        resultado = args[0] + args[0] * (args[1]/100) * args[2]
        const mensagem = new Discord.MessageEmbed()
        .setColor('#8A2BE2')
        .setTitle('Juros simples')
        .addFields(
          { name: 'Valores', value: 'C: '+args[0]+'R$\nI: ' + args[1]+'%\nT: ' + args[2]+' meses\n\nJ = '+ resultado+' R$'},
        )
         message.inlineReply(mensagem);
      }else if(variavel == "compostos"){
        resultado = args[0] * (1 + args[1]/100) ** args[2] 
        const mensagem = new Discord.MessageEmbed()
        .setColor('#8A2BE2')
        .setTitle('Juros compostos')
        .addFields(
          { name: 'Valores', value: 'C: '+args[0]+'R$\nI: ' + args[1]+'%\nT: ' + args[2]+' meses\n\nJ = '+ resultado+' R$'},
        )
         message.inlineReply(mensagem);
      }else if(variavel == "compostos_v"){
        resultado = (1 + args[0]/100) ** args[1] 
        const mensagem = new Discord.MessageEmbed()
        .setColor('#8A2BE2')
        .setTitle('Juros compostos')
        .addFields(
          { name: 'Valores', value:'I: ' + args[0]+'%\nT: ' + args[1]+' meses\n\nJ = '+ resultado+' %'},
        )
         message.inlineReply(mensagem);
      }else{
        const mensagem = new Discord.MessageEmbed() 
        .setColor('#dd2e44')
        .setTitle(`❌ Desculpe, mas acho que há algo de errado ❌`)
        .setDescription(
            'Talvez você tenha escrito algo errado, essa é a forma certa do comando: ```f.juros (incognita) valor1 ... valorN```'
        )
        .setFooter('Você pode consultar melhor as posições de cada variavel em: f.help formulas')
        reacao = await message.channel.send(mensagem)
        reacao.react('<:x_vermelho:849389416413134858>') 
      }
    }
}