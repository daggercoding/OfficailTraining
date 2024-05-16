let name=""
document.getElementById("inp").addEventListener("change",(e)=>{
  name=e.target.value
  sayHello(name)
})

function sayHello(name){
 document.getElementById("greet").innerText=name
}

 
   
   