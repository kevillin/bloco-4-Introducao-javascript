// arquivo script.js

let ondeVoceEsta = window.document.getElementById('elementoOndeVoceEsta');
ondeVoceEsta.parentElement.style.color = "Blue"
let filhoDoFilhoEstilo = window.document.getElementById('primeiroFilhoDoFilho');
filhoDoFilhoEstilo.innerText = "Novo Texto Adicionado";
let primeiroFilhoEstilo = window.document.getElementById('pai').firstChild;
let elementoOndeEstouEx05 = window.document.getElementById('primeiroFilho').previousSibling;
let elementoParaAtencao = window.document.getElementById('elementoOndeVoceEsta').nextSibling;
console.log(elementoParaAtencao)
let elementoParaTerceiroFilho = window.document.getElementById('elementoOndeVoceEsta').nextElementSibling;
console.log(elementoParaTerceiroFilho);
let paiParaTerceiroFilho = window.document.getElementById('pai').children[2];
console.log(paiParaTerceiroFilho);

let paiDeTodos = document.querySelector('#pai');
let novoIrmao = document.createElement('section');
paiDeTodos.appendChild(novoIrmao);
let filhoDoElementoOndeVoceEsta = document.createElement('div');
ondeVoceEsta.appendChild(filhoDoElementoOndeVoceEsta);
let filhoDoFilhoDoFilho = document.createElement('div');
primeiroFilhoEstilo.appendChild(filhoDoFilhoDoFilho);
let primeiroFilhoParaTerceiroFilho = document.querySelector('filhoDoFilhoDoFilho');
console.log(primeiroFilhoParaTerceiroFilho)
