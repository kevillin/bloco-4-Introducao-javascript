// Exercicio 01
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 0; index < numbers.length; index += 1) {
//   console.log(numbers[index] + numbers);
// }

// Exercicio 02

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   soma =soma + numbers[index];
// }

// console.log(soma);

// Exercicio 03

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   soma += numbers[index];
// }

// console.log(soma / numbers.length);

// Exercicio 04

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   soma += numbers[index];
// }

// let resultado = soma / numbers.length;

// if (resultado > 20) {
//   console.log("Valor maior que 20")
// } else {
//   console.log("valor menor ou igual a 20")
// }

// Exercicio 5

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// // let soma = Math.max(...numbers);
// let maior = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] > maior){
//     maior = numbers[index];
//   }
// }

// console.log(maior)

// Exercicio 6

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] %2 !== 0){
    impar += 1;
  }
}

console.log(impar)