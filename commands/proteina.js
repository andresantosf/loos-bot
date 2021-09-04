Discord = require("discord.js");

module.exports = {
    proteina: async function proteina(message) {
        const mensagem = new Discord.MessageEmbed()
        .setColor('#8A2BE2')
        .setTitle('proteina')
        .setDescription('Proteínas são macromoléculas biológicas constituídas por uma ou mais cadeias de aminoácidos. As proteínas estão presentes em todos os seres vivos e participam em praticamente todos os processos celulares, desempenhando um vasto conjunto de funções no organismo, como a replicação de ADN, a resposta a estímulos e o transporte de moléculas. Muitas proteínas são enzimas que catalisam reações bioquímicas vitais para o metabolismo. As proteínas têm também funções estruturais ou mecânicas, como é o caso da actina e da miosina nos músculos e das proteínas no citoesqueleto, as quais formam um sistema de andaimes que mantém a forma celular. Outras proteínas são importantes na sinalização celular, resposta imunitária e no ciclo celular. As proteínas diferem entre si fundamentalmente na sua sequência de aminoácidos, que é determinada pela sua sequência genética e que geralmente provoca o seu enovelamento numa estrutura tridimensional específica que determina a sua atividade.')
        .setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Myoglobin.png/220px-Myoglobin.png')
        message.inlineReply(mensagem);
    }
}