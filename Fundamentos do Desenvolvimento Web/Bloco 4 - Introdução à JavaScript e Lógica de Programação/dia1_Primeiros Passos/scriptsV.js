let condicao = "aprovada";

switch (condicao) {
  case "aprovada":
    console.log("Aprovada");
    break;
    
  case  "reprovada":
    console.log("Reprovada");
    break;
    
  case "lista":
    console.log("Lista");
    break;

  default:
    console.log("Não se aplica");
}

function digits_sum(number_s) {
  // Write your code here
 let counter = 0;
 for (let i = 0; i < 1000; i += 1) {
     const splitNumbers = i.toString().split('')
     const sumResult = splitNumbers.reduce((acc,act) => {
         acc = parseInt(acc)  + parseInt(act)
         return acc
     }, 0)
     if (sumResult === number_s) counter += 1
 }
return counter
}

console.log(digits_sum(26));

console.log('digits_sum(26)');