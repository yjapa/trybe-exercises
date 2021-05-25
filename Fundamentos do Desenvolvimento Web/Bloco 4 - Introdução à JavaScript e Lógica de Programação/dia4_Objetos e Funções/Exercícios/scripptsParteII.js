// function verificaPalindromo (palavra) {
//   let reversed = palavra.split('').reverse().join('');
//   if ( palavra === reversed) {
//     return true;
//   } else {
//     return false;
//   }
// }

//   console.log(verificaPalindromo('palavra')); ------- Exercício 1

// function indiceDoMaior(numeros) {
//   let indiceMaior = 0;
//   for (let indice in numeros) {
//     if (numeros[indiceMaior] < numeros[indice]) {
//       indiceMaior = indice;
//     }
//   }
//   return indiceMaior;
// }

// console.log(indiceDoMaior([2, 3, 6, 70, 10, 1])); ------- Exercício 2

// function indiceDoMenor (numeros) {
//   let indiceMenor = 0;
//   for (let indice in numeros) {
//     if (numeros[indice] < numeros[indiceMenor]) {
//       indiceMenor = indice;
//   }
// }
//   return indiceMenor;
// } 
// console.log(indiceDoMenor([2, 3, 6, 70, 10, -15])); ------- Exercício 3

// function maiorPalavra(palavras) {
//   let maiorPalavra = palavras[0];
//   for (let indice in palavras) {
//     if (maiorPalavra.length < palavras[indice].length) {
//       maiorPalavra = palavras[indice];
//     }
//   }
//   return maiorPalavra;
// }

// console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); //Fernanda  ------------- Exercício 4

function maisRepete (numeros) {
  let numeroRepeticao = numeros[0];
  for (let indice in numeros) {
    if ( numero[indice] == numeroRepeticao) {
      numeroRepeticao = numero[indice];
    }
    return numeroRepeticao;
  }
}
  console.log(maisRepete[2, 3, 2, 5, 8, 2 ]);