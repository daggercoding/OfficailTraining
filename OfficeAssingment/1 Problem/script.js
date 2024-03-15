let photos
const container= document.getElementById("container")

fetch("https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=100")
.then((resp)=>resp.json())
.then((data)=>{
    photos=data.photos
    render()
})
.catch((err)=>console.log(err.message))

function render()
{
console.log(photos)
for(let i =0 ; i<photos.length ; i++)
{
    const newDiv=document.createElement("div")
    newDiv.classList.add("innerContainer")
    newDiv.innerHTML=`
       <img src="${photos[i].url}">
        <h1 id="title">${photos[i].title}</h1>
        <p id="discription">Description : ${photos[i].description}</p>
    `
    container.appendChild(newDiv)  
}
}
