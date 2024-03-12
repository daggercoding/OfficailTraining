const inputForm=document.getElementById("heading")
const divConatiner = document.getElementById("divConatiner")
let id=1
inputForm.addEventListener("submit",(event)=>{
 event.preventDefault()
 const userInput = parseInt(document.getElementById("boxInput").value)
 
 for(let i=1; i<=userInput ; i++)
 {
  const newDiv=document.createElement("div")

  // newDiv.innerText=parseInt(divConatiner.childNodes.length)

  newDiv.innerText=id
  id++  
  newDiv.style.backgroundColor=generateRandomColor()
  divConatiner.appendChild(newDiv)
 }
})

function generateRandomColor()
{
let red=Math.floor(Math.random()*256)
let green=Math.floor(Math.random()*256)
let blue=Math.floor(Math.random()*256)
return `rgb(${red},${green},${blue})`
}

let colordata;

divConatiner.addEventListener("click",(event)=>{
    
    colordata = event.target.style.backgroundColor
//  console.log(event.target.style.backgroundColor)
    document.execCommand("copy");
    
})

  divConatiner.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
      event.clipboardData.setData("text/plain", colordata);
      event.clipboardData.getData("text")
    }
  });


