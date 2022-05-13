var peça = "Bispo";

if (peça.toLowerCase() === "rainha") {
  console.log("Anda em todas as posições")
} else if (peça.toLowerCase() === "rei") {
  console.log("Apenas uma casa")
} else if (peça.toLowerCase() === "cavalo") {
  console.log("Em forma de L")
} else if (peça.toLowerCase() === "bispo") {
  console.log("Na diagonal")
}else{
  console.log("Error")
}