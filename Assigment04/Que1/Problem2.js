// function subsequence(str1,str2){
// let array =[]
// str1.split("").forEach(string => {
//     // console.log(str2.indexOf("B"))
//     if(str2.includes(string)&&!array.includes(string)){
//      array.push(string)
//     }

// });

// console.log(array)

// }
// subsequence( "ABCBDAB","BDCAB")

// let str1="ABCBDAB"
// let str2= "BDCAB"

// for(let i = 0 ; i <str1.length ; i++){

//     for(let j =0 ;j<str2.length;j++)
//     {

//     }
// }

const str = "ABCBDAB";
const str2 = "BDCAB";

function getNewValue(str1, str2) {
  const finalArr = [];
  let targetIndex = 0;

  const arr2 = str2.split("");

  for (let i = 0; i < str1.length; i++) {
    const arr1 = str1.substr(i).split("");
    arr1.forEach((el) => {
      const indexValue = arr2.indexOf(el);
      if (indexValue != -1 && indexValue > targetIndex) {
        finalArr.push(el);
        targetIndex = indexValue;
      }
    });
    console.log(finalArr);
    targetIndex = 0;
  }

  // return finalArr.join("")
}

console.log(getNewValue(str, str2));
