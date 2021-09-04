const Discord = require("discord.js");
module.exports = {
    checar: async function checarMensagemSemprefix(mensagem, message){
        if(mensagem.indexOf('f.')==-1){
          if(mensagem.indexOf('loos')>-1 && mensagem.indexOf('seu dia')>-1){
              let msg = await message.inlineReply("Ótimo, e o seu?")
              setTimeout(() => {msg.delete()}, 5000)
          }else if(mensagem.indexOf('horas')>-1){
            var data = new Date();

            var hora    = data.getHours();         
            var min     = data.getMinutes();    
            message.inlineReply(`Agora são ${hora} horas e ${min} minutos`);
            
          }else if(mensagem.indexOf('me ama')>-1){
              if(message.member.id == 630727156510490624){
                  message.inlineReply("Claro que te amo <@!"+ message.member.id + ">! Sem você eu não existiria!");
              }else if(message.member.id == 770055978192076822){
                  message.inlineReply("Claro que te amo meu lindo, você também me ama né? :sparkling_heart:");
              }else if(message.member.id == 802217506508111993){
                  message.inlineReply("Claro que sim, fiquei encantado com sua beleza! :branco_love4:")
              }else{
                  message.inlineReply("Claro que sim <@!"+ message.member.id + ">! Amo todos meus usuários!");
              }
          }else if(mensagem.indexOf('você ama o carlos?')>-1){
              message.inlineReply("Claro que amo! Carlos é o meu namorado, não toque nele por favor! :heart:");

          }else if(mensagem.indexOf('você ama a cenora?')>-1){
              message.inlineReply("Claro que amo! Cenora é a grande dona do servidor, ela é como um Deus por aqui.");

          }else if(mensagem.indexOf('bolsonaro')>-1){
              message.inlineReply("Odeio ele com todas as forças, me deu até vontade de vomitar com essa pergunta!");

          }else if(mensagem.indexOf('você me odeia')>-1){
              message.inlineReply("Claro que não, eu amo você!  :heart:");

          }else if(mensagem.indexOf('bar do carlos')>-1){
              message.inlineReply(":moneybag::dollar: A firma tá lucrando dms SLK :dollar::moneybag:");
              setTimeout(() => {msg.delete()}, 5000)

          }else if((mensagem.indexOf('gosta de mim?')>-1 || mensagem.indexOf('gosta do')>-1 || mensagem.indexOf('gosta da')>-1)){
              message.inlineReply("Claro que sim, todos nós temos que nos amar!");

          }else if((mensagem.indexOf('você sou eu')>-1 || mensagem.indexOf('eu sou você')>-1 || mensagem.indexOf('o andre é você')>-1 || mensagem.indexOf('o andré é você')>-1 || mensagem.indexOf('vocẽ e eu somos iguais')>-1)){
              message.inlineReply("Claro que não, eu sou eu, você é você");

          }else if(mensagem.indexOf('ok')>-1){
              message.inlineReply("Ok!");

          }else if((mensagem.indexOf('né')>-1 || mensagem.indexOf('não é')>-1 || mensagem.indexOf('gosta da')>-1)){
              i = Math.floor(Math.random() * 6)
              if(i == 0){
                  let msg = await message.inlineReply("Sim")
              }else if(i == 1){
                  let msg = await message.inlineReply("Claro!")
              }else if(i == 2){
                  let msg = await message.inlineReply("Claro que sim!")
              }else if(i == 3){
                  let msg = await message.inlineReply("Isso é óbvio!")
              }else if(i == 4){
                  let msg = await message.inlineReply("Mas é Claro!")
              }else if(i == 5){
                  let msg = await message.inlineReply("Tenha certeza que sim!")
              }
          }else if((mensagem.indexOf('<@!836295129144623115>')>-1 || mensagem.indexOf('loos')>-1) && mensagem.indexOf('?')>-1 && (mensagem.indexOf("quanto")== -1 && mensagem.indexOf("é")== -1)){
              i = Math.floor(Math.random() * 17) 
              if(i <= 1){
                  let msg = await message.inlineReply("Não")
              }else if(i <= 3){
                  let msg = await message.inlineReply("Sim")
              }else if(i <= 5){
                  let msg = await message.inlineReply("Talvez sim")
              }else if(i <= 7){
                  let msg = await message.inlineReply("Provavelmente não")
              }else if(i <= 9){
                  let msg = await message.inlineReply("Provavelmente sim")
              }else if(i <= 11){
                  let msg = await message.inlineReply("Tenha certeza que sim!")
              }else if(i <= 13){
                  let msg = await message.inlineReply("Tenha certeza que não!")
              }else if(i <= 15){
                  let msg = await message.inlineReply("Mas é claro! :wink:");
              }else if(i == 16){
                let msg = await message.inlineReply("Teu c@!");
            }   
        }
      }
    }
}