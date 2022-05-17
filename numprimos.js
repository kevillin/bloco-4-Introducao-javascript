numPrimos = [0];

for (let index = 2; index < 50; index++) {
  if (index % index === 0) {
    numPrimos += index;
  };
  
}

console.log(numPrimos)