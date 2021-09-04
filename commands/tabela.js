const Discord = require("discord.js");

module.exports = {
    tabela: async function tabela(message, variavel){
        let elemento

        if(variavel == " "){
            message.inlineReply('https://www.peterchemical.com.br/wordpress/wp-content/uploads/2019/08/tabela-peri%C3%B3dica-2000x1200.jpg')
        }else if(variavel == 'h'||variavel == 'hidrogenio'|| variavel == 'hidrogênio' || variavel == '1'){
            elemento = {
                nome: "Hidrogênio",
                simbol: "H",
                massa_atomica: "1,008",
                serie_quimica: "Não-metal, 1º Período",
                conf_eletronica: "1s¹",
                ponto_de_f: "-259,2",
                ponto_de_e: "-252,9",
                eletronegatividade: "2,2",
                url: "https://i.ibb.co/Jv2zQdL/H-6.png"
            }
        }else if(variavel == 'he'||variavel == 'hélio'|| variavel == 'helio' || variavel == '2'){
            elemento = {
                nome: "Hélio",
                simbol: "He",
                massa_atomica: "4,002",
                serie_quimica: "Gás nobre, Não metal, Elemento do 1º Período",
                conf_eletronica: "1s²",
                ponto_de_f: "-272,2",
                ponto_de_e: "268,9",
                eletronegatividade: "0",
                url: "https://i.ibb.co/k6pfVPr/H-5.png"
            }
        }else if(variavel == 'li'||variavel == 'lítio'|| variavel == 'litio'|| variavel == '3'){
            elemento = {
                nome: "Lítio",
                simbol: "Li",
                massa_atomica: "6,941",
                serie_quimica: "Metal, Metal alcalino, Elemento do 2º Período",
                conf_eletronica: "1s² 2s¹",
                ponto_de_f: "180,5",
                ponto_de_e: "1.330",
                eletronegatividade: "0,98",
                url: "https://i.ibb.co/ChHc2wy/H-4.png"
            }
        }else if(variavel == 'be'||variavel == 'berílio'|| variavel == 'berilio'|| variavel == '4'){
            elemento = {
                nome: "Berílio",
                simbol: "Be",
                massa_atomica: "9,012",
                serie_quimica: "Metal, Metal alcalinoterroso, Elemento do 2º Período",
                conf_eletronica: "1s² 2s²",
                ponto_de_f: "1.287",
                ponto_de_e: "2.970",
                eletronegatividade: "1,57",
                url: "https://i.ibb.co/1m5j32C/H-7.png"
            }
        }else if(variavel == 'b'||variavel == 'boro'|| variavel == '5'){
            elemento = {
                nome: "Boro",
                simbol: "B",
                massa_atomica: "10,811",
                serie_quimica: "Semimetal, Grupo do boro, Elemento do 2º Período",
                conf_eletronica: "1s² 2s² 2p¹",
                ponto_de_f: "2.076",
                ponto_de_e: "3.927",
                eletronegatividade: "2,04",
                url: "https://i.ibb.co/TPrQWpF/H-8.png"
            }

        }else if(variavel == 'c'||variavel == 'carbono'|| variavel == '6'){
            elemento = {
                nome: "Carbono",
                simbol: "C",
                massa_atomica: "12,010",
                serie_quimica: "Não metal, Semimetal, Grupo do carbono, Elemento do 2º Período",
                conf_eletronica: "1s² 2s² 2p²",
                ponto_de_f: "3550",
                ponto_de_e: "4.827",
                eletronegatividade: "2,55",
                url: "https://i.ibb.co/MD5HfmH/H-9.png"
            }
        }else if(variavel == 'n'||variavel == 'nitrogênio'||variavel == 'nitrogenio'|| variavel == '7'){
            elemento = {
                nome: "Nitrogênio",
                simbol: "N",
                massa_atomica: "14,007",
                serie_quimica: "Não metal, Grupo do nitrogênio, Elemento do 2º Período",
                conf_eletronica: "1s² 2s² 2p³",
                ponto_de_f: "-210",
                ponto_de_e: "-195,8",
                eletronegatividade: "3,04",
                url: "https://i.ibb.co/3F2LzMd/H-10.png"
            }
        }else if(variavel == 'o'||variavel == 'oxigênio'||variavel == 'oxigenio'|| variavel == '8'){
            elemento = {
                nome: "Oxigênio",
                simbol: "O",
                massa_atomica: "15,999",
                serie_quimica: "Não metal, Calcogênio, Elemento do 2º Período",
                conf_eletronica: "1s² 2s² 2p⁴",
                ponto_de_f: "-218,4",
                ponto_de_e: "-183",
                eletronegatividade: "3,5",
                url: "https://i.ibb.co/zfcsFxL/O.png"
            }
        }else if(variavel == 'f'||variavel == 'flúor'||variavel == 'fluor'|| variavel == '9'){
            elemento = {
                nome: "Flúor",
                simbol: "F",
                massa_atomica: "18,998",
                serie_quimica: "Halogênio, Não metal, Elemento do 2º Período",
                conf_eletronica: "1s² 2s² 2p⁵",
                ponto_de_f: "-188,1",
                ponto_de_e: "-219,6",
                eletronegatividade: "3,98",
                url: "https://i.ibb.co/RQfHYJ0/F.png"
            }
        }else if(variavel == 'ne'||variavel == 'neônio'||variavel == 'neonio'|| variavel == '10'){
            elemento = {
                nome: "Neônio",
                simbol: "Ne",
                massa_atomica: "20,179",
                serie_quimica: "Gás nobre, Não metal, Elemento do 2º Período",
                conf_eletronica: "1s² 2s² 2p⁶",
                ponto_de_f: "-248,6",
                ponto_de_e: "-246",
                eletronegatividade: "0",
                url: "https://i.ibb.co/8X1BgQy/Ne.png"
            }
        }else if(variavel == 'na'||variavel == 'sódio'||variavel == 'sodio'|| variavel == '11'){
            elemento = {
                nome: "Sódio",
                simbol: "Na",
                massa_atomica: "22,989",
                serie_quimica: "Metal, Metal alcalino, Elemento do 3º Período",
                conf_eletronica: "1s² 2s² 2p⁶ 3s¹",
                ponto_de_f: "97,79",
                ponto_de_e: "882,8",
                eletronegatividade: "0,93",
                url: "https://i.ibb.co/Pr6sVyq/Na.png"
            }
        }else if(variavel == 'mg'||variavel == 'magnésio'||variavel == 'magnesio'|| variavel == '12'){
            elemento = {
                nome: "Magnésio",
                simbol: "Mg",
                massa_atomica: "24,305",
                serie_quimica: "Metal, Metal alcalinoterroso, Elemento do 3º Período",
                conf_eletronica: "1s² 2s² 2p⁶ 3s²",
                ponto_de_f: "650",
                ponto_de_e: "1.091",
                eletronegatividade: "1,31",
                url: "https://i.ibb.co/gjcvCm0/H-17.png"
            }
        }else if(variavel == 'al'||variavel == 'alumínio'||variavel == 'aluminio'|| variavel == '13'){
            elemento = {
                nome: "Alumínio",
                simbol: "Al",
                massa_atomica: "26,981",
                serie_quimica: "Metal, Semimetal, Grupo do boro, Metal pesado tóxico, Elemento do 3º Período, Outros metais",
                conf_eletronica: "1s² 2s² 2p⁶ 3s² 3p¹",
                ponto_de_f: "660,3",
                ponto_de_e: "2.470",
                eletronegatividade: "1,61",
                url: "https://i.ibb.co/fvB2v54/Al.png"
            }
        }else if(variavel == 'si'||variavel == 'silicio'||variavel == 'silicio'|| variavel == '14'){
            elemento = {
                nome: "Silício",
                simbol: "Si",
                massa_atomica: "28,085",
                serie_quimica: "Semimetal, Grupo do carbono, Elemento do 3º Período",
                conf_eletronica: "1s² 2s² 2p⁶ 3s² 3p²",
                ponto_de_f: "1.414",
                ponto_de_e: "3.265",
                eletronegatividade: "1,9",
                url: "https://i.ibb.co/6DKcDLw/Si.png"
            }
        }else if(variavel == 'p'||variavel == 'fósforo'||variavel == 'fosforo'|| variavel == '15'){
            elemento = {
                nome: "Fósforo",
                simbol: "P",
                massa_atomica: "30,973",
                serie_quimica: "Não metal, Grupo do nitrogênio, Elemento do 3º Período",
                conf_eletronica: "1s² 2s² 2p⁶ 3s² 3p³",
                ponto_de_f: "44,15",
                ponto_de_e: "280,5",
                eletronegatividade: "2,19",
                url: "https://i.ibb.co/zrrB1qJ/P.png"
            }
        }else if(variavel == 's'||variavel == 'enxofre'|| variavel == '16'){
            elemento = {
                nome: "Enxofre",
                simbol: "S",
                massa_atomica: "32,065",
                serie_quimica: "Não metal, Calcogênio, Elemento do 3º Período",
                conf_eletronica: "1s² 2s² 2p⁶ 3s² 3p⁴",
                ponto_de_f: "115,2",
                ponto_de_e: "444,6",
                eletronegatividade: "2,58",
                url: "https://i.ibb.co/txWnW3W/S.png"
            }
        }else if(variavel == 'cl'||variavel == 'cloro'|| variavel == '17'){
            elemento = {
                nome: "Cloro",
                simbol: "Cl",
                massa_atomica: "35,453",
                serie_quimica: "Halogênio, Não metal, Elemento do 3º Período",
                conf_eletronica: "1s² 2s² 2p⁶ 3s² 3p⁵",
                ponto_de_f: "-103",
                ponto_de_e: "-34,04",
                eletronegatividade: "3,16",
                url: "https://i.ibb.co/rtGdMGV/Cl.png"
            }
        }else if(variavel == 'ar'||variavel == 'argônio'||variavel == 'argonio'|| variavel == '18'){
            elemento = {
                nome: "Argônio",
                simbol: "Ar",
                massa_atomica: "39,948",
                serie_quimica: "Gás nobre, Não metal, Elemento do 3º Período",
                conf_eletronica: "1s² 2s² 2p⁶ 3s² 3p⁶",
                ponto_de_f: "-189,4",
                ponto_de_e: "-185,8",
                eletronegatividade: "0",
                url: "https://i.ibb.co/MBbjsHy/Ar.png"
            }
        }else if(variavel == 'k'||variavel == 'potássio'||variavel == 'potassio'|| variavel == '19'){
            elemento = {
                nome: "Potássio",
                simbol: "K",
                massa_atomica: "39,098",
                serie_quimica: "Metal, Metal alcalino, Elemento do 4º período",

                conf_eletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹",
                ponto_de_f: "63,5",
                ponto_de_e: "758,8",
                eletronegatividade: "0,82",
                url: "https://i.ibb.co/fqJcK1x/19.png"
            }
        }else if(variavel == 'ca'||variavel == 'cálcio'||variavel == 'calcio'|| variavel == '20'){
            elemento = {
                nome: "Cálcio",
                simbol: "Ca",
                massa_atomica: "40,078",
                serie_quimica: "Metal, Metal alcalinoterroso, Elemento do 4º período",
                conf_eletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s²",
                ponto_de_f: "842",
                ponto_de_e: "1.484",
                eletronegatividade: "1",
                url: "https://i.ibb.co/5jKKkvC/20.png"
            }
        }else if(variavel == 'sc'||variavel == 'escândio'||variavel == 'escandio'|| variavel == '21'){
            elemento = {
                nome: "Escândio",
                simbol: "Sc",
                massa_atomica: "44,956",
                serie_quimica: "Metal, Metal de transição, Terra-rara, Metal pesado tóxico, Elemento do 4º período, Elementos do Grupo 3",
                conf_eletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹ 4s²",
                ponto_de_f: "1.541",
                ponto_de_e: "2.836",
                eletronegatividade: "1,36",
                url: "https://i.ibb.co/D9BXr2d/21.png"
            }
        }else if(variavel == 'ti'||variavel == 'titânio'||variavel == 'titanio'|| variavel == '22'){
            elemento = {
                nome: "Titânio",
                simbol: "Ti",
                massa_atomica: "47,867",
                serie_quimica: "Metal, Metal de transição, Elemento do 4º período, Elementos do Grupo 4",
                conf_eletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d² 4s²",
                ponto_de_f: "1.668",
                ponto_de_e: "3.287",
                eletronegatividade: "1,54",
                url: "https://i.ibb.co/cc7XtxP/22.png"
            }
        }else if(variavel == 'v'||variavel == 'vanádio'||variavel == 'vanadio'|| variavel == '23'){
            elemento = {
                nome: "Vanádio",
                simbol: "V",
                massa_atomica: "50,942",
                serie_quimica: "Metal, Metal de transição, Metal pesado tóxico, Elementos do Grupo 5, Elemento do 4º período",
                conf_eletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d³ 4s²",
                ponto_de_f: "1.910",
                ponto_de_e: "3.407",
                eletronegatividade: "1,63",
                url: "https://i.ibb.co/vhWfcMJ/23.png"
            }
        }else if(variavel == 'cr'||variavel == 'crômio'||variavel == 'cromio'|| variavel == '24'){
            elemento = {
                nome: "Crômio",
                simbol: "Cr",
                massa_atomica: "51,996",
                serie_quimica: "Metal, Metal de transição, Metal pesado tóxico, Elemento do 4º período, Elemento do 6º Grupo",
                conf_eletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s¹",
                ponto_de_f: "1.907",
                ponto_de_e: "2.672",
                eletronegatividade: "1,66",
                url: "https://i.ibb.co/3SPDQZb/24.png "
            }
        }else if(variavel == 'mn'||variavel == 'manganês'||variavel == 'manganes'|| variavel == '25'){
            elemento = {
                nome: "Manganês",
                simbol: "Mn",
                massa_atomica: "54,938",
                serie_quimica: "Metal, Metal de transição, Metal pesado tóxico, Elementos do Grupo 7, Elemento do 4º período",
                conf_eletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s²",
                ponto_de_f: "1.246",
                ponto_de_e: "2.061",
                eletronegatividade: "1,55",
                url: "https://i.ibb.co/fkFp0sb/25.png"
            }
        }else if(variavel == 'fe'||variavel == 'ferro'|| variavel == '26'){
            elemento = {
                nome: "Ferro",
                simbol: "Fe",
                massa_atomica: "55,845",
                serie_quimica: "Metal, Metal de transição, Metal pesado tóxico, Elemento do 4º período, Elementos do Grupo 8",
                conf_eletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s²",
                ponto_de_f: "1.538",
                ponto_de_e: "2.862",
                eletronegatividade: "1,83",
                url: "https://i.ibb.co/NmGHJMM/26.png"
            }
        }else if(variavel == 'co'||variavel == 'cobalto'|| variavel == '27'){
            elemento = {
                nome: "Cobalto",
                simbol: "Co",
                massa_atomica: "58,933",
                serie_quimica: "Metal, Metal de transição, Metal pesado tóxico, Elemento do 4º período, Elementos do Grupo 9",
                conf_eletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁷ 4s²",
                ponto_de_f: "1.495",
                ponto_de_e: "2.870",
                eletronegatividade: "1,88",
                url: "https://i.ibb.co/3d8Ydvr/27.png"
            }
        }else if(variavel == 'ni'||variavel == 'níquel'||variavel == 'niquel'|| variavel == '28'){
            elemento = {
                nome: "Níquel",
                simbol: "Ni",
                massa_atomica: "58,693",
                serie_quimica: "Metal, Metal de transição, Metal pesado tóxico, Elemento do 4º período, Elementos do Grupo 10",
                conf_eletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁸ 4s²",
                ponto_de_f: "1.455",
                ponto_de_e: "2.913",
                eletronegatividade: "1,91",
                url: "https://i.ibb.co/6ZM9M7r/28.png"
            }
        }else if(variavel == 'cu'||variavel == 'cobre'|| variavel == '29'){
            elemento = {
                nome: "Cobre",
                simbol: "Cu",
                massa_atomica: "63,546",
                serie_quimica: "Metal, Metal de transição, Metal pesado tóxico, Elemento do 4º período, Elementos do Grupo 11",
                conf_eletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s¹",
                ponto_de_f: "1.085",
                ponto_de_e: "2.562",
                eletronegatividade: "1,9",
                url: "https://i.ibb.co/Vvn7JdL/29.png"
            }
        }else if(variavel == 'zn'||variavel == 'zinco'|| variavel == '30'){
            elemento = {
                nome: "Zinco",
                simbol: "Zn",
                massa_atomica: "65,38",
                serie_quimica: "Metal, Metal de transição, Metal pesado tóxico, Elemento do 4º período, Elementos do Grupo 12",
                conf_eletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s²",
                ponto_de_f: "419,5",
                ponto_de_e: "907",
                eletronegatividade: "1,65",
                url: "https://i.ibb.co/Yc6VLMy/30.png"
            }
        }else if(variavel == 'ga'||variavel == 'galio'||variavel == 'gálio'|| variavel == '31'){
            elemento = {
                nome: "Gálio",
                simbol: "Ga",
                massa_atomica: "72,64",
                serie_quimica: "Semimetal, Grupo do carbono, Metal pesado tóxico, Elemento do 4º período",
                conf_eletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p²",
                ponto_de_f: "938,2",
                ponto_de_e: "2.833",
                eletronegatividade: "2,01",
                url: "https://i.ibb.co/0Y0QPCv/31.png"
            }
        }else if(variavel == 'ge'||variavel == 'germânio'||variavel == 'germanio'|| variavel == '32'){
            elemento = {
                nome: "Germânio",
                simbol: "Ge",
                massa_atomica: "69,723",
                serie_quimica: "Metal, Grupo do boro, Metal pesado tóxico, Elemento do 4º período, Outros metais",
                conf_eletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p¹",
                ponto_de_f: "29,76",
                ponto_de_e: "2.400",
                eletronegatividade: "1,81",
                url: "https://i.ibb.co/RPcmysG/32.png"
            }
        }else if(variavel == 'as'||variavel == 'arsênio'||variavel == 'arsenio'|| variavel == '33'){
            elemento = {
                nome: "Arsênio",
                simbol: "As",
                massa_atomica: "74,922",
                serie_quimica: "Semimetal, Grupo do nitrogênio, Metal pesado tóxico, Elemento do 4º período",
                conf_eletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p³",
                ponto_de_f: "816,8",
                ponto_de_e: "613",
                eletronegatividade: "2,18",
                url: "https://i.ibb.co/5TWLXNQ/33.png"
            }
        }else if(variavel == 'se'||variavel == 'selênio'||variavel == 'selenio'|| variavel == '34'){
            elemento = {
                nome: "Selênio",
                simbol: "Se",
                massa_atomica: "78,96",
                serie_quimica: "Não metal, Semimetal, Calcogênio, Elemento do 4º período",
                conf_eletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁴",
                ponto_de_f: "220",
                ponto_de_e: "684,8",
                eletronegatividade: "2,55",
                url: "https://i.ibb.co/RTwZ5GW/34.png"
            }
        }else if(variavel == 'br'||variavel == 'bromo'|| variavel == '35'){
            elemento = {
                nome: "Bromo",
                simbol: "Br",
                massa_atomica: "79,904",
                serie_quimica: "Halogênio, Não metal, Elemento do 4º período",
                conf_eletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁵",
                ponto_de_f: "-7,2",
                ponto_de_e: "58,8",
                eletronegatividade: "2,96",
                url: "https://i.ibb.co/MDPPGc3/35.png"
            }
        }else if(variavel == 'kr'||variavel == 'criptônio'||variavel == 'criptonio'|| variavel == '36'){
            elemento = {
                nome: "Criptônio",
                simbol: "Kr",
                massa_atomica: "83,798",
                serie_quimica: "Gás nobre, Não metal, Elemento do 4º período",
                conf_eletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶",
                ponto_de_f: "-157,4",
                ponto_de_e: "-153,4",
                eletronegatividade: "3",
                url: "https://i.ibb.co/sCg02NF/36.png"
            }
        }else if(variavel == 'rb'||variavel == 'rubídio'||variavel == 'rubidio'|| variavel == '37'){
            elemento = {
                nome: "Rubídio",
                simbol: "Rb",
                massa_atomica: "85,4678",
                serie_quimica: "Metal, Metal alcalino, Elemento do 5º Período",
                conf_eletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 5s¹",
                ponto_de_f: "39,3",
                ponto_de_e: "688",
                eletronegatividade: "0,82",
                url: "https://i.ibb.co/zS15FLw/37.png"
            }
        }else if(variavel == 'sr'||variavel == 'estrôncio'||variavel == 'estroncio'|| variavel == '38'){
            elemento = {
                nome: "Estrôncio",
                simbol: "Sr",
                massa_atomica: "87,62",
                serie_quimica: "Metal, Metal alcalinoterroso, Elemento do 5º Período",
                conf_eletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 5s²",
                ponto_de_f: "777",
                ponto_de_e: "1.382",
                eletronegatividade: "0,95",
                url: "https://i.ibb.co/qnPYS76/38.png"
            }
        }else if(variavel == 'y'||variavel == 'ítrio'||variavel == 'itrio'|| variavel == '39'){
            elemento = {
                nome: "Ítrio",
                simbol: "Y",
                massa_atomica: "88,906",
                serie_quimica: "Metal, Terra-rara, Metal de transição, Elementos do Grupo 3, Elemento do 5º Período",
                conf_eletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹ 5s²",
                ponto_de_f: "1.526",
                ponto_de_e: "3.338",
                eletronegatividade: "1,22",
                url: "https://i.ibb.co/Vm8g7qd/39.png"
            }
        }else if(variavel == 'zr'||variavel == 'zircônio'||variavel == 'zirconio'|| variavel == '40'){
            elemento = {
                nome: "Zircônio",
                simbol: "Zr",
                massa_atomica: "91,224",
                serie_quimica: "Metal, Metal de transição, Metal pesado tóxico, Elementos do Grupo 4, Elemento do 5º Período",
                conf_eletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d² 5s²",
                ponto_de_f: "1.855",
                ponto_de_e: "4.409",
                eletronegatividade: "1,33",
                url: "https://i.ibb.co/qn816j8/40.png"
            }
        }else if(variavel == 'nb'||variavel == 'nióbio'||variavel == 'niobio'|| variavel == '41'){
            elemento = {
                nome: "Nióbio",
                simbol: "Nb",
                massa_atomica: "92,906",
                serie_quimica: "Metal, Metal de transição, Elementos do Grupo 5, Metal pesado tóxico, Elemento do 5º Período",
                conf_eletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d³ 5s²",
                ponto_de_f: "2.477",
                ponto_de_e: "4744",
                eletronegatividade: "1,6",
                url: "https://i.ibb.co/ByRg7pG/41.png"
            }
        }else if(variavel == 'tc'||variavel == 'tecnécio'||variavel == 'tecnecio'|| variavel == '43'){
            elemento = {
                nome: "Tecnécio",
                simbol: "Tc",
                massa_atomica: "98",
                serie_quimica: "Metal, Metal de transição, Metal pesado tóxico, Elementos do Grupo 7, Elemento do 5º Período",
                conf_eletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d⁵ 5s²",
                ponto_de_f: "2157",
                ponto_de_e: "4265",
                eletronegatividade: "1,9",
                url: "https://i.ibb.co/4g4cs5W/43.png"
            }
        }else if(variavel == 'ru'||variavel == 'rutênio'||variavel == 'rutenio'|| variavel == '44'){
            elemento = {
                nome: "Rutênio",
                simbol: "Ru",
                massa_atomica: "101,07",
                serie_quimica: "Metal, Metal de transição, Metal pesado tóxico, Elemento do 5º Período, Elementos do Grupo 8",
                conf_eletronica: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d⁵ 5s²",
                ponto_de_f: "2157",
                ponto_de_e: "4265",
                eletronegatividade: "1,9",
                url: "https://i.ibb.co/4g4cs5W/43.png"
            }
        }
        const mensagem = new Discord.MessageEmbed() 
        .setColor('#8A2BE2')
        .setTitle(
            `${elemento.nome}`
        )
        .setDescription(
            `**Símbolo:** ${elemento.simbol}\n**Massa Atômica:** ${elemento.massa_atomica} u\n**Série química:** ${elemento.serie_quimica}\n**Configuração Eletrônica:** ${elemento.conf_eletronica}\n**Ponto de fusão:** ${elemento.ponto_de_f} °C\n**Ponto de ebulição:** ${elemento.ponto_de_e} °C\n**Eletronegatividade:** ${elemento.eletronegatividade}`
        )
        .setImage(
            `${elemento.url}`
        )

        message.channel.send(mensagem);

    }
}