Discord = require("discord.js");

module.exports = {
    bhaskara: async function bhaskara(message, args, variavel) {
        if(args.length === 0){
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Bhaskara')
            .setDescription('A fórmula de Bhaskara é um método resolutivo para equações do segundo grau cujo nome homenageia o grande matemático indiano que a demonstrou. Essa fórmula nada mais é do que um método para encontrar as raízes reais de uma equação do segundo grau fazendo uso apenas de seus coeficientes. Vale lembrar que coeficiente é o número que multiplica uma incógnita em uma equação.')
            .setImage('https://i.ibb.co/TBh8YTK/X-1.png')
            message.inlineReply(mensagem);
        }else if(args[0]>0){
            var delta = args[1]**2-4*args[0]*args[2];
            var raiz1 = (-args[1] + Math.sqrt(delta))/(2*args[0])
            var raiz2 = (-args[1] - Math.sqrt(delta))/(2*args[0])
    
            if(delta<0){
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setDescription(
                'O valor referente a Δ é negativo, como a formula depende de um delta positivo, a equação não tem raizes reais.'
            )
            message.inlineReply(mensagem);
            }else{
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Bhaskara')
            .addFields(
                { name: 'Valores', value: 'a: '+args[0]+'\nb: ' + args[1]+'\nc: ' + args[2] + '\n\nraiz 1 = '+ raiz1+ '\n\nraiz 2 = '+ raiz2},
            )
            message.inlineReply(mensagem);
            }
        }else if(args[0]==0){
            var x = -args[2]/args[1]
    
            const mensagem = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Função de 1º grau: ')
            .setDescription('O valor referente a variavel **"a"**, é igual a 0, logo, essa equação não é do 2º grau:\n\nax² = 0x² = 0\n0 + '+args[1]+'x + '+ args[2] +'\n\nA raiz da função é '+ x
            )
            message.inlineReply(mensagem);
            
        }
    }
}