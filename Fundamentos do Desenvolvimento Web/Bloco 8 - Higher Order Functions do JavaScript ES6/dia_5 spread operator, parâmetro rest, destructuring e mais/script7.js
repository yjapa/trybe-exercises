const greeting = (user) => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined!

//

const greeting = (user = 'Wesley') => console.log(`Welcome ${user}!`);

greeting(); // Welcome Wesley!

//

const greeting = (user) => {
  const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
  console.log(`Welcome ${userDisplay}!`);
};

greeting(); // Welcome usuário!

//

const multiply = (number, value = 1) => {
  // Escreva aqui a sua função
  return number * value;
};

console.log(multiply(8, 2));
