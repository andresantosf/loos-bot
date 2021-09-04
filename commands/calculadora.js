Discord = require("discord.js");

module.exports = {
  calc: async function calc(message, args_s, reply) {
    resultado = ''   
    try{
    args_s.forEach(arg => {

      if(arg.indexOf("x")>-1){
        arg = arg.replace(/x/g,"*");
      }
      
      if(arg.indexOf("×")>-1){
        arg = arg.replace(/×/g,"*");
      }

      if(arg.indexOf("÷")>-1){
        arg = arg.replace(/÷/g,"/");
      }

      if(arg.indexOf("^")>-1){
        arg = arg.replace(/[@^]/g,"**");
      }

      if(arg.indexOf("elevado")>-1){
        arg = arg.replace(/elevado/g,"**");
      }

      if(arg.indexOf("a")>-1){
        arg = arg.replace(/a/g," ");
      }

      if(arg.indexOf("raiz")>-1){
        arg = arg.replace(/raiz/g,"Math.sqrt");
      }else if(arg.indexOf("r")>-1){
        arg = arg.replace(/r/g,"Math.sqrt");
      }
      if(arg.indexOf("√")>-1){
        arg = arg.replace(/√/g,"Math.sqrt");
      }

      resultado += arg 
    });
      const mensagem = new Discord.MessageEmbed()
      .setColor('#8A2BE2')
      .setTitle('Calculadora')
      .setDescription( 
        eval(resultado)
      )
    }catch(e){
      reply("Acho que escreveu algo errado, mas pode ser apenas a minha burrice... 😐")
    }

    reply(mensagem);
  }
}