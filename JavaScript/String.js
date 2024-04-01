let name = "my name is vishal singh"
//capitialize first letter of each word
let converted=name.split(" ").map(el=>el.charAt(0).toUpperCase()+ el.substr(1))
console.log(converted.join(" "))








