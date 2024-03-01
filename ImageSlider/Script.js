let photos
const container =document.getElementById("innerContainer")
fetch("https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=132")
.then((resp)=>resp.json())
.then((data)=>{
    photos=data.photos
    render()
})
.catch((err)=>console.log(err.message))
function render()
{
let count = 0
console.log(photos)
setInterval(()=>{
if(count<=photos.length-1)
{
 document.querySelector("h1").innerText=photos[count].title
    container.innerHTML=`<img height="100%" width="100%" src="${photos[count].url}"/>`
    count++
}
else{
   count=0
   console.log(`else ${count}`)
}
},1)   

}