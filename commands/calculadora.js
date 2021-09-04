Discord = require("discord.js");

module.exports = {
  calc: async function calc(message, args_s) {
    resultado = ''   
    console.log(args_s)
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
    message.lineReply(mensagem);
  }
}