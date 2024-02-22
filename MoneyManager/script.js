const tableData =document.getElementById("expenseList")
const total = document.getElementById("totalAmount")
const spend = document.getElementById("spend")
const submitButton =document.getElementById("submitButton")
const Cateogory = document.getElementById("expenseCateogory")
const remaining = document.getElementById("remaining")
const totalCard = document.getElementById("total")
const budgetInput =  document.getElementById("budgetInput")
//Getting Elements to Update the Value
// const updateCateogoryinput=document.getElementById("updateCateogory")
// const updateOptioninput=document.getElementById("updateCateogoryOption")

const updateCateogoryinput=document.getElementById("updateCateogory")
const updatePriceinput=document.getElementById("updatePrice")
const updateDateinput=document.getElementById("updateDate")
//GETTING THE ELEMNTS OF UPDATE FORM 
const updateForm=document.getElementById("updateContainer")

let totalBudgetFromLocalStorage=JSON.parse(localStorage.getItem("totalBudget"))
if(totalBudgetFromLocalStorage){
 totalCard.innerText=totalBudgetFromLocalStorage
}

//writing the logic to add the budget decided by user
let totalBudget
budgetInput.addEventListener("change",(event)=>{
  //storing the value of user budget
  let finalBudget = event.target.value
  totalBudget=parseInt(finalBudget)

  localStorage.setItem("totalBudget",JSON.stringify(totalBudget))
  totalBudgetFromLocalStorage = totalBudget
  //clearing the input field
  budgetInput.value=""
  //disable the budget input form after user put his budget
  budgetInput.disabled=true
  //inserting the number to the upper div
  totalCard.innerText=totalBudget
  renderList()
})


//writing the logic to add the userCateogory decided by user

let userCateogory= document.getElementById("userCateogory")
userCateogory.addEventListener("change",(event)=>{
 const usercateogory = event.target.value
 let newOption = document.createElement("option")
    newOption.value=usercateogory;
    newOption.textContent=usercateogory;
    newOption.selected=usercateogory;
    Cateogory.appendChild(newOption)
  //removing the value of the input field
    userCateogory.value=""
})


//A blank array to store the data of input fields
let expenseList = JSON.parse(localStorage.getItem("expenseData")) ?? []
document.getElementById("expense-form").addEventListener("submit", function (e) {
   e.preventDefault();
    //here we were getting the elements by its id
    // let Cateogory = document.getElementById("expenseCateogory")
    let Price = document.getElementById("expensePrice")
    let Date = document.getElementById("expenseDate")
    

    //input fields ki value ko store kar rahe hai
    let cateogory = Cateogory.value
    let price = Price.value
    let date =Date.value


    //input field ki values ko clear kar rahe hai 
    Cateogory.value = ""
    Price.value = ""
    Date.value = ""

    //now create a fresh object using the data which we have
    const currentExpense =
    {
      cateogory,
      price,
      date
    }
    //now push the created object in the array
    expenseList.push(currentExpense)
    localStorage.setItem("expenseData",JSON.stringify(expenseList))
    renderList()
  });
 
  // function to render the newly created data in the Table
  function renderList()
  {
    tableData.innerText=""
    //if our array length = 0
    let expenditure = 0 
    if(expenseList.length==0){
      total.innerText=0
      spend.innerText=0
      remaining.innerText=totalBudgetFromLocalStorage
    }
    for(let i = 0; i<expenseList.length ; i++)
    {
    //sooting the object from the Array
     const expenses = expenseList[i]
     expenditure+= parseInt(expenses.price)

     const newRow = document.createElement("tr")
     newRow.innerHTML=`
     <td id="cat">${expenses.cateogory}</td>
     <td id="pri">${expenses.price}</td>
     <td id="dat">${expenses.date}</td>
     <td><span id=${i} style="cursor:pointer" class="material-symbols-outlined deleteBtn">
     delete
     </span>
     <span id=${i} style="cursor:pointer" class="material-symbols-outlined updateBtn">
     sync_alt
     </span></td>

     `
     tableData.appendChild(newRow)
     total.innerText=expenditure
     spend.innerText=expenditure

     //inserting the remaining amount to third div
     remaining.innerText=totalBudgetFromLocalStorage==0? 0  :totalBudgetFromLocalStorage-expenditure
    }
  }
  //created common Variable to store the index number
  let indexToUpdate
  //writing logic to delete the data from the table
  tableData.addEventListener("click",(event)=>{
    // console.log(typeof parseInt(event.target.textContent))
    if(event.target.classList.contains("deleteBtn"))
    {
      let index =parseInt(event.target.id)
      expenseList.splice(index,1)
      localStorage.setItem("expenseData",JSON.stringify(expenseList))
    }
    
    //WRITING LOGIC TO UPDATE THE DATA IN THE MODAL
    if(event.target.classList.contains("updateBtn"))
    {
    const updateCateogory = expenseList[event.target.id].cateogory
    const upadatePrice = expenseList[event.target.id].price
    const updateDate = expenseList[event.target.id].date
    indexToUpdate = event.target.id
    console.log(+indexToUpdate)
    console.log(updateCateogory,upadatePrice,updateDate)
    // updateCateogoryinput.option.value=updateCateogoryinput
    ////<this code is implimented if we want to update with SELECT instead of INPUT>
    // updateCateogoryinput.value=updateCateogory
    // updateOptioninput.textContent=updateCateogory
    // console.log("value",updateOptioninput.value)
    // console.log("textContent",updateOptioninput.textContent)

    updateCateogoryinput.value=updateCateogory
    updatePriceinput.value=upadatePrice
    updateDateinput.value=updateDate
  }
    renderList()
  })
  
  updateForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    const finalOptionToUpdate=updateCateogoryinput.value
    const finalPriceToUpdate=updatePriceinput.value
    const finalDateToUpdate=updateDateinput.value
    // console.log(finalOptionToUpdate,finalPriceToUpdate,finalDateToUpdate)
    const updatedExpense =
    {
      cateogory:finalOptionToUpdate,
      price:finalPriceToUpdate,
      date:finalDateToUpdate
    }
    console.log(updatedExpense)
    console.log(expenseList[indexToUpdate])
    //CLEARING THE INPUT FIELDS AFTER THE SUBMISSION
    updateCateogoryinput.value=""
    updatePriceinput.value=""
    updateDateinput.value=""

  })

  //calling the function to show the data INITIALLY
  renderList()


  //rough data

  // if(totalBudget-expenditure<=0)
  //    {
  //     alert("Your Credit Limit is Over :(")
  //     return;
  //    }


////
//created the array of user input
////

  //  cateogoryArray.push(usercateogory)
//  cateogoryArray.map((name)=>{
//     let newOption = document.createElement("option")
//     newOption.value=name;
//     newOption.textContent=name;
//     Cateogory.appendChild(newOption)
//  })





  
