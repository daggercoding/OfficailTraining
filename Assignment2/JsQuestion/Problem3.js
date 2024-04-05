let grid = 20
function noOfRoute(grid){
    let array=[]
    for(let i=0 ; i< grid ; i++){
        array[i]=[]
        array[0][i]=1
        array[i][0]=1
    }
    for(let i=1 ; i<grid ;i++){
        for(let j=1 ; j<grid ;j++)
        {
            array[i][j]=array[i-1][j]+array[i][j-1]
        }
    }
    return array
}

let generatedArray = noOfRoute(grid)

console.log('Generated Array is',generatedArray)
console.log(`The Maximum Possible routes is ${generatedArray[grid-1][grid-1]}`)