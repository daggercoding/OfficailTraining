let widthInput= document.getElementById("widthInput")
let heightInput= document.getElementById("heightInput")
let leftInput= document.getElementById("leftInput")
let toptInput= document.getElementById("toptInput")

let newWindow = document.getElementById("newWindow")
let reset = document.getElementById("reset")

newWindow.addEventListener("click",()=>{
     let winRef = window.open("","",`width=${widthInput.value} , height=${heightInput.value} , left=${leftInput.value} , top=${toptInput.value}`)
     winRef.document.body.innerText = "This is the Newly Created Window...";
     winRef.document.body.style.backgroundColor='Bisque'
})

reset.addEventListener("click",()=>{
    widthInput.value="";
    heightInput.value="";
    leftInput.value="";
    toptInput.value="";
})

