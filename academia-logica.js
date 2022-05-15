// 1. Descubra a idade mínima

// Escreva um algoritmo que recebe a idade de Marina, Silvia e Iza.

// Imprima no terminal uma mensagem informando a pessoa mais jovem no formato:
// --------------------------------------------------
// "x é a pessoa mais jovem e possui y anos de idade"
// --------------------------------------------------

let idadeMarina = 14;
let idadeSilvia = 13;
let idadeIza = 22;

if (idadeMarina < idadeSilvia && idadeMarina < idadeIza) {
  console.log("Marina é a pessoa mais jovem e possui " + idadeMarina + " anos de idade")
} else if (idadeSilvia < idadeMarina && idadeSilvia < idadeIza) {
  console.log("Silvia é a pessoa mais jovem e possui " + idadeSilvia + " anos de idade")
} else {
  console.log("Iza é a pessoa mais jovem e possui " + idadeIza + " anos de idade")
}


// 2. Taxa Metabólica Basal

// Ana Laura é uma nutricionista e quer disponibilizar uma calculadora de BMR (Taxa Metabólica Basal)
//  em seu site, vamos ajudá-la escrevendo um algoritmo.

// Ele recebe os seguintes dados:
//  - age: número maior que 0
//  - sex: M ou F
//  - weight: Em (kg) com número maior que 0
//  - height: Em (cm) com número maior que 0

// A fórmula para homens:
//  - (altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) + 5

// A fórmula para mulheres:
//  - (altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) – 161

// Imprima no terminal o resultado do cálculo no formato:
// -----------------------------------
// "A taxa metabólica basal é: x Kcal"

let age = 25;
let sex = "M";
let weight = 171;
let height = 80;

if (sex == "M") {
  console.log("A taxa metabólica basal é: " + ((height * 6.25) + (weight * 9.99) + (age * 4.92) + 5) + " Kcal")
}

// 3. Lanchonete da Trybe

// A Trybe abriu uma lanchonete e precisa criar um menu de opções para que as pessoas consigam
//  escolher qual lanche maravilhoso irão pedir.

// Para isso escreva um algoritmo que recebe o número da opção escolhida conforme a tabela abaixo 
//  e imprima no terminal a mensagem de acordo com a opção escolhida.

// Tabela:
// "1 - Trybe Lanche Feliz"
// "2 - McTrybe"
// "3 - TrybeWooper"
// "4 - X-Trybe"
// "5 - Triplo Trybe com JS"

// Caso a pessoa escolha uma opção inexistente, imprima no terminal:
// -----------------------------------
// "Ainda não possuímos esta opção :("
// -----------------------------------

let menuOpcoes = "7 - TrybePicanha";

switch (menuOpcoes) {
  case "1 - Trybe Lanche Feliz":
    console.log("Você pediu um Trybe Lanche Feliz!")
    break;

  case "2 - McTrybe":
    console.log("Você pediu um McTrybe!")
    break;

  case "3 - TrybeWooper":
    console.log("Você pediu um TrybeWooper!")
    break;
    
  case "4 - X-Trybe":
    console.log("Você pediu um X-Trybe!")
    break;

  case "5 - Triplo Trybe com JS":
    console.log("Você pediu um Triplo Trybe com JS!")
    break;

  default:
    console.log("Ainda não possuimos essa opção :(")
    break;
}