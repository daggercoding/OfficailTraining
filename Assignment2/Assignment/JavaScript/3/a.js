const form = document.getElementById("container")

let inputField = document.getElementById("letter")

inputField.addEventListener("keydown",()=>{
    if(inputField.value.length>0){
    inputField.readOnly=true
    }
 })


form.addEventListener("submit",(e)=>{
    e.preventDefault()
 let userWord = document.getElementById("word").value
 let userLetter = document.getElementById("letter").value
 let wordwithoutSpace = userWord.split(" ").join("")
 const result = document.getElementById("result")
 result.innerText=`The First Occurance is at ${wordwithoutSpace.indexOf(userLetter)} index \n The Last Occurance is at ${wordwithoutSpace.lastIndexOf(userLetter)} index`

 document.getElementById("word").value=""
 document.getElementById("letter").value=""
 inputField.readOnly=false
})




































































































