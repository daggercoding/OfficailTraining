
let arr = [0,21,1,1,1,1,1,1,1,123,999,1,420,0,7437477,323434,2,2,312,54,3,43,41,23,21,3,2,4,34,3,5,45,324,3];

let first=-1
let second=-1
let third=-1

for(let i=0; i<arr.length;i++){
    if(arr[i]>first){
        third=second
        second=first
        first=arr[i]
    }
    else if( arr[i]>second ){
        third=second;
        second=arr[i]
    }
    else if(arr[i]>third){
        third=arr[i];
    }
}
console.log(first,second,third)

var obj = {
	a: "hello world",
	b: 42
};

var b = "a";

console.log(obj[b]);			// "hello world"
console.log(obj["b"]);		// 42

let name = "vishal"
let n=1
console.log(name.charAt(n))


let test = "vishal"
console.log(test.includes("v"))

