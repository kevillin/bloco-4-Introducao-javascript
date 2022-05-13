let nota = 820;

switch (nota) {
  case (nota / 100) > 100 && (nota / 100) < 0:
    console.log("error")
    break;

    case (nota / 100) >= 90:
      console.log("A")
      break;
    
    case (nota / 100 >= 80):
    console.log("B")
    break;

  default:
    console.log("error")
    break;
}

// não está dando certo
