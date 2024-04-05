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
