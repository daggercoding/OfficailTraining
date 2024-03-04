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
const blankMessage = document.getElementById("blankMessage");
const filterOption = document.getElementById("filterOptionSelector");
const clearButton=document.getElementById("clearList")

////========================DATA FROM LOCAL STORAGE==============================>>>>>

let expenseList = getLocalStorage("expenseData");
let existingCateogory = ["Shopping", "Grocery", "Travel", "Netflix"];
let existingCateogoryFromLocalStorage = getLocalStorage("existingCateogory");
let totalBudgetFromLocalStorage = getLocalStorage("totalBudget");
if (totalBudgetFromLocalStorage) {
  totalCard.innerText = totalBudgetFromLocalStorage;
}

let expenditure;

////==========================Expense Form Section============================>>>>>>
//writing the logic to add the budget decided by user
budgetInput.addEventListener("change", (event) => {
  let totalBudget = parseInt(event.target.value);
  if (totalBudgetFromLocalStorage >= 0) {
    if (expenditure > totalBudget) {
      alert("You can not set the Total Budget less then Your Expense");
      budgetInput.value = "";
    } else {
      setLocalStorage("totalBudget", totalBudget);
      totalBudgetFromLocalStorage = totalBudget;
      budgetInput.value = "";
      totalCard.innerText = totalBudget;
      renderList();
    }
  }
});
//written logic to filter the data from orignal array
let filteredArray = [];
let filteredIndex = [];
let selectedFilter="All"
filterOption.addEventListener("change", (e) => {
   
  selectedFilter = e.target.value;
  filteredIndex.splice(0);
  filteredArray = expenseList.filter((obj, index) => {
    if (obj.cateogory == selectedFilter) {
      filteredIndex.push(index);
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
    blankMessage.style.display = "none";
  }
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
    setLocalStorage("existingCateogory", existingCateogoryFromLocalStorage);
    const options = document.createElement("option");
    options.textContent = usercateogory;
    options.value = usercateogory;
    options.setAttribute("selected", "");
    const option1 = document.createElement("option");
    option1.textContent = usercateogory;
    option1.value = usercateogory;
    Cateogory.append(options);
    filterOption.append(option1);
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
    if (Price.value <= 0) {
      alert("Price Should Not be 0");
      return;
    }
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

    if (expenditure + price * 1 > totalBudgetFromLocalStorage) {
      alert("You Credit Limit is Not Sufficient");
    } else {
      expenseList.push(currentExpense);
      localStorage.setItem("expenseData", JSON.stringify(expenseList))
      filteredArray.push(currentExpense)
      filteredIndex.push(expenseList.length-1)
      blankMessage.style.display = "none";
      message.style.display = "none";
      filterOption.selected = "All";
      renderList();
    }
  });

////==============================UPDATE MODAL===================================>>>>>>
let indexToUpdate;
let filterIndexValue;
tableData.addEventListener("click", (event) => {
   
  if (event.target.classList.contains("deleteBtn")) {
    let index = parseInt(event.target.id);
    expenseList.splice(index, 1);
    setLocalStorage("expenseData", expenseList);
    if (filteredArray.length > 0) {
      filterIndexValue = parseInt(event.target.getAttribute("index"));
      filteredArray.splice(filterIndexValue, 1);
      if (filteredArray.length == 0) {
        tableData.innerText = "";
        message.style.display = "block";
        return;
      }
    }
    renderList();
  }
  if (event.target.classList.contains("updateBtn")) {
    const updateCateogory = expenseList[event.target.id].cateogory;
    const upadatePrice = expenseList[event.target.id].price;
    const updateDate = expenseList[event.target.id].date;
    indexToUpdate = event.target.id;
    filterIndexValue = parseInt(event.target.getAttribute("index"));
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

  if (finalPriceToUpdate == "" || finalDateToUpdate == "") {
    alert("All the Fields are Mendatory");
    return;
  }else if(updatePriceinput.value==0){
    alert("Price Should be Greater then 0");
    return
  }

  const updatedExpense = {
    cateogory: finalOptionToUpdate,
    price: finalPriceToUpdate,
    date: finalDateToUpdate,
  };
  
  const previousPrice = parseInt(expenseList[indexToUpdate].price);
  expenditure = expenditure - previousPrice + finalPriceToUpdate * 1;
  
  if (expenditure > totalBudgetFromLocalStorage) {
    alert("Your Do not have sufficient fund to update");
    updateForm.style.display = "none";
  } else if (filteredArray.length > 0) {
    expenditure = 0;
    expenseList.filter((obj) => {
      expenditure += parseInt(obj.price);
    });
    expenditure = expenditure - previousPrice + parseInt(finalPriceToUpdate);
    if (expenditure > totalBudgetFromLocalStorage) {
      alert("Your Do not have sufficient fund to update");
      updateForm.style.display = "none";
    } else {
      expenseList.splice(indexToUpdate, 1, updatedExpense);
      setLocalStorage("expenseData", expenseList);
      filteredArray.splice(filterIndexValue, 1, updatedExpense);
      updateForm.style.display = "none";
      renderList();
    }
  } else {
    expenseList.splice(indexToUpdate, 1, updatedExpense);
    setLocalStorage("expenseData", expenseList);
    //hiding the Update form
    updateForm.style.display = "none";
    renderList();
  }
});

updateCancelButton.addEventListener(
  "click",
  (e) => (updateForm.style.display = "none")
);

////=======================    RENDER FUNCTION  ===========================>>>>>>
function renderList() {
   
  tableData.innerText = "";
  //if our array length = 0
  expenditure = 0;
  if (expenseList.length == 0) {
    total.innerText = 0;
    spend.innerText = 0;
    remaining.innerText = totalBudgetFromLocalStorage;
    blankMessage.style.display = "block";
  }
  if (filteredArray.length > 0) {
    // clearButton.disabled=true
    tableData.innerText = "";
    expenditure = 0;
    clearButton.style.display="none"
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
          : totalBudgetFromLocalStorage - expenditure;}
  } else {
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
  }
}
renderList();

////========================Initial Rendering Condition======================>>>>>>

Cateogory.addEventListener("change", inputValidate);
Price.addEventListener("change", inputValidate);
Date.addEventListener("change", inputValidate);
submitButton.disabled = true;
function inputValidate() {

  if (
    Cateogory.value == "none" ||
    Cateogory.value == "" ||
    Price.value == "" ||
    Date.value == ""
  ) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
}

if (existingCateogoryFromLocalStorage.length == 0) {
  setLocalStorage("existingCateogory", existingCateogory);
  getLocalStorage("existingCateogory");
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
////============================FUNCTIONS===================================>>>>>>

function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key) || "[]");
}

function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

document.getElementById("clearList").addEventListener("click", () => {
  if (window.confirm("Are You Sure You Want To Delete The List?")) {
    localStorage.removeItem("expenseData");
    expenseList = [];
    renderList();
  }
});






