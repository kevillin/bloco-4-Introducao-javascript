let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (let nomes in names) {
  console.log("Olá " + names[nomes])
}

// Exercicio 02
let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let carros in car) {
  console.log(carros, car[carros])
}

function sum(a, b) {
  a + b;
}
console.log(sum(1, 2));
