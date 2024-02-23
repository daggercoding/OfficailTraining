const tableData = document.getElementById("expenseList");
const total = document.getElementById("totalAmount");
const spend = document.getElementById("spend");
const submitButton = document.getElementById("submitButton");
const Cateogory = document.getElementById("expenseCateogory");
const remaining = document.getElementById("remaining");
const totalCard = document.getElementById("total");
const budgetInput = document.getElementById("budgetInput");
let userDefineCateogory = document.getElementById("userCateogory");
//Getting Elements to Update the Value
// const updateCateogoryinput=document.getElementById("updateCateogory")
// const updateOptioninput=document.getElementById("updateCateogoryOption")

const updateCateogoryinput = document.getElementById("updateCateogory");
const updatePriceinput = document.getElementById("updatePrice");
const updateDateinput = document.getElementById("updateDate");
//GETTING THE ELEMNTS OF UPDATE FORM
const updateForm = document.getElementById("updateContainer");
const updateCancelButton = document.getElementById("updateCancelButton");

//// Creating a PreExesting Category // Get data From Local Storage // Set Data in Local Storage if Local Storage does Not Contain the KEY-----------------------------
let existingCateogory = ["Shopping", "Grocery", "Travel", "Netflix"];
let existingCateogoryFromLocalStorage =
  JSON.parse(localStorage.getItem("existingCateogory")) ?? [];
// console.log(existingCateogoryFromLocalStorage.length);
if (existingCateogoryFromLocalStorage.length == 0) {
  localStorage.setItem("existingCateogory", JSON.stringify(existingCateogory));
  existingCateogoryFromLocalStorage = JSON.parse(
    localStorage.getItem("existingCateogory")
  );
  // console.log(existingCateogoryFromLocalStorage);
}
for (let i = 0; i < existingCateogoryFromLocalStorage.length; i++) {
  const options = document.createElement("option");
  options.value = existingCateogoryFromLocalStorage[i];
  options.textContent = existingCateogoryFromLocalStorage[i];
  Cateogory.append(options);
}

let totalBudgetFromLocalStorage = JSON.parse(
  localStorage.getItem("totalBudget")
);
if (totalBudgetFromLocalStorage) {
  totalCard.innerText = totalBudgetFromLocalStorage;
}

//writing the logic to add the budget decided by user
let totalBudget;
budgetInput.addEventListener("change", (event) => {
  //storing the value of user budget
  let finalBudget = event.target.value;
  totalBudget = parseInt(finalBudget);

  localStorage.setItem("totalBudget", JSON.stringify(totalBudget));
  totalBudgetFromLocalStorage = totalBudget;
  //clearing the input field
  budgetInput.value = "";
  //disable the budget input form after user put his budget
  budgetInput.disabled = true;
  //inserting the number to the upper div
  totalCard.innerText = totalBudget;
  renderList();
});

//writing the logic to add the userCateogory decided by user

userDefineCateogory.addEventListener("change", (event) => {
  let usercateogory = event.target.value.trim();
  usercateogory =
    usercateogory.charAt(0).toUpperCase() +
    usercateogory.substr(1).toLowerCase();

  if (
    !usercateogory ||
    existingCateogoryFromLocalStorage.includes(usercateogory)
  ) {
    existingCateogoryFromLocalStorage.includes(usercateogory)
      ? alert("Category Already Exist")
      : alert("Please Enter Something");
  } else {
    // console.log("before push",existingCateogory)
    existingCateogoryFromLocalStorage.push(usercateogory);
    // console.log("after push",existingCateogory)

    localStorage.setItem(
      "existingCateogory",
      JSON.stringify(existingCateogoryFromLocalStorage)
    );
    const options = document.createElement("option");
    options.textContent = usercateogory;
    options.value = usercateogory;
    Cateogory.append(options);
    // console.log("after the option inseted", existingCateogory);
    // console.log("local Storage", existingCateogoryFromLocalStorage);
  }
  //  let newOption = document.createElement("option")
  //     newOption.value=usercateogory;
  //     newOption.textContent=usercateogory;
  //     newOption.selected=usercateogory;
  //     Cateogory.appendChild(newOption)
  //removing the value of the input field
  userDefineCateogory.value = "";
});

//A blank array to store the data of input fields
let expenseList = JSON.parse(localStorage.getItem("expenseData")) ?? [];
document
  .getElementById("expense-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    //here we were getting the elements by its id
    // let Cateogory = document.getElementById("expenseCateogory")
    let Price = document.getElementById("expensePrice");
    let Date = document.getElementById("expenseDate");

    //input fields ki value ko store kar rahe hai
    let cateogory = Cateogory.value;
    let price = Price.value;
    let date = Date.value;

    //input field ki values ko clear kar rahe hai
    Cateogory.value = "";
    Price.value = "";
    Date.value = "";

    //now create a fresh object using the data which we have
    const currentExpense = {
      cateogory,
      price,
      date,
    };
    //now push the created object in the array
    expenseList.push(currentExpense);
    localStorage.setItem("expenseData", JSON.stringify(expenseList));
    renderList();
  });
// function to render the newly created data in the Table
function renderList() {
  tableData.innerText = "";
  //if our array length = 0
   let expenditure = 0;
  if (expenseList.length == 0) {
    total.innerText = 0;
    spend.innerText = 0;
    remaining.innerText = totalBudgetFromLocalStorage;
  }
  for (let i = 0; i < expenseList.length; i++) {
    //sooting the object from the Array
    const expenses = expenseList[i];
    expenditure += parseInt(expenses.price);

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
     <td id="cat">${expenses.cateogory}</td>
     <td id="pri">${expenses.price}</td>
     <td id="dat">${expenses.date}</td>
     <td><span id=${i} style="cursor:pointer" class="material-symbols-outlined deleteBtn">
     delete
     </span>
     <span id=${i} style="cursor:pointer" class="material-symbols-outlined updateBtn">
     sync_alt
     </span></td>
     `;
    tableData.appendChild(newRow);
    total.innerText = expenditure;
    spend.innerText = expenditure;

    //inserting the remaining amount to third div
    remaining.innerText =
      totalBudgetFromLocalStorage == 0
        ? 0
        : totalBudgetFromLocalStorage - expenditure;
  }
}
//created common Variable to store the index number
let indexToUpdate;
//writing logic to delete the data from the table
tableData.addEventListener("click", (event) => {
  // console.log(typeof parseInt(event.target.textContent))
  if (event.target.classList.contains("deleteBtn")) {
    let index = parseInt(event.target.id);
    expenseList.splice(index, 1);
    localStorage.setItem("expenseData", JSON.stringify(expenseList));
  }

  //WRITING LOGIC TO UPDATE THE DATA IN THE MODAL
  if (event.target.classList.contains("updateBtn")) {
    const updateCateogory = expenseList[event.target.id].cateogory;
    const upadatePrice = expenseList[event.target.id].price;
    const updateDate = expenseList[event.target.id].date;
    indexToUpdate = event.target.id;
    // console.log(+indexToUpdate);
    // console.log(updateCateogory, upadatePrice, updateDate);
    // updateCateogoryinput.option.value=updateCateogoryinput
    ////<this code is implimented if we want to update with SELECT instead of INPUT>
    // updateCateogoryinput.value=updateCateogory
    // updateOptioninput.textContent=updateCateogory
    // console.log("value",updateOptioninput.value)
    // console.log("textContent",updateOptioninput.textContent)

    updateCateogoryinput.value = updateCateogory;
    updatePriceinput.value = upadatePrice;
    updateDateinput.value = updateDate;
    //displaying the Update form
    updateForm.style.display = "block";
  }
  renderList();
});

updateForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const finalOptionToUpdate = updateCateogoryinput.value;
  const finalPriceToUpdate = updatePriceinput.value;
  const finalDateToUpdate = updateDateinput.value;
  // console.log(finalOptionToUpdate,finalPriceToUpdate,finalDateToUpdate)
  const updatedExpense = {
    cateogory: finalOptionToUpdate,
    price: finalPriceToUpdate,
    date: finalDateToUpdate,
  };
  // console.log(updatedExpense);
  expenseList.splice(indexToUpdate, 1, updatedExpense);
  localStorage.setItem("expenseData", JSON.stringify(expenseList));
  //CLEARING THE INPUT FIELDS AFTER THE SUBMISSION
  updateCateogoryinput.value = "";
  updatePriceinput.value = "";
  updateDateinput.value = "";
  //hiding the Update form
  updateForm.style.display = "none";
  renderList();
});
//writing logic to close the upadate window if clicked on CANCEL UPDATE BUTTON
updateCancelButton.addEventListener(
  "click",
  (e) => (updateForm.style.display = "none")
);

//calling the function to show the data INITIALLY
renderList();

//Writing Logic to filter 
const filterOption = document.getElementById("filterOptionSelector");

filterOption.addEventListener("change", (e) => {
  const filteredArray = existingCateogoryFromLocalStorage.filter((name) => {
    return name == e.target.value;
  });
  console.log(`before Filter`, existingCateogoryFromLocalStorage);
  console.log(`after filter`, filteredArray);
  console.log(`main expense list`, expenseList);

  const filteredObject = expenseList.filter((obj) => {
    return obj.cateogory == e.target.value;
  });
  localStorage.setItem("filteredData",JSON.stringify(filteredObject))
  let filteredObjectFromLocalStorage=JSON.parse(localStorage.getItem("filteredData"))
  console.log(filteredObjectFromLocalStorage);
})

  
 

  


//rough data

//LOCIC FOR RENDERING THE FILTEREN LIST IN THE EXPENSE LIST
// for (let i = 0; i < filteredObjectFromLocalStorage.length; i++) {
//   const expenses = filteredObjectFromLocalStorage[i];
// expenditure += parseInt(expenses.price);

// const newRow = document.createElement("tr");
// newRow.innerHTML = `
// <td id="cat">${expenses.cateogory}</td>
// <td id="pri">${expenses.price}</td>
// <td id="dat">${expenses.date}</td>
// <td><span id=${i} style="cursor:pointer" class="material-symbols-outlined deleteBtn">
// delete
// </span>
// <span id=${i} style="cursor:pointer" class="material-symbols-outlined updateBtn">
// sync_alt
// </span></td>
// `;
// tableData.appendChild(newRow);
// total.innerText = expenditure;
// spend.innerText = expenditure;

// //inserting the remaining amount to third div
// remaining.innerText =
// totalBudgetFromLocalStorage == 0
//   ? 0
//   : totalBudgetFromLocalStorage - expenditure;
  



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
