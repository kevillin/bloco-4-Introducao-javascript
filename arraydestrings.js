let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorNome = array[0]; // eu não entendi muito bem como o Pedro fez para conseguir isso
let menorNome = array[0];

for (let index = 0; index < array.length; index+=1) {
  if (array[index].length > maiorNome.length) {
    maiorNome = array[index];
  }
}

console.log(maiorNome)

for (let index = 0; index < array.length; index+=1) {
  if (array[index].length < menorNome.length) {
    menorNome = array[index];
  }
}
  console.log(menorNome)