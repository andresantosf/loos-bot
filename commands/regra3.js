const Discord = require("discord.js");
module.exports = {
    regra:async function regra(message, variable, args){
        if(variable == 'p'){
            console.log(args)
            if (args[0] == 'x'){
                x = args[1]*args[2]/args[3]
            }else if(args[1] == 'x'){
                x = args[0]*args[3]/args[2]
            }else if(args[2] == 'x'){
                x = args[0]*args[3]/args[1]
            }else if(args[3] == 'x'){
                x = args[1]*args[2]/args[0]
            }
            
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Regra de 3')
            .addFields(
            { name: args[0], value: '⠀\n**'+args[2]+'**', inline: true },
            { name: '⠀', value: '❌' , inline: true},
            { name: args[1], value: '⠀\n**'+args[3]+'**', inline: true },
            { name: '⠀', value: 'x = ' + x.toFixed(2)},
            )
                
            message.inlineReply(mensagem);
        }else if(variable == 'i'){
                console.log(args)
                if (args[0] == 'x'){
                    x = args[2]*args[3]/args[1]
                }else if(args[1] == 'x'){
                    x = args[2]*args[3]/args[0]
                }else if(args[2] == 'x'){
                    x = args[0]*args[1]/args[3]
                }else if(args[3] == 'x'){
                    x = args[0]*args[1]/args[2]
                }
                
                const mensagem = new Discord.MessageEmbed()
                .setColor('#8A2BE2')
                .setTitle('Regra de 3')
                .addFields(
                { name: args[0], value: '⠀\n**' + args[2] + "**", inline: true },
                { name: '---', value: '⠀\n** ---**' , inline: true},
                { name: args[1], value: '⠀\n**' + args[3] + "**" , inline: true },
                { name: '⠀', value: 'x = ' + x.toFixed(2)},
                )
                    
                message.inlineReply(mensagem);
        }
    }
}