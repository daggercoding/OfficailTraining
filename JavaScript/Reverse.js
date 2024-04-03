let num = 276238479
let ans = 0;

while(num != 0){
    let digit  = num % 10;
    ans = (ans *10) + digit;
    num= Math.floor(num/10)
}
console.log(ans)

console.log(Math.floor(1.32))
console.log()


let num1 = 193278
// console.log(num1.toString().split(""))
let arr = []
while(num1!==0){
    let digit = num1 % 10;
    arr.unshift(digit)
    num1 = Math.floor(num1/ 10);

}
console.log(arr)



