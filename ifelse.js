const NOTA = 65;

if (NOTA >= 80) {
  console.log("Parabéns, você foi aprovado(a)");
} else if (NOTA < 80 && NOTA >= 60) {
  console.log("Você está na nossa lista de espera");
} else {
  console.log("Você foi reprovado(a)");
}