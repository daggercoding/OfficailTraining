////=========================GLOBAL VARIABLES===================================>>>>>>
//// DISPLAY CARD
const totalCard = document.getElementById("total");
const budgetInput = document.getElementById("budgetInput");
const total = document.getElementById("totalAmount");
const spend = document.getElementById("spend");
const remaining = document.getElementById("remaining");
//// Main FORM
const tableData = document.getElementById("expenseList");
const Cateogory = document.getElementById("expenseCateogory");
const Price = document.getElementById("expensePrice");
const Date = document.getElementById("expenseDate");
const submitButton = document.getElementById("submitButton");
const userDefineCateogory = document.getElementById("userCateogory");
//// UPDATE FORM
const updateForm = document.getElementById("updateContainer");
const updateCancelButton = document.getElementById("updateCancelButton");
const updateCateogoryOption = document.getElementById("updateCateogory");
const updatePriceinput = document.getElementById("updatePrice");
const updateDateinput = document.getElementById("updateDate");

//// FILTER FORM
const message = document.getElementById("message");
const filterOption = document.getElementById("filterOptionSelector");
let selectedFilter;

////========================DATA FROM LOCAL STORAGE==============================>>>>>

let expenseList = JSON.parse(localStorage.getItem("expenseData")) ?? [];

let existingCateogory = ["Shopping", "Grocery", "Travel", "Netflix"];
let existingCateogoryFromLocalStorage =
  JSON.parse(localStorage.getItem("existingCateogory")) ?? [];

let totalBudgetFromLocalStorage = JSON.parse(
  localStorage.getItem("totalBudget")
);
if (totalBudgetFromLocalStorage) {
  totalCard.innerText = totalBudgetFromLocalStorage;
}


let filteredArray=[];
let filteredIndex=[];
filterOption.addEventListener("change", (e) => {
  selectedFilter = e.target.value;
  filteredArray = expenseList.filter((obj, index) => {
    if (obj.cateogory == selectedFilter) {
      filteredIndex.push(index)
      return obj;
    }
  });
  
  if (filteredArray.length > 0 || selectedFilter == "All") {
    renderList();
    message.style.display = "none";
  } else {
    // tableData.innerHTML=`<h1 class="errorMessage">No Data Found For This Category</h1>`
    tableData.innerText = "";
    spend.innerText = 0;
    total.innerText = 0;
    remaining.innerText = 0;
    message.style.display = "block";
  }
});

if (existingCateogoryFromLocalStorage.length == 0) {
  localStorage.setItem("existingCateogory", JSON.stringify(existingCateogory));
  existingCateogoryFromLocalStorage = JSON.parse(
    localStorage.getItem("existingCateogory")
  );
}

for (let i = 0; i < existingCateogoryFromLocalStorage.length; i++) {
  const options = document.createElement("option");
  const options1 = document.createElement("option");
  options.value = existingCateogoryFromLocalStorage[i];
  options.textContent = existingCateogoryFromLocalStorage[i];
  options1.value = existingCateogoryFromLocalStorage[i];
  options1.textContent = existingCateogoryFromLocalStorage[i];
  Cateogory.append(options);
  filterOption.append(options1);
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
  budgetInput.style.cursor = "not-allowed";
  budgetInput.style.color = "red";
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
    existingCateogoryFromLocalStorage.push(usercateogory);
    localStorage.setItem(
      "existingCateogory",
      JSON.stringify(existingCateogoryFromLocalStorage)
    );
    const options = document.createElement("option");
    options.textContent = usercateogory;
    options.value = usercateogory;
    options.setAttribute("selected", "");
    Cateogory.append(options);
  }
  userDefineCateogory.value = "";


});

//A blank array to store the data of input fields
document
  .getElementById("expense-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    let cateogory = Cateogory.value;
    let price = Price.value;
    let date = Date.value;

    //input field ki values ko clear kar rahe hai
    Cateogory.value = "";
    Price.value = "";
    Date.value = "";

    //now create a fresh object using the data which we have
    const currentExpense = {
      cateogory: cateogory,
      price: price,
      date: date,
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
 
   if(filteredArray.length >= 1) {
    tableData.innerText = "";
    expenditure = 0;
    for (let i = 0; i < filteredArray.length; i++) {
      //sooting the object from the Array
      const expenses = filteredArray[i];
      expenditure += parseInt(expenses.price);
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
       <td id="cat">${expenses.cateogory}</td>
       <td id="pri">${expenses.price}</td>
       <td id="dat">${expenses.date}</td>
       <td><span id=${filteredIndex[i]} index=${i} style="cursor:pointer" class="material-symbols-outlined deleteBtn">
       delete
       </span>
       <span id=${filteredIndex[i]} index=${i} style="cursor:pointer" class="material-symbols-outlined updateBtn">
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
  
}

////==============================UPDATE MODAL===================================>>>>>>
let indexToUpdate;
let filterIndexValue 
tableData.addEventListener("click", (event) => {
  
  if (event.target.classList.contains("deleteBtn")) {
    let index = parseInt(event.target.id);
    expenseList.splice(index, 1);
    localStorage.setItem("expenseData", JSON.stringify(expenseList));

    if(filteredArray.length>0)
    {
      filterIndexValue= parseInt(event.target.getAttribute("index"));
      filteredArray.splice(filterIndexValue,1)
      if(filteredArray.length==0)
      {
       tableData.innerText=""
       message.style.display = "block";
       return
      }
    }
    

    renderList();
  }

  //WRITING LOGIC TO UPDATE THE DATA IN THE MODAL
  if (event.target.classList.contains("updateBtn")) {
    const updateCateogory = expenseList[event.target.id].cateogory;
    const upadatePrice = expenseList[event.target.id].price;
    const updateDate = expenseList[event.target.id].date;
    indexToUpdate = event.target.id;

    updateCateogoryOption.innerHTML = `<option selected value=${updateCateogory}>${updateCateogory}</option>`;

    existingCateogoryFromLocalStorage.map((cateogory) => {
      //validating the redundency of the Category
      if (cateogory != updateCateogory) {
        const newOption = document.createElement("option");
        newOption.value = cateogory;
        newOption.textContent = cateogory;
        updateCateogoryOption.append(newOption);
      }
     });
    updatePriceinput.value = upadatePrice;
    updateDateinput.value = updateDate;
    //displaying the Update form
    updateForm.style.display = "block";
  }  
  
});

updateForm.addEventListener("submit", (event) => {
  
  event.preventDefault();
  const finalOptionToUpdate = updateCateogoryOption.value;
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

  
  if(filteredArray.length>0)
  {
    filteredArray.splice(filterIndexValue,1,updatedExpense)
  }
  //hiding the Update form
  updateForm.style.display = "none";
  renderList()
});

//writing logic to close the upadate window if clicked on CANCEL UPDATE BUTTON
updateCancelButton.addEventListener(
  "click",
  (e) => (updateForm.style.display = "none")
);

//calling the function to show the data INITIALLY
renderList();
