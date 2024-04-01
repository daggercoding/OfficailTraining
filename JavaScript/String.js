let name = "my name is vishal singh"
//capitialize first letter of each word
let converted=name.split(" ").map(el=>el.charAt(0).toUpperCase()+ el.substr(1))
console.log(converted.join(" "))


let name1 = "vishal singh is my name"
let count = 0
for(let val of name1){
    if(val=="v"){
        count++
    }
    
}
console.log(count)
let name1 = "vishal"
console.log(name1.substring(2,4))
console.log(name1)




