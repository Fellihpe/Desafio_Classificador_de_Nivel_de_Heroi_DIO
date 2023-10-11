console.log(">>>>>>>>>>>>>> DESAFIO CLASSIFICADOR DE NÍVEL DE HERÓI <<<<<<<<<<<<<<<<<<<");

let nomeHeroi = 'Felix'
let xpHeroi = 100001
let nivelHeroi = ''
 
if (xpHeroi < 1000){nivelHeroi = 'Ferro'}
if (xpHeroi > 1001 && xpHeroi <2000){nivelHeroi = 'Bronze'}
if (xpHeroi > 2001 && xpHeroi <5000){nivelHeroi = 'Prata'}
if (xpHeroi > 6001 && xpHeroi <7000){nivelHeroi = 'Ouro'}
if (xpHeroi > 7001 && xpHeroi <8000){nivelHeroi = 'Platina'}
if (xpHeroi > 8001 && xpHeroi <9000){nivelHeroi = 'Ascentende'}
if (xpHeroi > 9001 && xpHeroi <10000){nivelHeroi = 'Imortal'}
if (xpHeroi > 10001){nivelHeroi = 'Radiante'}

console.log(" O Herói de nome "+nomeHeroi+" está no nível "+nivelHeroi+"")
