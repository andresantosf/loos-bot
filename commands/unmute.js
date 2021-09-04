Discord = require("discord.js");

module.exports = {
    unmute: async function unmute(message, variavel) {
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
            membro.roles.remove(role);

            const mensagem = new Discord.MessageEmbed() 
            .setColor('#ffc063')
            .setTitle(
            "<:vermelho_erza_nom:831995047976763502> Eu gostava mais de quando ele(a) estava calado(a), mas já que pediu..."
            )
            .setDescription(
            `${membro}`+ ' foi curado(a) por motivos desconhecidos...'
            )
            message.channel.send(mensagem);

        }catch(e){
            console.log(e)
            const mensagem = new Discord.MessageEmbed() 
            .setColor('#dd2e44')
            .setTitle(
            "❌ Parece que há algo de errado..."
            )
            .setDescription(
            "Lembrando: A forma certa do comando é `f.unmute marcação/id`"
            )
            message.channel.send(mensagem);
        }
    }
}