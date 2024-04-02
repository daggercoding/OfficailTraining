let arr = [2,3,1,1,7,8,"vishal","singh","vishal",true,true,false]
let filtered=[]
let dublicate=[]

for(let i=0 ; i<arr.length;i++)
{
 if(!filtered.includes(arr[i])){
    filtered.push(arr[i])
 }else{
    dublicate.push(arr[i])
 }
}
console.log(filtered , dublicate)

let dfdd =[1,1,true,true,6,6,6]

let filtered=[]
let dublicateValue=[]
for(let i=0 ; i<dfdd.length ; i++){
    let dublicate=false
    for(let j=0 ; j<filtered.length;j++){
       if(dfdd[i]===filtered[j]){
        dublicate=true
        break;
       }
    }
    if(!dublicate){
     filtered.push(dfdd[i])
     console.log(filtered)
    }
}
console.log(filtered)
let arr = [1,2,3,1,2,2,2,true,true]
let filtered=[]
let dublicateVal=[]

for(let i= 0 ;i<arr.length;i++){
    let dublicate = false
    for(let j= 0 ;j < filtered.length;j++){
     if(arr[i]==filtered[j]){
        dublicate=true
        break
     }
    }

    if(dublicate){
      dublicateVal.push(arr[i])
    }else{
      filtered.push(arr[i])
    }
}
console.log(filtered,dublicateVal)
function greet(){
    console.log("greeting to everyone")
}

Object.prototype.greet=(greet)=>{
    console.log("hello Tiwari ji")
    this.greet()
}

console.log(Object.prototype("greet"))

Array.prototype.hel=()=>{
    console.log("hell")
}


const obj ={
    name:"vishal",
    age:24
}
let str="vishal"


let arr = [1,2,3,4]

arr.hel()
str.greet()
obj.greet()



