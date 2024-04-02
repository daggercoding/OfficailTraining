
let str = 'vishal';
let arr = []
let arr1=[]
let arr2 = []


for(let i=0; i<str.length; i++){
    
   for(let j=0; j<str.length; j++){
 
    for(let k=0; k<str.length; k++){
        for(let l=0; l<str.length; l++){
          
            arr.push(str[i]+ str[j]+ str[k]+str[l]);
            arr1.push(str[i]+ str[j]+ str[k]);
            arr2.push(str[i]+ str[j]);
        }

    }
   }
}

let palinArr = arr.filter(val => val == val.split('').reverse().join(''))
let palinArr1 = arr1.filter(val => val == val.split('').reverse().join(''))
let palinArr2 = arr2.filter(val => val == val.split('').reverse().join(''))

function comp(d){
  
    let filtered =[] 
    for(let i= 0 ;i<d.length;i++){
        let dublicate = false
        for(let j= 0 ;j < filtered.length;j++){
         if(d[i]==filtered[j]){
            dublicate=true
            break
         }
        }
    
        if(!dublicate){
            filtered.push(d[i])
        }
    }
    return filtered;
}
let finalPalin = comp(palinArr);
let finalPalin1 = comp(palinArr1);
let finalPalin2 = comp(palinArr2);

console.log(finalPalin)
console.log(finalPalin1)
console.log(finalPalin2)