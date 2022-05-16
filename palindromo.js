let word = "tryber";
let palindromo;

for (let index = word.length-1; index > word.length; index--) {
  palindromo = palindromo + word[index];
}

console.log(palindromo)
