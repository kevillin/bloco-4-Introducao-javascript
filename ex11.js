const SALARIO = 2800;
let salarioINSS;
let aliquotaIR;

let aliquotaINSS1 = SALARIO * 8 / 100;
let aliquotaINSS2 = SALARIO * 9 / 100;
let aliquotaINSS3 = SALARIO * 11 / 100;
let aliquotaINSS4 = SALARIO - 570.88;

  if (SALARIO <= 1556.94) {
    salarioINSS = (SALARIO - aliquotaINSS1);
  } else if (SALARIO >= 1556.95 && SALARIO <= 2594.92) {
    salarioINSS = (SALARIO - aliquotaINSS2);
  } else if (SALARIO >= 2594.93 && SALARIO <= 5189.82) {
    salarioINSS = (SALARIO - aliquotaINSS3);
  } else {
    salarioINSS = (SALARIO - aliquotaINSS4);
  }


  if (SALARIO <= 1903.98) {
    aliquotaIR = 0;
  } else if (SALARIO >= 1903.99 && SALARIO <= 2826.65) {
    aliquotaIR = (SALARIO * 7.5 / 100);
  } else if (SALARIO >= 2826.66 && SALARIO <= 3751.05) {
    aliquotaIR = (SALARIO * 15 / 100);
  } else if (SALARIO >= 3752.06 && SALARIO <= 4664.68) {
    aliquotaIR = (SALARIO * 22.5 / 100);
  } else {
    aliquotaIR = (SALARIO * 27.5 / 100);
  }

console.log("O sálário dessa pessoa é " + (SALARIO - salarioINSS - aliquotaIR))

// O calculo tá dando errado