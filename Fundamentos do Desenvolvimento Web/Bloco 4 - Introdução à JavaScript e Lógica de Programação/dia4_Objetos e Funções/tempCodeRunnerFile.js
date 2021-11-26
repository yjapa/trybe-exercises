function count(number_s) {
  // Write your code here
  let soma = 0;
  let count = 0;
  for(let i = 0; i < 1000; i++) {
    while (i != 0) {
        soma   += i % 10;
        i  = parseInt(i / 10);
        if (soma === number_s) {
          count += 1;
        }
        return console.log(count, '1');
      }
    }
    return console.log(count, '1');
}

console.log(count(26));