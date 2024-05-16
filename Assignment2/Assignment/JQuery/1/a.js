$("#one").click(()=>{
    let value =  $("#inpOne").val();
    if(value !=""){
        alert("Your Content Is : " + value)
        $("#inpOne").val("")
    }else{
        alert("enter input first")
    }
})

$("#two").click(()=>{
    let value =  $("#inpTwo").val();
    if(value !=""){
        alert("Your Content Is : " + value)
        $("#inpTwo").val("")
    }else{
        alert("enter input first")
    }
})

$("#three").click(()=>{
    let value =  $("#inpThree").val();
    if(value !=""){
        alert("Your Content Is : " + value)
        $("#inpThree").val("")
    }else{
        alert("enter input first")
    }
})
