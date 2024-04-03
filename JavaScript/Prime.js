function isPrime(number){
    if(number<2){
        return `${number} is not a prime number`
    }
    for (let i=2;i<number;i++){
        if(number%i==0){
        return`${number} is not a prime number`
        }
    }
   console.log(`${number} is  a prime number`)
}

for(let i=0;i<=100;i++){
    isPrime(i)
}