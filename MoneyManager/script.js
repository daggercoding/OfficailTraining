const tableData =document.getElementById("expenseList")
const total = document.getElementById("totalAmount")
const spend = document.getElementById("spend")

//A blank array to store the data of input fields
let expenseList = [
  {
  cateogory:"testing",
  price:0,
  date:30
},
]

document.getElementById("expense-form").addEventListener("submit", function (e) {

   e.preventDefault();
  //  console.log("form function")

    //here we were getting the elements by its id
    let Cateogory = document.getElementById("expenseCateogory")
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
     expenditure+= parseInt(expenses.price)
     console.log(expenditure)
    
     const newRow = document.createElement("tr")
     newRow.innerHTML=`
     <td>${expenses.cateogory}</td>
     <td>${expenses.price}</td>
     <td>${expenses.date}</td>
     <td><button>Click me </button></td>
     `
     tableData.appendChild(newRow)
     total.innerText=expenditure
     spend.innerText=expenditure
    }
  }

  //calling the function to show the data INITIALLY
  renderList()



  
