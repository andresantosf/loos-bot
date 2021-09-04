const Discord = require("discord.js");

module.exports = {
    carteira: async function carteira(database,message){
      database.ref(`Servidor/money/813217169184653333/${message.author.id}`)
      .once('value').then(async function(db){
        let name = message.member.user.tag.slice(0,  message.member.user.tag.length - (message.member.user.tag.length - message.member.user.tag.indexOf('#')))
          
      const mensagem = new Discord.MessageEmbed() 
      .setColor('#94c276')
      .setTitle(":dollar:  Carteira  :dollar:")
      .setThumbnail("https://i.ibb.co/8sMJK21/gato.png")
      .setDescription(`Você tem **${db.val().money}** SchrodCoins!`)
      .setFooter(name,message.member.user.displayAvatarURL())
     
      reacao = await message.channel.send(mensagem)
      reacao.react('❎');
      message.delete()
    })
    }
}