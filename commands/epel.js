Discord = require("discord.js");

module.exports = {
    epel: async function epel(message, args, variavel) {
    if(args.length === 0){
        const mensagem = new Discord.MessageEmbed()
        .setColor('#8A2BE2')
        .setTitle('Energia portencial elástica')
        .setDescription('Energia potencial elástica é a energia associada as propriedades elásticas de uma mola.\n\nUm corpo possui a capacidade de produzir trabalho quando está ligado a extremidade comprimida ou esticada de uma mola.\n\nSendo assim, possui energia potencial, visto que o valor dessa energia depende da sua posição.')
        .setImage('https://i.ibb.co/YBtvtHp/Ec-3.png')
         message.inlineReply(mensagem);
      }else if(variavel == "epel"){
        resultado = args[0]*args[1]**2/2
        const mensagem = new Discord.MessageEmbed()
        .setColor('#8A2BE2')
        .setTitle('Energia Potencial Elástica')
        .addFields(
          { name: 'Valores', value: 'K: '+args[0]+'N/m\nx: ' + args[1]+'m\n\nEpel = '+ resultado+'J'},
        )
         message.inlineReply(mensagem);
      }else if(variavel == "k"){
        resultado = (args[0]*2)/(args[1]**2)
        const mensagem = new Discord.MessageEmbed()
        .setColor('#8A2BE2')
        .setTitle('Energia Potencial Elástica')
        .addFields(
          { name: 'Valores', value: 'Epel: '+args[0]+'J\nx: ' + args[1]+'m\n\nK = '+ resultado+'N/m'},
        )
         message.inlineReply(mensagem);
      }else if(variavel == "x"){
        resultado = Math.sqrt((args[0]*2)/args[1])
        const mensagem = new Discord.MessageEmbed()
        .setColor('#8A2BE2')
        .setTitle('Energia Potencial Elástica')
        .addFields(
          { name: 'Valores', value: 'Epel: '+args[0]+'J\nK: ' + args[1]+'N/m\n\nx = '+ resultado+'m'},
        )
         message.inlineReply(mensagem);
      }
  }
}