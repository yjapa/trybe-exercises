// Exercícios Para Fixar

const acordando = () => 'Acordando!!'

const tomarCafe= () => 'Bora tomar café!!'

const partiuDormir = () => 'Partiu dormir!!'

const doingThings = (func) => {
  const fun = func();
  console.log(fun);
}

doingThings(acordando);
doingThings(tomarCafe);
doingThings(partiuDormir);

