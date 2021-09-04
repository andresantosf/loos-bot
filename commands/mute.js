Discord = require("discord.js");

module.exports = {
    mute: async function mute(message, variavel, args_s,client) {
        if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply('Sem permissão')
        else{
          try{
            if(variavel.indexOf('<')>-1){
              id = variavel.substr(3,18)
            }else{
              id = variavel
            }
    
            msg = await message.channel.send('<@!' + id + '>')
            msg.delete()
            
            membro = await message.guild.members.cache.get(id)
    
            var role = message.member.guild.roles.cache.find(role => role.name === "Silenciado");
            membro.roles.add(role);
    
            if(args_s.length == 0){
              const mensagem = new Discord.MessageEmbed() 
              .setColor('#ffc063')
              .setTitle(
                ":shushing_face: Shhhhhhhh..."
              )
              .setDescription(
                `${membro}`+ ' ficou mudo(a) por motivos desconhecidos...'
              )

              var channel = message.guild.channels.cache.get('832314192874307584');
              channel.send(mensagem);
            }else{
              var motivo = ''
              args_s.forEach(palavra => {
                motivo += palavra + ' '
              });

              motivo = motivo.charAt(0).toUpperCase() + motivo.slice(1)

              const mensagem = new Discord.MessageEmbed()
              .setColor('#ffc063')
              .setTitle(
                ":shushing_face: Shhhhhhhh..."
              )
              .setDescription(
                `${membro}`+ ' ficou mudo(a)'
              )
              .addFields(
                { name: 'Motivo: ', value: motivo},
              )

              var channel = message.guild.channels.cache.get('832314192874307584');
              channel.send(mensagem);
            }
    
          }catch(e){
            console.log(e)
            const mensagem = new Discord.MessageEmbed() 
            .setColor('#dd2e44')
            .setTitle(
              "❌ Parece que há algo de errado..."
            )
            .setDescription(
              "Lembrando: A forma certa do comando é `f.mute marcação/id`"
            )
            message.channel.send(mensagem);
          }
        }
    }
}