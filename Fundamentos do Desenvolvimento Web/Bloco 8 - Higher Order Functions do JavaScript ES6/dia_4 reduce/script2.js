const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getSumEven = (result, numberEven) => {
  if (numberEven % 2 === 0) {
    return result + numberEven;
  } else {
    return result;
  }
}

const sumEven = numbers.reduce(getSumEven);
console.log(sumEven);

// 

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 56];

const getSumArray = (total, number) => total + number;

const resultSum = numbers.reduce(getSumArray, 500);
console.log(resultSum);

// ----------------




