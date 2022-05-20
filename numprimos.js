let numTotais = 0;
let numPrimos = [];

for (let index = 0; index <= 50; index += 1) {
  let eprimo = true;
  for (let index1 = 2; index1 < index; index1 += 1){
    
    if (index % index1 === 0) {
      eprimo = false;
    }
  }
  if (eprimo) {
    numTotais = index;
  }
}

console.log(numTotais);