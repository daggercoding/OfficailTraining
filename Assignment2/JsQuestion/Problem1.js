function collatz(number) { 
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
     return{arrLen:maximum, value:value};
   }
 
 }

 let store = [];
 for(let i=1 ; i<1000000 ; i++){
 let val=collatz(i)
 store.push(val);
 }

 let maxLthhValue = store.reduce((acc, val) =>val['arrLen']> acc['arrLen']?val:acc);
 console.log(maxLthhValue)
 
 