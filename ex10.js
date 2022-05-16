const valorCusto = 10;
const valorVenda = 16;

const valorImposto = valorCusto * 20 / 100;
const valorCustoTotal = valorCusto + valorImposto;
let valorLucro = valorVenda - valorCustoTotal;

console.log(valorLucro)