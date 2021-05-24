let custo = 1;
let venda = 3;
let valorCustoTotal = custo + (custo * 0.2);

let lucroPorUnidade = venda - valorCustoTotal;
let lucroTotal = lucroPorUnidade * 1000;

if (custo < 0 || venda < 0) {
  console.log("ERRO: Valores menores que zero!");
} else {
  console.log("O lucro ao vender 1000 produtos:", lucroTotal);
}


// let costOfProduct = 1;
// let saleValue = 3;

// if (costOfProduct >= 0 && saleValue >= 0) {
//   let totalCostOfProduct = costOfProduct * 1.2;
//   let totalProfit = (saleValue - totalCostOfProduct) * 1000;
//   console.log(totalProfit);
// } else {
//   console.log("Error, os valores não podem ser negativos");
// };