let tableData = document.getElementById("tableData");
let employeCount = document.getElementById("employeCount");
let userDetails = JSON.parse(localStorage.getItem("userDetails")) ?? [];

////=========================================================>>>>>>Main Form
document.getElementById("userForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const userDetail = {
    id: randomId(),
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    salary: document.getElementById("salary").value,
  };
  userDetails.push(userDetail);
  localStorage.setItem("userDetails", JSON.stringify(userDetails));
  render(userDetails);
});
////=========================================================>>>>>>Filter Logic
document.getElementById("filerInput").addEventListener("input", (event) => {
  event.preventDefault();
  const filterValue = event.target.value.toLowerCase();
  const filterdData = userDetails.filter((user) => {
    return user.name.toLowerCase().includes(filterValue);
  });
  render(filterdData);
});
////=========================================================>>>>>>Delete and Update
tableData.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    let id = event.target.getAttribute("id");
    let filterdData = userDetails.filter((user) => user.id != id);
    localStorage.setItem("userDetails", JSON.stringify(filterdData));
    render(filterdData);
  }
  if (event.target.classList.contains("update")) {
    let id = event.target.getAttribute("id");
    let user = userDetails.find((user) => user.id == id);
    let indexToUpdate = userDetails.indexOf(user);

    document.getElementById("name").value = user.name;
    document.getElementById("age").value = user.age;
    document.getElementById("salary").value = user.salary;

    // const updatedUser = {
    //   id,
    //   name: document.getElementById("name").value,
    //   age: document.getElementById("age").value,
    //   salary: document.getElementById("salary").value,
    // };
    // userDetails.splice(indexToUpdate, 1, updatedUser);
    // localStorage.setItem("userDetails", JSON.stringify(userDetails));
    // render(userDetails);
  }
});

////=========================================================>>>>>>Render Function
function render(data) {
  tableData.innerText = "";
  for (let i = 0; i < data.length; i++) {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
     <td>${data[i].id}</td>
     <td>${data[i].name}</td>
     <td>${data[i].age}</td>
     <td>${data[i].salary}</td>
     <td><button class="update" id=${data[i].id}>Update</button><button class="delete" id=${data[i].id}>Delete</button></td>`;
    tableData.appendChild(newRow);
  }
  employeCount.innerText = data.length;
}
function randomId() {
  return Math.floor(Math.random() * 100000);
}
console.log(userDetails);
render(userDetails);
