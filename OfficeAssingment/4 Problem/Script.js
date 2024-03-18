// //==============================================>>>>>> GENERATING TRIANGULAR NUMBERS\
// function generateTriangularNumber(n) {
//   return (n * (n + 1)) / 2;
// }

// let num = 10;
// let triangularNumbers = [];

// for (let i = 1; i <= num; i++) {
//   const number = generateTriangularNumber(i);
//   triangularNumbers.push(number);
// }
// console.log(triangularNumbers)

// let divisor;
// triangularNumbers.forEach((value) => {
//   divisor = 0;
//   for (let i = 1; i <= value; i++) {
//     if (value % i == 0) {
//       divisor++;
//     }
//   }
//   if (divisor >= 500) {
//     console.log(`This Value ${value} has more than 500 Divisors`);
//      alert(`This Value ${value} has more than 500 Divisors`)
//   } else {
//     console.log(`This Value ${value} has total ${divisor} Divisors`);
//   }
// });

==============================================>>>>>> GENERATING TRIANGULAR NUMBERS\
function generateTriangularNumber(n) {
  return (n * (n + 1)) / 2;
}

let num = 10;
let triangularNumbers = [];

for (let i = 1; i <= num; i++) {
  const number = generateTriangularNumber(i);
  triangularNumbers.push(number);
}

triangularNumbers.forEach((value) => {
  //finding Prime Factors
  let primeFactors = [];
  let n = value;
  for(let i=2;i<=n;i++)
  {
    while(n%i==0){
      primeFactors.push(i)
      n=n/i
    }
  }
  console.log("Triangular number", value, "has prime factors:", primeFactors);
});

let divisor;
triangularNumbers.forEach((value) => {
  divisor = 0;
  for (let i = 1; i <= value; i++) {
    if (value % i == 0) {
      divisor++;
    }
  }
  if (divisor >= 500) {
    console.log(`This Value ${value} has more than 500 Divisors`);
     alert(`This Value ${value} has more than 500 Divisors`)
  } else {
    console.log(`This Value ${value} has total ${divisor} Divisors`);
  }
});











