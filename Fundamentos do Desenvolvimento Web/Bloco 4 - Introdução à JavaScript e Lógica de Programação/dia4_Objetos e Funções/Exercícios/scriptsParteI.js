let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'sim',
};

// // console.log("Bem-vinda, " + info.personagem);

// // for (index in info) {
// //   console.log(index);
// // }

// for (index in info) {
//   console.log(info[index]);
// }

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'sim',
};

for (index in info) {
  if (
    info[index] === 'sim' &&
    info2[index] === 'sim'
  ) {
    console.log("Ambos recorrentes");
  } else {
    console.log(info[index] + " e " + info2 [index]);
  }
}