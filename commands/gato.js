const Discord = require("discord.js");

module.exports = {
    gato: async function gato(message){
        resultado = Math.floor(Math.random() * 2 );
        if(resultado == 1){
            const mensagem = new Discord.MessageEmbed() 
            .setColor('#8A2BE2')
            .setTitle('MIAU!')
            .setDescription(
                'Ele parece bem vivo...'
            )  
            .setImage(
                'https://i.ibb.co/89VswVX/baixados-1.png'
            )
            message.channel.send(mensagem);
        }else{
            const mensagem = new Discord.MessageEmbed() 
            .setColor('#8A2BE2')
            .setTitle('...')
            .setDescription(
                'Ele não me parece muito bem...'
            )  
            .setImage(
                'https://i.ibb.co/2dRK6qt/baixados-2.png'
            )
            reacao = await message.channel.send(mensagem);
            reacao.react('🇫')
        }
    }

}