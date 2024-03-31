let arr = [1,2,3,4,5]
//this is the normal scenario if we do not pass any initail value the accumulator is assigned with the 0th index of the array and start the current value from 1st index instead of 0 index
let result = arr.reduce((acc,curr)=>acc+curr)
console.log(result) //here the output is 15
 

let arr2=[1,2,3,4,5]
let initial= -5
let result2 = arr2.reduce((acc,curr)=>acc+curr,initial)
console.log(result2) //here the output is 10 is only because we have set the initial value -5 for the accumulator so now the value of crr is start from index 0 instead of index 1