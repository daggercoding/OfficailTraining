// // // function subsequence(str1,str2){
// // // let array =[]
// // // str1.split("").forEach(string => {
// // //     // console.log(str2.indexOf("B"))
// // //     if(str2.includes(string)&&!array.includes(string)){
// // //      array.push(string)
// // //     }

// // // });

// // // console.log(array)

// // // }
// // // subsequence( "ABCBDAB","BDCAB")

// // // let str1="ABCBDAB"
// // // let str2= "BDCAB"

// // // for(let i = 0 ; i <str1.length ; i++){

// // //     for(let j =0 ;j<str2.length;j++)
// // //     {

// // //     }
// // // }

// // const str = "ABCBDAB";
// // const str2 = "BDCAB";

// // function getNewValue(str1, str2) {
// //   const finalArr = [];
// //   let targetIndex = 0;

// //   const arr2 = str2.split("");

// //   for (let i = 0; i < str1.length; i++) {
// //     const arr1 = str1.substr(i).split("");
// //     arr1.forEach((el) => {
// //       const indexValue = arr2.indexOf(el);
// //       if (indexValue != -1 && indexValue > targetIndex) {
// //         finalArr.push(el);
// //         targetIndex = indexValue;
// //       }
// //     });
// //     console.log(finalArr);
// //     targetIndex = 0;
// //   }

// //   // return finalArr.join("")
// // }

// // console.log(getNewValue(str, str2));

// //////////////////////////////////////////////////////////////////
// // const str = "ABCBDAB";
// // const str2 = "BDCAB";

// // function getNewValue(str1, str2) {
// //   let finalArr = [];
// //   let targetIndex = 0;
// //   const arr2 = str2.split("");

// //   for (let i = 0; i < str1.length; i++) {
// //     const arr1 = str1.substr(i).split("");
// //     arr1.forEach((el, index) => {
// //       const indexValue = arr2.indexOf(el);
// //       if (indexValue != -1 && indexValue != targetIndex) {
// //         finalArr.push(el);
// //         targetIndex = indexValue;
// //       }
// //     });
// //     console.log(finalArr);
// //     targetIndex = 0;
// //     finalArr = []
// //   }

// //   // return finalArr.join("")
// // }

// // console.log(getNewValue(str, str2));

// const str = "AGGTAB";
// const str2 = "GXTXAYB";

// function getAllIndexes(arr, val) {
//   var indexes = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === val) {
//       indexes.push(i);
//     }
//   }
//   return indexes;
// }

// function getNewValue(str1, str2) {
//   let finalArr = [];

//   let arr2 = str2.split("");

//   for (let i = 0; i < str1.length; i++) {
//     const arr1 = str1.substr(i).split("");
//     let targetIndex = -1;
//     arr1.forEach((el, index) => {
//       let arr2Copy = [...arr2];

//       const allPossibleIndex = getAllIndexes(arr2Copy, el);
//       // console.log({allPossibleIndex})
//       const indexValue = arr2Copy.indexOf(el);

//       //   allPossibleIndex.forEach(indexValue => {
//       //       if (indexValue > -1 && indexValue > targetIndex || indexValue == 0 && targetIndex < 1) {
//       //           finalArr.push(el);
//       //          targetIndex = indexValue;

//       //   }
//       //   })

//       for (let j = 0; j < allPossibleIndex.length; j++) {
//         if (
//           (allPossibleIndex[j] > -1 && allPossibleIndex[j] > targetIndex) ||
//           (allPossibleIndex[j] == 0 && targetIndex < 1)
//         ) {
//           finalArr.push(el);
//           targetIndex = allPossibleIndex[j];
//           break;
//         }
//       }
//     });
//     console.log(finalArr);
//     //  const newArrReturn = arr2.slice(targetIndex)
//     //  console.log(newArrReturn)
//     targetIndex = 0;
//     finalArr = [];
//   }

//   // return finalArr.join("")
// }

// console.log(getNewValue(str, str2));

const str = "AGGTAB";
const str2 = "GXTXAYB";
const allMatch = []

function getAllIndexes(arr, val) {
    var indexes = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            indexes.push(i);
        }
    }
    return indexes;
}


function getNewValue(str1, str2) {
  let finalArr = [];
  
  let arr2 = str2.split("");

  for (let i = 0; i < str1.length; i++) {
    const arr1 = str1.substr(i).split("");
    let targetIndex = -1;
    arr1.forEach((el, index) => {
        let arr2Copy = [...arr2]
        const allPossibleIndex = getAllIndexes(arr2Copy, el)
      for (let j = 0; j < allPossibleIndex.length; j++ ){
          
          if (allPossibleIndex[j] > -1 && allPossibleIndex[j] > targetIndex || allPossibleIndex[j] == 0 && targetIndex != allPossibleIndex[j] && targetIndex < 1) {
              finalArr.push(el);
             targetIndex = allPossibleIndex[j];
             break;
      }
      }
    });
    
    allMatch.push(finalArr.join(""))
    targetIndex = 0; 
    finalArr = []
  }
}

getNewValue(str, str2);

console.log(allMatch)

let longestMatchStr = ""

allMatch.forEach(targetStr => {
    if (targetStr.length > longestMatchStr.length) {
        longestMatchStr = targetStr
    }
})

console.log({longestMatchStr})
