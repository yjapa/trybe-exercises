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

// function maisRepete (numeros) {
//   let numeroRepeticao = numeros[0];
//   for (let indice in numeros) {
//     if ( numero[indice] == numeroRepeticao) {
//       numeroRepeticao = numero[indice];
//     }
//     return numeroRepeticao;
//   }
// }
//   console.log(maisRepete[2, 3, 2, 5, 8, 2 ]);

//   function maisRepetido(numeros) {
//     let contRepetido = 0;
//     let contNumero = 0;
//     let indexNumeroRepetido = 0;
//     for (let index in numeros) {
//       let verificaNumero = numeros[index];
//       for (let index2 in numeros) {
//         if (verificaNumero === numeros[index2]) {
//           contNumero += 1;
//         }
//       }
//       if (contNumero > contRepetido) {
//         contRepetido = contNumero;
//         indexNumeroRepetido = index;
//       }
//       contNumero = 0;
//     }
//     return numeros[indexNumeroRepetido];
//   }------------------------------------------------------Exercício 5

// function somaNumero (numero) {
//   let soma = 0;
//   for ( let index = 0; index <= numero; index +=1) {
//     soma = soma + index;
//   }
//   return soma;
// }

// console.log(somaNumero(5));

function verificaFimPalavra(palavra, fimPalavra) {
  let inversoPalavra = palavra.split('').reverse().join('');
  let inversoFimPalavra = fimPalavra.split('').reverse().join('');
  let result;

  for (let index = 0; index < inversoFimPalavra.length; index += 1) {
    if (inversoPalavra[index] !== inversoFimPalavra[index]) {
      result = false;
      break;
    } else {
      result = true;
    }
  }
  
  return result;
}

console.log(verificaFimPalavra('trybe', 'be'));