let angulo1 = 15;
let angulo2 = -45;
let angulo3 = 20;

if (angulo1 + angulo2 + angulo3 === 180) {
  console.log("true");
} else if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
  console.log("Ângulo inválido");
} else if (angulo1 + angulo2 + angulo3 != 180) {
  console.log("false");
}

// let degreeAngleA = 65;
// let degreeAngleB = 100;
// let degreeAngleC = 15;

// let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

// let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

// if(allAnglesArePositives){
//   if (sumOfAngles === 180) {
//     console.log(true);
//   } else {
//     console.log(false);
//   };
// } else {
//   console.log('Erro: ângulo inválido');
// }
