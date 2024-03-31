row=10
for(let i=1 ; i<=row ; i++){
  let space =""
  for(let j=0 ; j<row-i ; j++){
    space+=" "
  }
  let star = ""
  for (let k=0 ; k<2*i-1 ; k++){
    star+="*"
  }
  console.log(space,star)
}