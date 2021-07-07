// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => document.getElementById('jokeContainer').innerHTML = data.joke);
};

window.onload = () => fetchJoke();

// 2) 

const promise = new Promise((resolve, reject) => {
  const arrayNumbers = [...Array(10)].map(()=>Math.floor(Math.random() * 50) + 1);
  const sumNumbers = arrayNumbers.map((number) => number * number)
                                 .reduce((sum, number) =>sum + number);
  console.log(sumNumbers);
  (sumNumbers < 8000) ? resolve() : reject();
})
promise
  .then(() => console.log('Promise resolvida'))
  .catch(() => console.log('Promise rejeitada'));

// GABARITO 2) 

const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const myArray = Array.from(
      { length: 10 },
      () =>  Math.floor(Math.random() * 50) + 1
    );
    const sum = myArray.map(number => number * number)
                       .reduce((sum, number) => sum + number);

    (sum < 8000) ? resolve() : reject();
  });

  myPromise
    .then(() => console.log('Promise resolvida'))
    .catch(() => console.log('Promise rejeitada'));
};

fetchPromise();

// 3)
const promise = new Promise((resolve, reject) => {
  const arrayNumbers = [...Array(10)].map(()=>Math.floor(Math.random() * 50) + 1);
  const sumNumbers = arrayNumbers.map((number) => number * number)
                                 .reduce((acc, number) =>acc + number, 0);
  console.log(sumNumbers);
  (sumNumbers < 8000) ? resolve(sumNumbers) : reject();
});

promise
  .then(sum => [2, 3, 5, 10].map(number => sum / number))
  .then(sum2 => console.log(sum2.reduce((number, acc) => number + acc, 0)))
  .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
