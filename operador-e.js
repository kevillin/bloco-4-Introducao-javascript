const CURRENTHOUR = 12;
let message;

if (CURRENTHOUR >= 22) {
  message = "Não deveríamos comer nada, é hora de dormir";
} else if (CURRENTHOUR >= 18 && CURRENTHOUR < 22){
  message = "Rango da noite, vamos jantar :D";
} else if (CURRENTHOUR >= 14 && CURRENTHOUR < 18){
  message = "Vamos fazer um bolo pro café da tarde?";
} else if (CURRENTHOUR >= 11 && CURRENTHOUR < 14){
  message = "Hora do almoço!!!";
} else if (CURRENTHOUR >= 4 && CURRENTHOUR < 11){
  message = "Hmmm, cheiro de café recém passado";
}

console.log(message)