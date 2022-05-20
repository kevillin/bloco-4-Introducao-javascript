// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   recorrente: 'sim'
// };

// console.log("Bem-vinda,", info.personagem)

// console.log(info);

// for (key in info) {
//   console.log(key)
// }

// for (key1 in info) {
//   console.log(info[key1])
// }

// //Exercicio 5
// let info2 = {
//   personagem: 'Tio Patinhas',
//   origem: 'Christmas on Bear Montain, Dells Four Color Comics #178',
//   nota: 'O ultimo MacPatinhas',
//   recorrente: 'sim'
// };

// let palavraChave = [];

// for (let key in info){
//   console.log(info[key] + ' e ' + info2[key])
//   if (info[key] === info2[key])
//   console.log("ambos recorrentes")
// } 

// for (index = 0; )

// // falta terminar

// Exercicio 6
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

leitor.livrosFavoritos = [{titulo: 'Harry Potter e o Prisioneiro de Azkaban', autor: 'JK Rowling', editora: 'Rocco'}];
console.log(leitor.livrosFavoritos)
console.log("O livro favorito de", leitor.nome, leitor.sobrenome, "se chama", leitor.livrosFavoritos[0]["titulo"]);