function elevado(potencias, message_lower, message, reply){
  Object.keys(potencias).forEach(potencia => {
      if(message_lower.indexOf(potencia)>-1){ 
          try{
            let base_potencia = message_lower;
          
            function encontrar_numeros(){
              if(base_potencia.indexOf("?")>-1){
                base_potencia = base_potencia.replace('?',"");
              }

              for (var i = 0; i < base_potencia.length; i++) {
                var chracter = base_potencia.charAt(i);
                    if((!isNaN(chracter) || chracter == '-') && chracter !== " "){
                      base_potencia = base_potencia.slice(base_potencia.indexOf(chracter)).split(/ +/g);
                    }
              }
              return parseInt(base_potencia)
            }
            base_potencia = encontrar_numeros()

            if(isNaN(base_potencia)){
              const response = new Discord.MessageEmbed()
              .setColor('#8A2BE2')
              .setTitle('Erro')
              .setDescription( 
                `O que quer que eu calcule mesmo? Acho que digitou algo errado.`
              )
              reply(response);
              return
            }
            
            pot = potencias[potencia]
            resultado = Math.pow(base_potencia,pot) 

            const response = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
            .setTitle('Calculadora')
            .setDescription( 
              `**${base_potencia}**^**${pot}** = **${resultado}**`
            )
            reply(response);

          }catch(e){
            console.log(e)
          }
      }
  });
}

module.exports = elevado;