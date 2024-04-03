
let str = 'vishal'

;
let arr = []
let arr1=[]
let arr2 = []


for(let i=0; i<str.length; i++){
    
   for(let j=0; j<str.length; j++){
 
    for(let k=0; k<str.length; k++){
        for(let l=0; l<str.length; l++){
          
            arr.push(str[i]+ str[j]+ str[k]+str[l]);
            arr.push(str[i]+ str[j]+ str[k]);
            arr.push(str[i]+ str[j]);
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
// console.log(finalPalin1)
// console.log(finalPalin2)

// let string = "abababababa"

// function largestPalindrome(s){
//     if(s.length<2){
//         return s
//     }
//     let start=0
//     let maximum =1

//     function expand(left,right){
//         while(s[left]==s[right] && left>=0 && right<s.length ){
//             if(right-left+1>maximum){
//                 start=left;
//                 maximum=right-left+1
//             }
//             left-=1
//             right+=1
//         }
//     }
//     for(let i=0; i<s.length;i++){
//         expand(i-1,i+1)
//     }
//     return maximum
// }

// console.log(largestPalindrome(string))

// let string = "madamamamamam"

// function checkPalindrome(s){
//     if(s.length<2){
//         return s
//     }
//     let start=0
//     let maximum=1
//     function inter(left,right){
//       while(s[left]==s[right]&&left>=0&&right<s.length){
//         if(right-left+1>maximum){
//             start=left
//             maximum=right-left+1
//         }
//         left-=1
//         right+=1
//       }
//     }
//     for(let i=0 ; i<s.length ; i++){
//         inter(i-1,i+1)
//     }
//     return maximum
// }
// console.log(checkPalindrome(string))