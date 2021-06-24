const verificarNumero = (apostado, numGerado) => apostado === numGerado;

const numeroAleatorio = (apostado, func) => {
  const numGerado = Math.floor((Math.random() * 5) + 1)
  return func(apostado, numGerado) ? "Parabéns você ganhou" : "Tente novamente";
};

console.log(numeroAleatorio(5, verificarNumero));


