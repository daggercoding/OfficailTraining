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

array destructuring
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
let array =[1,2,1,3,4,5,6,1,1,1]
let compare=[array[0]]

for(let i=0;i<array.length;i++)
{
    for(let j=0 ; j<i ; j++)
    {
        if(array[i]==compare[j])
        {
            continue
        }
        else{
            compare.push(array[i])
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


let name="vishal"


const onj={
    name:"vishal"
}

let str= new String("vishal");

let str = "hello world";
console.log(str.substr(0,4));


const str = "Hello, world!";
console.log(str.substr(0, 8)); // Output: "Hello"
console.log(str.substr(-6,-3));    // Output: "world!"

let str = "HELLO";
str[0] = "V";
console.log(str);


//======ARRAY TO STRING

const arr =[1,23,4,5,6]
const arrString=arr.toString()
console.log(arrString)

////=========CREATING A NEW ARRAY

const array1=[40]
array1[5] = 80;

// ////=====both are different if we pass a single argument then it decides the length of the array
// const array2=new Array(40)

// console.log(array1)

// console.log(array2.length)

// let a=[1,2,3]
// let b=[3,4,5,6]
// console.log(a.concat(b))

// const fruits = ["Banana", "Orange", "Apple",["vishal",["arbansh"]], "Mango"];
// // delete fruits[0];
// // console.log(fruits)
// console.log(fruits.flat(Infinity))

// const fruits = ["Banana", "Orange", "Apple", "Mango","mango","manggggo"];
// let finevalue = fruits.find(e=>e.charAt(0) =='m');
// console.log(finevalue)
// // console.log(fruits.toString())

// const fruits = ["Banana", "Orange", "Apple", "Mango","mango","manggggo",10,true];

// console.log(typeof fruits.at(-1))

// const fruits = ["Banana", "Orange","Mango", "Apple", "Mango","manggggo","Mango"];
// console.log(fruits.indexOf("Mango",5))

const fruits = ["Banana", "Orange","Mango", "Apple", "Mango","manggggo","Mango",];
console.log(fruits[-1])
console.log(fruits)




//==================GETTERS AND SETTERS IN JS
{
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

