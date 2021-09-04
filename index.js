//const keepAlive = require('./server.js');
	 
//keepAlive();
const Discord = require("discord.js");
require('discord-reply')
const client = new Discord.Client();
const config = require("./config.json")

const configFirebase = require("./configs/firebaseConfig.js") //SE NÃO FOR USAR ESSA BOSTA TIRA DPS
configFirebase.config()
const firebase = require("firebase");
const database = firebase.database(); //ATÉ AQUI

const { checar } = require("./commands/semprefixComNome");
const torricelli = require("./commands/torricelli");


const emojis_apagar_mensagem = [
  "x_roxo",
  "x_laranja",
  "x_vermelho",
  "❎"
]

var potencias = {
  "quadrado": 2,
  "cubo": 3,
  "terceira": 3,
  "quarta": 4,
  "quinta": 5,
  "sexta": 6,
  "sétima": 7,
  "oitava": 8,
  "nona": 9,
  "décima": 10,
}

const id_mestre = 630727156510490624;
const canal_de_musicas = 813218525266968616; //Apenas para uma funcionalidade de um servidor específico

client.on("ready", () => {
  console.log(`O bot foi iniciado em ${client.guilds.cache.size} servidores.`);
  client.user.setActivity('f.help', { type: 'PLAYING' });(`Eu estou em ${client.guilds.cache.size} servidores`);
});

client.on("guildCreate", guild => {
  console.log(`O bot entrou no servidor: ${guild.name} (ID do servidor: ${guild.id}). Membros: ${guild.memberCount} membros!`);
});

client.on("guildDelete", guild => {
    console.log(`O bot foi removido do servidor: ${guild.name} (ID do servidor: ${guild.id})`);
});

client.on('messageReactionAdd', async (reaction, user) =>{ 
  if(user.bot) {
    return
  }
  var emoji_usado = reaction.emoji.name
  
  if(emojis_apagar_mensagem.indexOf(emoji_usado)>-1 && reaction.message.author.bot){
    reaction.message.delete()
  }
})

client.on("message", async message => {
  function inMessage(message, words){
    all_words_in_string = true;
    words.forEach(word => {
      if(message.indexOf(word)==-1){
        all_words_in_string = false;
        return;
      }
    });

    return all_words_in_string;
      
  }
  function reply(msg){
    message.lineReply(msg);
  }

  var channel = message.channel
  var author = message.author
  var message_content = message.content
  var message_lower = message.content.toLocaleLowerCase()
  var mensagem = message_content; //Isso aqui é só pra ele n quebrar, tira dps

  if(channel.id == canal_de_musicas && message.content.indexOf("fix")==-1){
    setTimeout(() =>{
      message.delete()
    },1000 * 30)
  }

  if(author.bot) return; 

  //if(message.member.id !== "id_mestre") return; //Para Debug
  
  if(channel.type == "dm") {
    const mensagem = new Discord.MessageEmbed() 
    .setColor('#dd2e44')
    .setTitle(
      "❌ Foi mal cara, você não pode executar comandos no chat privado ❌"
      ) 
      author.send(mensagem)
    return;
  }

  elevar = require("./commands/elevado")
  elevar(potencias, message_lower, message, reply)

  if(inMessage(message_lower, ["quanto", "loos"])){ 
    let conta = message_lower;

    if(conta.indexOf("?")>-1){
      conta = conta.replace('?',"");
    }

    for(i = 0; i < conta.length; i++){
      char = conta.charAt(i)
      if((!isNaN(char) || char == '-' || char == '+'|| char =='√') && char !== " "){
        conta = conta.slice(conta.indexOf(char)).split(/ +/g);
        return;
      }
    }

    calculadora = require("./commands/calculadora")
    calculadora.calc(message, conta, reply)
     
  }else if(mensagem.indexOf("raiz")>-1 && mensagem.indexOf("loos")>-1){ 
    try{
      let conta = message_lower;
      if(args.indexOf("?")>-1){
        args = args.replace('?',"");
      }
      function cortar(){
        try{
          for(i = 0; i < args.length; i++){
            a = args.charAt(i)
            if((!isNaN(a) || a == '-') && a !== " "){
              args = args.slice(args.indexOf(a)).split(/ +/g);
            }
          }
        
        }catch(e){
          console.log(e)
        }
        return args
      }
      args = parseInt(cortar())

      resul = Math.sqrt(args)

      const mensagem = new Discord.MessageEmbed()
      .setColor('#8A2BE2')
      .setTitle('Calculadora')
      .setDescription( 
        `√**${args}** = **${resul}**`
      )
      reply(mensagem);

      }catch(e){
        console.log(e)
      }
      
    }
  const dbupdate = require('./configs/dbupdate')
  dbupdate.update(database, message)

  if(channel.id == "883390802980646912" && message.attachments.size>0){
    message.react('⭐')  
  }

  if(!message.content.startsWith(config.prefix)) return;
  
  const args_s = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const args = []
  const comando = args_s.shift().toLowerCase();
  var resultado = 0
  var variavel = " "
  if(!args_s.length == 0 && comando !== "bhaskara" && comando !== "addg" && comando !== "todo" && comando !== "doing" && comando !== "done" && comando !== "calc" && comando !== "report" && comando !== "sugestão" && comando !== "sugestao" && comando !== "sugerir" &&comando !== "bilhete" && comando !== "einstein" && comando !== "say" && comando !== "daily" && comando !== "carteira"){
    variavel = args_s.shift().toLowerCase();
  }
  for(let i = 0; i<args_s.length;i++){
    if(!isNaN(args_s[i]) && comando !== "calc"){
      args[i] = parseFloat(args_s[i])
    }else if(args_s[i].indexOf('π')>-1){
      args[i] = args_s[i]
      args[i] = args[i].replace('π', "π")
    }
  }

  class background{
    constructor(link,value){
      this.link = link
      this.value = value
    }
  }
  
  //Comandos==================================================================================================================================
  if(comando === "servidores"){
    console.log(client.guilds.name)
  }
 
  if(comando === "mute"){
  }else if(comando === 'zerotwo'){
    channel.send('<a:rosa_Hyped_ZeroTwo:831994347011702836>')
    message.delete()

  }else if(comando === "say"){
    let say = require("./commands/say.js");
    say.say(args_s,message)

  }else if(comando === "sugestão"||comando === "sugestao"||comando === "sugerir"){
    text = ""
    console.log(args_s)
    if(args_s == ""){
      reply("Ei, você precisa escrever a sugestão!")
    }else{
      args_s.forEach((arg) =>{
        text += arg + " "
      })
      var data = new Date();
      message.delete()

      const mensagem = new Discord.MessageEmbed() 
      .setColor('#8A2BE2')
      .setTitle(`<:botoequerda:849727080274591774>  Sugestão  <:botodireita:849728415468093490>`)
      .setDescription(
        `${text}`
      )
      .setFooter(`${message.member.user.tag.slice(0,  message.member.user.tag.length - (message.member.user.tag.length - message.member.user.tag.indexOf('#')))} às ${data.getHours()-3}:${data.getMinutes()}`,message.member.user.displayAvatarURL())
      msg = await channel.send(mensagem)
      msg.react('✅')  
      msg.react('<:x_vermelho2:851453975937286146>')  
    }
  } else if(comando === "avatar"){ 
    if(variavel == " "){
      channel.send(message.member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
    }else if(variavel.indexOf('<')>-1){
      id = variavel.substr(3,18)
      console.log(id)
      membro = await client.users.fetch(id)
      channel.send(membro.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
    }else{
      membro = await client.users.fetch(variavel)
      console.log(membro)
      channel.send(membro.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
    }
  }else if(comando === "help"){ 
    if(variavel === " "){
      const mensagem = new Discord.MessageEmbed() 
      .setColor('#8A2BE2')
      .setTitle('Comandos')
      .setDescription(
        "Acesse [ajuda](https://andrefreitassantos.github.io/loos/) para ver a lista de comandos, ou use um dos tópicos abaixo após o comando help para acessar sua respectiva página\n`Conceitos \\ Formulas \\ Calculadora`\n Se quiser me adicionar no seu servidor este é o meu link: \n[Me adicione](https://url.gratis/G8OJhZ)"
      )
      .setImage(
        url = "https://media.discordapp.net/attachments/837345672578859008/849667184217292803/mp4-_1_.gif"
      )
      author.send(mensagem).catch(async function(){
        reaction = await channel.send(mensagem);
        reaction.react('<:x_roxo:849399779019718676>');
      });
      message.react('✅')  
    }else if(variavel === "conceitos"){
      const mensagem = new Discord.MessageEmbed() 
      .setColor('#8A2BE2')
      .setTitle('Conceitos')
      .setDescription(
        'Você pode ler conceitos usando `f.formula`, sendo as formulas registradas: \n\n`Bhaskara` \n`MRU`'+'- Movimento Retilíneo Uniforme  \n'+ '`MRUV`'+'- Movimento Retilíneo Uniformemente Variado  \n'+ '`Torricelli`\n'+ '`Ec`'+'- Energia Cinética\n'+ '`Epc`'+'- Energia Potencial Gravitacional\n'+ '`Epel`'+'- Energia Potencial Elástica\n'+ '`Força`\n'+ '`Potencia`\n'+ '`Trabalho`\n'
      )  
      channel.send(mensagem);
       message.delete()
    }else if(variavel === "formulas"){
      let formulas = require("./commands/formulas.js");

      const help = new Discord.MessageEmbed() 
      .setColor('#8A2BE2')
      .setTitle('Formulas')
      .setDescription(
        'Você pode resolver equações usando `f.formula incognita valor1...valorN` \n(Ex: f.mruv s 0 0 10 2)'
      )  
      .addFields(
        {name:"Bhaskara", value:`f.bhaskara A B C\n\n---------------------------------------`}
      )
  
      .addFields(
        {name: "Movimento Retilíneo Uniforme",value:`f.mru d V T\n\nf.mru v D T\n\nf.mru t D V\n\n---------------------------------------`}
      )
  
      .addFields(
        {name:"Movimento Retilíneo Uniformemente Variado",value:`f.mruv s So Vo T A \n\nf.mruv t ΔV A\n\n---------------------------------------`}
      )
      
      .setFooter(
        "Página 1/3"
      )
  
      reacao = await reply(help);
      reacao.react('<:botoequerda:849727080274591774>');
      reacao.react('<:x_roxo:849399779019718676>');
      reacao.react('<:botodireita:849728415468093490>');

      formulas.formulas(0, reacao)
      i=0
    }else if(variavel === "calculadora"){
      const mensagem = new Discord.MessageEmbed() 
      .setColor('#8A2BE2')
      .setTitle('Calculadora')
      .setDescription(
        'Você pode resolver contas usando \n`f.calc (sua conta)` \n(Ex: f.calc raiz( 10 x 10 + 42 / 2))\n\n---------------------------------------'
      )  
      .addFields(
        {name: 'Simbolos', value: '**Soma:**\n**+**\n\n**Subtração:**\n**-** \n\n **Divisão:**\n**/** ou **÷** \n\n **Multiplicação:** \n**x**, **×** ou ***** \n\n**Elevado:** \n**^** ou ****** \n\n**Raiz:** \n**r( )**, **raiz( )** ou **√( )** \n\n'}
      )
       channel.send(mensagem);
       message.delete()
    }
  }else if (comando === "convite" || comando === "invite" || comando === "convidar"){
    const mensagem = new Discord.MessageEmbed() 
      .setColor('#0b82b0')
      .setTitle('Eu sabia que ia me chamar para o seu server em algum momento!  :blue_heart:')
      .setDescription(
        'Este é o meu link: https://url.gratis/G8OJhZ'
      )  
      channel.send(mensagem);
  }else if(comando === "torricelli"){
    torricelli = require("./commands/torricelli")
    torricelli.torricelli(message, args, variavel)
    
  }else if(comando === "addg"){
    if(args_s == null){
      return
    }else{
      texto = ""
      args_s.forEach(palavras => {
        texto += palavras + " "
      });
      
      texto_arr = texto.split("/-/");
      td = texto_arr[0];
      td = td.charAt(0).toUpperCase() + td.slice(1) 
      dt = texto_arr[1].charAt(0).toUpperCase() + texto_arr[1].slice(1) ;
      mate = texto_arr[2].charAt(0).toUpperCase() + texto_arr[2].slice(1) ;
      loc = texto_arr[3].charAt(0).toUpperCase() + texto_arr[3].slice(1) ;
      descrip = texto_arr[4].charAt(0).toUpperCase() + texto_arr[4].slice(1) ;
      if(texto_arr[5] !== undefined){
        imag = texto_arr[5];
      }else{
        imag = 'no Image';
      }

      console.log("cu")
      const dbglobal = database.ref(`Servidor/todo/${channel.guild}`)
      dbglobal.once('value').then(async function(db){
      if(db.val() == null){
          dbglobal.set({
          todo: td,
          data: dt,
          materia: mate,
          local: loc,
          desc: descrip,
          img: imag
        })
      }else{ /*td*/
        console.log(td)
        a = db.val().todo
        console.log(typeof(a))
        dbglobal.update({
          todo: db.val().todo + "/-/" + td,
          data: db.val().data + "/-/" + dt,
          materia: db.val().materia + "/-/" + mate,
          local: db.val().local + "/-/" + loc,
          desc: db.val().desc + "/-/" + descrip,
          img: db.val().img + "/-/" + imag
        })
        channel.send("✅ Cadastrada com Sucesso!")
      }
    })
      }
  }else if(comando === "atvs"){ 

    const dbglobal = database.ref(`Servidor/todo/${channel.guild}`)
      dbglobal.once('value').then(async function(db){
        dt = db.val().data.split('/-/')
        td = db.val().todo.split('/-/') 
        local = db.val().local.split('/-/') 
        materia = db.val().materia.split('/-/') 
        desc = db.val().desc.split('/-/') 
        text = ''
        for(let i = 0; i < td.length; i++){
          if(desc[i].length>2){
            desc[i] += '\n'
          }
          text += "**" + eval(i+1) + '. ' + local[i] + " - " + materia[i] + '/' +td[i]  + ': ' + dt[i] + '**\n' + desc[i] + '\n'
        }
        const mensagem = new Discord.MessageEmbed() 
            .setColor('#0b82b0')
            .setTitle(
              '======Atividades======'
            )
            .setThumbnail(
              'https://thumbs.dreamstime.com/b/lista-de-tarefas-86668787.jpg'
            )
            .setDescription(
              `${text}`
            )
            channel.send(mensagem);
      })

  }else if(comando === "gato"){ 
    gato = require("./commands/gato")
    gato.gato(message)
  }else if(comando === "proteina"){
    proteina = require("./commands/proteina")
    proteina.proteina(message, args, variavel)

  }else if(comando === "força"){
    forca = require("./commands/força")
    forca.forca(message, args, variavel)

  }else if(comando === "trabalho"){
    trabalho = require("./commands/trabalho")
    trabalho.trabalho(message, args, variavel)

  }else if(comando === "potencia"){
    potencia = require("./commands/potencia")
    potencia.potencia(message, args, variavel)

  }else if(comando === "bhaskara") { 
    bhaskara = require("./commands/bhaskara")
    bhaskara.bhaskara(message, args, variavel)

  }else if(comando === "mru") {  
    mru = require("./commands/mru")
    mru.mru(message, args, variavel)

  }else if(comando === "atrito") { 
    atr = require("./commands/atrito")
    atr.atr(message, args, variavel)

  }else if(comando === "mruv") { 
    mruv = require("./commands/mruv")
    mruv.mruv(message, args, variavel)

  }else if(comando === "ec"){
    ec = require("./commands/ec")
    ec.ec(message, args, variavel)

  }else if(comando === "lobliquo"){
    lancamento = require("./commands/lancamento.js")
    lancamento.lancamento(message,variavel)

  }else if(comando === "gravitação"){
    grav = require("./commands/gravitacao")
    grav.grav(message, args, variavel)
    
  }else if(comando === "epg"){
    epg = require("./commands/epg")
    epg.epg(message, args, variavel)
    
  }else if(comando === "epel"){
    epel = require("./commands/epel")
    epel.epel(message, args, variavel)
   
  }else if(comando === "juros") { 
    juros = require("./commands/juros")
    juros.juros(message, args, variavel)
    
  }else if(comando === "pg") { 
    pg = require("./commands/pg")
    pg.pg(variavel,message,args)
  
  }else if(comando === "mcu") { 
    mcu = require("./commands/mcu")
    mcu.mcu(message, args, variavel)
 
  }else if(comando === "pitagoras") { 
    pitagoras = require("./commands/pitagoras")
    pitagoras.pitagoras(message, args, variavel)

  }else if(comando === "area" || comando === "área") { 
    area = require("./commands/area")
    area.area(message, args, variavel)

  }else if(comando === "calc") { 
    calculadora = require("./commands/calculadora")
    calculadora.calc(message, args_s)

  }else if(comando === "tabela") { 
    tabela = require("./commands/tabela")
    tabela.tabela(message, variavel)
    
  }else if(comando === "regra3") { 
    regra = require("./commands/regra3")
    regra.regra(message, variavel,args_s)
  
  }else if(comando === "report") { 
    text = ""
    if(args_s == ""){
      reply("Ei, você precisa escrever o seu report")
    }else{
      args_s.forEach((arg) =>{
        text += arg + " "
      })

      const mensagem = new Discord.MessageEmbed() 
      .setColor('#94c276')
      .setTitle(':white_check_mark: Report enviado com sucesso!')
      .setDescription(
      `${text}` 
      )
      channel.send(mensagem)

      const mensagem_dm = new Discord.MessageEmbed() 
      .setColor('#dd2e44')
      .setTitle(`Report de ${message.member.user.tag.slice(0,  message.member.user.tag.length - (message.member.user.tag.length - message.member.user.tag.indexOf('#')))} de ${message.guild.name}`)
      .setDescription(
        `${text}` 
      )
      client.users.cache.get('630727156510490624').send(mensagem_dm)
    } 
  }
});

client.login(config.token);