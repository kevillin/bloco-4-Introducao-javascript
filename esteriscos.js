// Exercicio 01

let n = 5;
let linhaAsteriscos = '';
let colunaAsteriscos = '';

for (let linha = 0; linha < n; linha += 1) {
  for (let coluna = 0; coluna < n; coluna += 1)
    if (linha == coluna) {
      colunaAsteriscos += "*";
    }
  console.log(colunaAsteriscos);
  colunaAsteriscos = "";
  linhaAsteriscos = "";
}



// Exercicio 02

// let n = 5;
// let linhaAsteriscos = '';
// let colunaAsteriscos = '';

// for (let index = 0; index < n; index += 1) {
//   linhaAsteriscos += "*";
//   console.log(linhaAsteriscos + colunaAsteriscos);
// }