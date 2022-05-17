let word = 'tryber';
let palindromo = '';

for (let index = word.length-1; index >= 0; index--) {
  palindromo = palindromo + word[index];
}

console.log(palindromo)
