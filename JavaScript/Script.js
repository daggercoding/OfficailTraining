function walk(callback) {
  setTimeout(() => {
    console.log("i am goind on walk");
    callback();
  }, 2000);
}

function gym(callback) {
  setTimeout(() => {
    console.log("i am goind to gym");
    callback();
  }, 2000);
}

function study(callback) {
  setTimeout(() => {
    console.log("i am going to study");
    callback();
  }, 2000);
}

function fun(callback) {
  setTimeout(() => {
    console.log("i am going to FUN");
    callback();
  }, 2000);
}

walk(() => {
  gym(() => {
    study(() => {
      fun(() => {
        setTimeout(() => {
          console.log("ALL THE TASKS WERE COMPLETED");
        }, 3000);
      });
    });
  });
});

function test()
{
    setTimeout(()=>{
        console.log("hello everyone")
        setTimeout(()=>{
            function innerFunc()
            {
                console.log("inside main func")
            }
            innerFunc()
        },3000)
    },2000)
}
test()
function test() {
  console.log("hello everyone");

  function innerFunc() {
    console.log("inside main func");
  }
  innerFunc();
}
test();

////array destructuring
let array = [1,2,3,4,5,6]
let[,,,n1,n2,n3]=array
console.log(n1,n2,n3)

function name(num1, num2, ...vishal) {
    let array = [];
    for (let arg of arguments) {
        array.push(arg + 1); // Increment each argument by 1 and push into the array
    }
    console.log(array);
}

name(1, 2, 3, 4, 5, 6, "vishal", "singh");
let myMap = new Map();
myMap.set('a', 1);
myMap.set('b', 2);
myMap.set('c', 3);
console.log(myMap)
debugger


let array0 =[1,2,1,3,4,5,6,1,1,1]
let compare=[array0[0]]

for(let i=0;i<array0.length;i++)
{
    for(let j=0 ; j<i ; j++)
    {
        if(array0[i]==compare[j])
        {
            continue
        }
        else{
            compare.push(array0[i])
        }
    }

}
console.log(compare)
function removeDuplicates(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === i) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

let arr = [1, 2, 3,1,23, 4, 5, 5];
let uniqueArr = removeDuplicates(arr);
console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]

var name = "harjit"

const obj1={
    name:"cat",
    age:44
}
const obj2={
    name:"dog",
    age:44
}
function oK(a,b){
    console.log(a);
    console.log(b)
    console.log(this.name);
}

oK.call(obj1,12,13)
oK.apply(obj2,[13,14])
const Jk=oK.bind(obj2)
Jk(1234,3455)
Jk(12345678,8765432)
Jk(12345678901234567890,12345678909876543234567890)

const str = "Hello, world!";
console.log(str.substr(0, 8)); // Output: "Hello"
console.log(str.substr(-6,-3));    // Output: "world!"

let str1= "HELLO";
str[0] = "V";
console.log(str);

//======ARRAY TO STRING

const arr1 =[1,23,4,5,6]
const arrString=arr1.toString()
console.log(arrString)

////=========CREATING A NEW ARRAY

const array1=[40]
array1[5] = 80;

////=====both are different if we pass a single argument then it decides the length of the array
const array2=new Array(40)

console.log(array1)

console.log(array2.length)

let a=[1,2,3]
let b=[3,4,5,6]
console.log(a.concat(b))

const fruits0 = ["Banana", "Orange", "Apple",["vishal",["arbansh"]], "Mango"];
// delete fruits[0];
// console.log(fruits)
console.log(fruits0.flat(Infinity))

const fruits1 = ["Banana", "Orange", "Apple", "Mango","mango","manggggo"];
let finevalue = fruits1.find(e=>e.charAt(0) =='m');
console.log(finevalue)
// console.log(fruits.toString())

const fruits2 = ["Banana", "Orange", "Apple", "Mango","mango","manggggo",10,true];

console.log(typeof fruits2.at(-1))

const fruits3 = ["Banana", "Orange","Mango", "Apple", "Mango","manggggo","Mango"];
console.log(fruits3.indexOf("Mango",5))

const fruits = ["Banana", "Orange","Mango", "Apple", "Mango","manggggo","Mango",];
console.log(fruits[-1])
console.log(fruits)

//==================GETTERS AND SETTERS IN JS

const newObject={
  fname:"vishal",
  lname:"singh",
  get fullname(){
   return `MY NAME IS ${this.fname} ${this.lname}`
  },
  set fullname(value){
  let name = value.split(" ")
  this.fname=name[0]
  this.lname=name[1]
  },
  test(){
    console.log("I AM ONLY FOR TESTING PURPOSE")
  }
}

newObject.fullname="harjit singh"

////you can normaly acess the value as a property
console.log(newObject.fullname)
////you will have to use the () to invoke the function
console.log(newObject.test())

let name1 ="yaaaaay"
let name2 =""

for(let i = name1.length-1; i>=0; i--){

  name2+=name1[i]

}
if(name1.toUpperCase() === name2.toUpperCase()){
  console.log("it si palindrom")
}else{
  console.log("dhang ki vlaue de")
}


////=================================================>>>>> find prime number

function isPrime(num)
{
    for(let i=2 ; i<num ; i++)
    {
        if(num%i==0)
        {
            return `${num} is not a prime number`
        }
    }
    return `${num} is a prime number`
}

let number=100
for(let i=1 ; i<=number ;i++)
{
    console.log(isPrime(i))
}

//=================================find the maximum and minimum
function minMax(arr) {
    let min=arr[0]
    let max=arr[0]
    for(let i=0 ; i<arr.length ; i++)
    {
        if(arr[i]<min){
            min=arr[i]

        }

        if(arr[i]>max)
            {
                max=arr[i]
            }
        }
       return [min,max]

   }
   minMax([1,2,343,21])

//// =======================================>>>>>> FIND THE SECOND LARGEST OF THE ARRAY

function findSecondLargest(array){
//defining the initial value for comaprison
let maximum=-Infinity
let secondMaximum = -Infinity

if(array.length>1)
{
    array.forEach((value)=>{
        if(value>maximum)
        {
          secondMaximum=maximum
          maximum=value
      
        }else if(value>secondMaximum&&value!=maximum){
          secondMaximum = value
        }
      })
       return secondMaximum
}
else{
    console.log("please provide a valid Array")
}

}
// Example usage:
const numbers = [10, 5938248,832,48324,49320432];
console.log("Second largest number:", findSecondLargest(numbers));

////======================================>>>>>>>finding id any value contain 7

function sevenBoom(arr) {
	let isPresent=false
	arr.forEach((num)=>{
		
		if((num.toString().split("").includes("7")))
			{
				isPresent=true
			}
	})
	if(isPresent){
		return 'Boom!'
	}
	else{
		return 'there is no 7 in the array'
	}
}

sevenBoom(887)

/*Create a function that returns true if the first array can be nested inside the second and false otherwise.

arr1 can be nested inside arr2 if:

arr1's min is greater than arr2's min.
arr1's max is less than arr2's max. */

function canNest(arr1, arr2) {
	let minimum=arr1[0]
	let maximum=arr1[0]
	
  let minimum1=arr2[0]
	let maximum1=arr2[0]
	arr1.forEach(num=>{
		if(num<minimum){
			minimum=num
		}
		if(num>maximum){
			maximum=num
		}
		
	})
    arr2.forEach(num=>{
		if(num<minimum){
			minimum1=num
		}
		if(num>maximum){
			maximum1=num
		}
		
	})
    if(minimum>minimum1&&maximum<maximum1){
        return true
    }
	  return false	
}
canNest([1,2,3,42,2,1,5],[1,2])



function combine(obj,name,value)
{
obj[name]=value
return obj
}

console.log(combine({},"vishal",20))



function sevenBoom(arr) {
	if(arr.toString().includes("7"))
		{
			return "Boom!";
		}
    return  'there is no 7 in the array'
}
console.log(sevenBoom([1,2,3,4,5,6]))


function triangular(n)
{
    return n*(n+1)/2
}