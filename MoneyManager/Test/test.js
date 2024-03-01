////==========================OBJECTS=========================================>>>>>>>

// let name="vishal singh"

// const obj ={
//     name:"testing1",
//     age:24,
// }

// obj[name]="vishal singh raj"

// console.log(obj[name])

// const obj1={
//     0:"vishal singh"
// }
// console.log(obj1["0"])

//===================rest operator

// function print(name,...vishal){
//     console.log(name)
//   vishal.map(num=>console.log(num))
// }

// // print("vishal",1,2,3,4,5)
// const obj4={name:"hargfghdshita rajawat",age:25,gender:"male"}
// const obj1={name:"vishal",age:24}
// const obj2={name:"harjit singh  ",age:24}
// const obj3={name:"harshita rajawat",age:25}

// const newObj=Object.assign(obj4,obj1)
// console.log(newObj)

// const obj1={name:"vishal",age:24,gender:"Male"}
// const obj2={name:"harjit singh  ",age:24}
// const obj3={name:"harshita rajawat",age:25}

// /////======================create a new refence pointing to tha different reference

// // const newObj ={...obj1}
// // newObj.life="simple"
// // console.log(newObj)
// // console.log(obj1)

// /////======================not create a new refence pointing to tha same
// const newObj1 = Object.assign(obj1)
// newObj1.life="simple"
// console.log(newObj1)
// console.log(obj1)

// // let name="vishal"
// // let newName = [...name]

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((resp)=>resp.json())
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err.message))

// async function getdata(){

//       let response= await fetch("https://jsonplaceholder.typicode.com/users")
//       let data = await response.json()
//       console.log(data)
// }

// getdata()

// function add() {
//     let counter = 0;
//     counter += 1;
//     console.log(counter)
//   }

//   // Call add() 3 times
//   add();
//   add();
//   add();

//   function add() {
//     let counter = 0;
//     function plus() {counter += 1;}
//     plus();
//     return counter;
//   }
//   let count=add()
//   console.log(count)
//   const employe = {
//     role:"developer",
//     name:"something"
//   }
//   function vishal(name ,age){
//     console.log(`the name is ${name} ${ age }  and role is ${this.role}` )
//   }

// //  let role="developer"

//  vishal.apply(employe , ["john" , 88]);

// // Using arrow function
// const person = {
//     name: 'Alice',
//     greet: function(name) {
//         const greetFunction = (name) => {
//             console.log(`Hello, ${name}! My name is ${this.name}.`);
//         };
//         greetFunction(name);
//     }
// };

// person.greet('Bob'); // Output: Hello, Bob! My name is Alice.

// console.log(age)

// var age=24

// function abc()
// {
//     console.log("hi")
// }

// function hello() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (2 == 2) {
//         resolve("it is equal");
//       } else {
//         reject("IT IS NOT EQUAL");
//       }
//     }, 2000);
//   });
// }
// hello().then(data=>console.log(data)).catch(data=>console.log(data))
// console.log("before asyncronus code");

// function hello() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (2 != 2) {
//         resolve("it is equal");
//       } else {
//         reject("not equal");
//       }
      
//     }, 2000);
//     console.log("hello hello")
//   });
// }
// hello().then(data=>console.log(data)).catch(err=>console.log(err))

// console.log("after asyncronus code");


////===========================CALL BIND AND APPLY============================>>>>>

// let value=10
// const obja = {
//   name:"vishal singh",
//   age:24
// }

// function hello(n,a,m)
// {
// console.log(`my name is ${this} ${n} ${a} ${m}`)
// }

// const obja2 = {
//   name:"harshita",
//   age:24
// }

// let hell=hello.bind(value)
// hell(12,22,33)


// let age = 10

// let person1={
//   name:"vishal singh",
//   age:24,
//   calcAge:function(){
//   console.log(this.age)
//   }
// }

// let person2={
//   name:"harshita rajawat",
//   age:26
// }

// person1.calcAge.call(person2)
// person1.calcAge()

// var status="hi"

// setTimeout(()=>{
//   const obj={
//     status:"hello",
//     getStatus(){
//       console.log(this.status)
//     }
//   }
//   obj.getStatus()
//   obj.getStatus.call(this)

// },2000)


let arr=[1,2,3,4,5,6]

let newArr=arr.with(2,10)
console.log(newArr)
