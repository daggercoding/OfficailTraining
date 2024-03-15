////==============================================>>>> creating the GRID OF 20*20
////it is used to find the maximum possible pairs horizontal,vertical,diagonal and mltiply all the values 
// let maximum=0
// let grid = [];
// for (let i = 0; i < 20; i++) {
//   let col = [];
//   for (let j = 0; j < 20; j++) {
//     col.push(Math.floor(Math.random()* 10));
//   }
//   grid.push(col);
// }

// for (let row = 0; row < grid.length; row++) {
//   for (let col = 0; col < grid.length; col++) {
//     let productValues = [];
//     let possibleX = [row - 1, row, row + 1];
//     let possibleY = [col - 1, col, col + 1];

//     possibleX.forEach((x) => {
//       if (x >-1 && x < grid.length) {
//         possibleY.forEach((y) => {
//           if (y >-1 && y < grid.length) {
//             productValues.push(grid[x][y]);
//           }
//         });
//       }
//     });

//     let product = 1;
//      productValues.forEach((number)=>{
//      product=product*number
//      console.log(`the intermediate product is ${product}`)
//     })

//     if(maximum<product){
//         maximum=product
//     }
//     console.log(`the maximun product is ${maximum}`)
//   }
// }

// let maximum=0

// const grid=[
//     [1,2,3,4],
//     [1,7,3,5],
//     [1,5,3,6],
//     [1,5,3,6]
// ]

// for(let row=0 ;row<4 ;row++)
// {
//     for(let col=0; col<4; col++)
//     {
//         let newArray=[]
//         let possibleX = [row-1,row,row+1]
//         let possibleY = [col-1,col,col+1]

//         possibleX.forEach(x=>{
//             if(x>-1 && x<4 )
//             {
//             possibleY.forEach(y=>{
//                 if(y>-1 && y<4)
//                 {
//                     newArray.push(grid[x][y])
//                 }
//             })
//             }
//         })
//         let product=1
//         newArray.forEach((num)=>{
//            product=product*num
//         })
//         console.log(product)

//        if(maximum<product)
//        {
//         maximum=product
//        }
//        console.log(`the maximun product is ${maximum}`)
//     }

// }





// let grid1 = [
//     [5, 3, 7, 8, 1, 2, 6, 9, 0, 4, 6, 3, 5, 7, 2, 1, 8, 4, 0, 9],
//     [9, 1, 4, 2, 6, 7, 0, 8, 5, 3, 2, 6, 8, 4, 5, 0, 9, 7, 3, 1],
//     [3, 8, 6, 0, 1, 9, 5, 7, 2, 4, 9, 1, 3, 0, 4, 5, 6, 7, 2, 8],
//     [2, 19, 0, 3, 8, 4, 1, 5, 6, 7, 5, 8, 7, 2, 6, 9, 4, 1, 3, 0],
//     [7, 12, 8, 5, 0, 6, 9, 3, 4, 1, 3, 4, 9, 1, 8, 7, 2, 5, 6, 0],
//     [6, 14, 1, 9, 7, 3, 8, 2, 5, 0, 4, 7, 1, 5, 6, 3, 9, 8, 2, 0],
//     [8, 5, 3, 7, 4, 0, 2, 6, 1, 9, 1, 5, 6, 8, 9, 4, 3, 2, 0, 7],
//     [1, 7, 9, 6, 5, 8, 3, 0, 2, 4, 8, 9, 2, 3, 0, 1, 6, 7, 5, 4],
//     [0, 6, 5, 4, 2, 1, 7, 8, 3, 9, 7, 0, 4, 6, 2, 5, 1, 3, 8, 9],
//     [4, 0, 2, 1, 3, 5, 4, 0, 7, 8, 0, 2, 5, 9, 3, 8, 4, 6, 1, 7],
//     [3, 1, 0, 9, 8, 6, 4, 7, 5, 2, 6, 1, 0, 7, 2, 9, 8, 4, 5, 3],
//     [7, 8, 6, 5, 4, 3, 1, 9, 0, 2, 3, 8, 5, 4, 1, 7, 6, 9, 0, 2],
//     [2, 5, 1, 0, 9, 7, 6, 4, 8, 3, 4, 2, 1, 0, 3, 5, 9, 7, 6, 8],
//     [9, 3, 4, 2, 6, 8, 5, 1, 7, 0, 5, 9, 6, 8, 7, 2, 4, 3, 1, 0],
//     [6, 7, 8, 3, 0, 5, 2, 4, 9, 1, 8, 6, 0, 3, 4, 1, 5, 2, 9, 7],
//     [8, 4, 5, 1, 2, 9, 7, 0, 6, 3, 9, 4, 1, 2, 5, 0, 7, 8, 6, 3],
//     [1, 2, 3, 6, 7, 4, 0, 5, 8, 9, 7, 1, 3, 6, 4, 8, 2, 0, 5, 9],
//     [5, 9, 7, 4, 3, 1, 8, 2, 6, 0, 2, 5, 9, 7, 3, 1, 8, 6, 4, 0],
//     [0, 6, 2, 8, 9, 0, 1, 4, 7, 5, 6, 0, 2, 8, 9, 4, 1, 3, 7, 5],
//     [4, 8, 1, 5, 6, 2, 3, 7, 9, 0, 3, 4, 5, 8, 1, 9, 7, 2, 0, 6]
// ];

// ////==============================================>>>> creating the GRID OF 20*20

// let grid1 = [];
// for (let i = 0; i < 20; i++) {
//   let col = [];
//   for (let j = 0; j < 20; j++) {
//     col.push(Math.floor(Math.random() * 10));
//   }
//   grid1.push(col);
// }
// document.getElementById("data").innerText=JSON.stringify(grid1)

// let gridLocation;
// let direction="";
// let max=0

// for (let row = 0; row < grid1.length; row++) {
//   for (let col = 0; col < grid1.length ; col++) {

//     if (row > 0 && row < grid1.length-1 && col > 0 && col < grid1.length-1) {

//       let verticalHorizontal = grid1[row][col] * grid1[row][col+1] *grid1[row][col-1] *grid1[row+1][col] *grid1[row-1][col];

//       let diagonal = grid1[row][col] *grid1[row+1][col+1] *grid1[row-1][col-1] *grid1[row+1][col-1] *grid1[row-1][col+1];
 
//       let[maxProduct,directions] = maxGrid(verticalHorizontal, diagonal);
//       if(max<maxProduct)
//       {
//         max=maxProduct
//         gridLocation=`Row:${row} Col:${col}`
//         direction=directions
//       }

//     }
//   }
// }

// document.getElementById("result").innerText=(`Maximum Product is : ${max} || Element location is : ${gridLocation} || Direction is : ${direction}`);

// function maxGrid(verticalHorizontal,diagonal) {
//     if (verticalHorizontal > diagonal) {
//         return [verticalHorizontal,"verticalHorizontal"];
//     } else {
//         return [diagonal,"diagonal"];
//     }
// }
