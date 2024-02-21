const tableData =document.getElementById("expenseList")
const total = document.getElementById("totalAmount")
const spend = document.getElementById("spend")
const submitButton =document.getElementById("submitButton")
let Cateogory = document.getElementById("expenseCateogory")

//writing the logic to add the budget decided by user
let totalBudget = 0
const budgetInput =  document.getElementById("budgetInput")
budgetInput.addEventListener("change",(event)=>{
  //storing the value of user budget
  let finalBudget = event.target.value
  totalBudget+=parseInt(finalBudget)
  //clearing the input field
  budgetInput.value=""
  //disable the budget input form after user put his budget
  budgetInput.disabled=true
  //inserting the number to the upper div
  const total = document.getElementById("total")
  total.innerText=totalBudget
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
    // console.log("rendering function")
    tableData.innerText=""

    let expenditure = 0 

    for(let i = 0; i<expenseList.length ; i++)
    {
    //sooting the object from the Array
     const expenses = expenseList[i]
     expenditure+= parseInt(expenses.price)??0

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
     const remaining = document.getElementById("remaining")
     remaining.innerText=totalBudget==0?  0  :totalBudget-expenditure
    }
  }

  //writing logic to delete the data from the table
  tableData.addEventListener("click",(event)=>{
    // console.log(typeof parseInt(event.target.textContent))
    if(event.target.classList.contains("deleteBtn"))
    {
      let index =parseInt(event.target.id)
      expenseList.splice(index,1)
      localStorage.setItem("expenseData",JSON.stringify(expenseList))
    }
    
    if(event.target.classList.contains("updateBtn"))
    {
     let dataToUpdate= event.target.parentElement.parentElement
     console.log(dataToUpdate)
    }


    renderList()
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





  
