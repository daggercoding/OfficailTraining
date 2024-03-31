let array = [12,5465,33,3235,32,23,65,45,321,4,5,32,5,6,743454,4,6]

let max=[]
let compare=0
for(let i=0; i<array.length ; i++){
    
 if(array[i]>compare){
    compare=array[i]
    if(max.length<3)
    max.push(array[i])
 }
}

let array2 = [2,3,443,23,2,4,54,2,323,34,5,565,4,434,232,45,45,5]
let sortedArray= array2.sort((a,b)=>a-b)
console.log(sortedArray)

