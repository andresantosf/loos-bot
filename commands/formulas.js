const Discord = require("discord.js");

module.exports = {
    formulas: async function formulas(i, reacao){
        if(i == 0){
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
            "Página 1/5"
          )
      
          reacao.edit(help)
        }else if(i == 1){
          const help = new Discord.MessageEmbed() 
          .setColor('#8A2BE2')
          .setTitle('Formulas')
          .addFields(
            {name: "Força",value:`f.força f M A\n\nf.força m F A\n\nf.força a F M\n\n---------------------------------------`}
          )
          
          .addFields(
            {name: "Trabalho",value:`f.trabalho w F D\n\nf.trabalho f W D\n\nf.trabaho d W F\n\n---------------------------------------`}
          )
      
          .addFields(
            {name: "Potência",value:`f.potencia p W T\n\nf.potencia w P T\n\nf.potencia t W P\n\n---------------------------------------`}
          )
      
          .addFields(
            {name: "Torricelli",value:`f.torricelli v Vo A ΔS\n\n---------------------------------------`}
          )
      
          .setFooter(
            "Página 2/5"
          )
          reacao.edit(help);
        }else if(i == 2){
          const help = new Discord.MessageEmbed() 
          .setColor('#8A2BE2')
          .setTitle('Formulas')
          
          .addFields(
            {name: "Energia cinética",value:`f.ec ec M V\n\nf.ec m Ec V\n\nf.ec v Ec M\n\n---------------------------------------`}
          )
      
          .addFields(
            {name: "Energia potencial gravitacional",value:`f.epg epg M G H\n\nf.epg m Epg G H\n\nf.epg g Epg M H\n\nf.epg h Epg M G\n\n---------------------------------------`}
          )
      
          .addFields(
            {name: "Energia potencial elástica",value:`f.epel epel K X\n\nf.epel K Epel X\n\nf.epel x Epel K\n\n---------------------------------------`}
          )

          .setFooter(
            "Página 3/5"
          )
      
          reacao.edit(help);
        }else if(i == 3){
          const help = new Discord.MessageEmbed() 
          .setColor('#8A2BE2')
          .setTitle('Formulas')
          
          .addFields(
            {name: "Atrito",value:`f.atrito fat μ N\n\n---------------------------------------`}
          )
      
          .addFields(
            {name: "Gravitação",value:`f.gravitação f M1 M2 D\n\n---------------------------------------`}
          )
      
          .addFields(
            {name: "juros",value:`f.juros simples C I T\n\nf.juros compostos C I T\n\n---------------------------------------`}
          )

          .setFooter(
            "Página 4/5"
          )
      
          reacao.edit(help);
        }else if(i == 4){
          const help = new Discord.MessageEmbed() 
          .setColor('#8A2BE2')
          .setTitle('Formulas')
          
          .addFields(
            {name: "MCU",value:`f.mcu a V R\n\nf.mcu v A R\n\nf.mcu r V A\n\nf.mcu s Δθ R\n\n---------------------------------------`}
          )
      
          .addFields(
            {name: "Pitagoras",value:`f.pitagoras a B C\n\nf.pitagoras b A C\n\nf.pitagoras c A B\n\n---------------------------------------`}
          )

          .setFooter(
            "Página 5/5"
          )
      
          reacao.edit(help);
        }
      }
  
      }