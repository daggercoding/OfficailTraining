////>>>>>>POLYMORPHISM IN JAVASCRIPT IS A CONCEPT WITH THE HELP OF WHICH WE CAN ACHIEVE DIFFERENT FUNCTIONALITIES WITH SAME CODE
//// EXAMPLE 1
function polymorphism(condition, num1, num2) {
  switch (condition) {
    case "add":
      return num1 + num2;
      break;
    case "subtract":
      return num1 - num2;
      break;
    case "multiply":
      return num1 * num2;
      break;
    default:
      return "Please Provide A Valid Condition";
      break;
  }
}
//// here the function is same but it return different values on the basis of different arguments passes to the function
console.log(polymorphism("add", 10, 20));
console.log(polymorphism("subtract", 10, 20));
console.log(polymorphism("multiply", 10, 20));

//// EXAMPLE 2nd
//// By Creating the instance of class we can simply achieve polymorphism
class Factory {
  constructor(name, price, model) {
    this.name = name;
    this.price = price;
    this.model = model;
  }
  getDetails() {
    console.log(`The Name Of Mobile is ${this.name}`);
    console.log(`The Price Of Mobile is ${this.price}`);
    console.log(`The Model Of Mobile is ${this.model}`);
  }
}

//Creating and Instense of the class Factory and access its method by passing different arguments
const Iphone = new Factory("Iphone", 150000, "5G");
Iphone.getDetails();

const Samsung = new Factory("Samsung", 50000, "4G");
Samsung.getDetails();

const Nokia = new Factory("Nokia-2690", 1500, "2G");
Nokia.getDetails();

/* Arror Function in Java Script 
1-> It is one of the short way to write anomnous functions
2-> It do not have its own THIS it borrow or Inherit THIS from its parents It means if we created arrow function in an Object it uses the THIS of that Object
3->If we use a single line Statement the return Keyword place impicitly 
4-> Arrow Functions did not support Hoisting
*/

//Example 1
const obj = {
  name: this,
};
console.log(obj.name);
// if we directly try to acess this inside object THIS refers to the window object because it is in Global Execution Context

//Example 2
const obj2 = {
  name: "vishal singh",
  getContext: function () {
    console.log(this);
  },
};
obj2.getContext();
// here we try to get the value of THIS inside obj2 so here THIS refer to the obj2 because the execution context for getContext function is obj2

//Example 3
const obj3 = {
  name: "vishal singh",
  outer: function () {
    console.log(this);
    let inner = () => {
      console.log(this);
      return { name: "vishal singh" };
    };
    inner();
  },
};
obj3.outer();
// here the THIS of outer functon refer to the obj3 because its execution context is obj3 and we used Arrow function inside outer function so the inner function borrow or inheri THIS from its parent that why Both THIS refer to obj3
