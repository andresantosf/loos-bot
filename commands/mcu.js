Discord = require("discord.js");

module.exports = {
    mcu: async function mcu(message, args, variavel) {
       
        if(variavel == "a" ){
            if(args.length === 0 && variavel == " "){
                const mensagem = new Discord.MessageEmbed()
                .setColor('#8A2BE2')
                .setTitle('Aceleração centripeta')
                .setDescription('Em física, aceleração centrípeta, também chamada de aceleração normal ou radial, é a aceleração originada pela variação da direção do vetor velocidade de um móvel, característico de movimentos curvilíneos ou circulares. Ela é perpendicular à velocidade e aponta para o centro da curvatura da trajetória.')
                .setImage('https://i.ibb.co/q5rdSLZ/Inserir-um-t-tulo-3.png')
                message.inlineReply(mensagem);
            }else{
                resultado = args[0]**2/args[1]
                const mensagem = new Discord.MessageEmbed()
                .setColor('#8A2BE2')
                .setTitle('Aceleração centripeta')
                .addFields(
                { name: 'Valores', value: 'v: '+args[0]+'m/s\nr: ' + args[1]+'m\n\nacp = '+ resultado+'m/s²'},
                )
                message.inlineReply(mensagem);
            }
        }else if(variavel == "v"){
            resultado = Math.sqrt(args[0]*args[1])
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Aceleração centripeta')
            .addFields(
            { name: 'Valores', value: 'a: '+args[0]+'m/s²\nr: ' + args[1]+'m\n\nv = '+ resultado+'m/s'},
            )
            message.inlineReply(mensagem)
            ;
        }else if(variavel == "r"){
            resultado = args[0]**2/args[1]
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Aceleração centripeta')
            .addFields(
            { name: 'Valores', value: 'v: '+args[0]+'m/s\na: ' + args[1]+'m/s²\n\nr = '+ resultado+'m'},
            )
            message.inlineReply(mensagem)
            ;
        }else if(variavel == "s"){
            if(args.length === 0){
                const mensagem = new Discord.MessageEmbed()
                .setColor('#8A2BE2')
                .setTitle('Deslocamento no movimento circular')
                .setDescription('')
                .setImage('https://i.ibb.co/9hSF9Dy/R.png')
                message.inlineReply(mensagem);
            }else{
                for(let i = 0; i < 1 ; i++){
                    if(isNaN(args[i])){
                        if(args[i].indexOf('π')>-1){
                            args[i] = args[i].replace('π', "180") 
                            console.log(args[i])
                        }
                    }
                }
                resultado = eval(args[0])*args[1]
                const mensagem = new Discord.MessageEmbed()
                .setColor('#8A2BE2')
                .setTitle('Deslocamento')
                .addFields(
                { name: 'Valores', value: 'Δθ: '+eval(args[0])+'º\nr: ' + args[1]+'m\n\n ΔS = '+ resultado+'m'},
                )
                message.inlineReply(mensagem);
            }  
        }else{
            const mensagem = new Discord.MessageEmbed() 
            .setColor('#dd2e44')
            .setTitle(`❌ Desculpe, mas acho que há algo de errado ❌`)
            .setDescription(
                'Talvez você tenha escrito algo errado, essa é a forma certa do comando: ```f.mcu (incognita) valor1 ... valorN```'
            )
            .setFooter('Você pode consultar melhor as posições de cada variavel em: f.help formulas')
            reacao = await message.channel.send(mensagem)
            reacao.react('<:x_vermelho:849389416413134858>') 
        }
    }
}