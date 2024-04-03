
function collatz(number) { 
 console.log(number)
  let arr = [];
  let maximum=0;
  let value=number
  if(number<=1000000 && number>=1){

    while (number != 1 ) {
        if (number % 2 == 0) {
          number = number / 2;
          arr.push(number);
        } else {
          number = number * 3 + 1;
          arr.push(number);
        }
      }

      if(maximum<arr.length){
        maximum=arr.length
      }
    return [arr,maximum,value]
  }

}
let[arr,max,val]=collatz(10)
console.log(`The Value ${val} has this ${arr} Longest Collatz Sequence with a length of ${max}`);
