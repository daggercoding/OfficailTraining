const userList = document.getElementById("userDetails")
const updateUserInput= document.getElementById("updatename")
const updateEmailInput= document.getElementById("updateemail")
let userData=[]

////================================================>>>>HANDLING UPDATE AND DELETE
let updateId
userList.addEventListener("click",(event)=>{
 if(event.target.classList.contains("deleteBtn"))
 {
    let idToDelete=event.target.getAttribute("id")
    fetch("http://localhost:3000/delete",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({id:idToDelete})
    })
    .then(response=>response.text())
    .then(text=>{
        console.log(text)
        render()
    })
    .catch(err=>console.log(err.message))
 }
 if(event.target.classList.contains("updateBtn")){
    updateId = event.target.getAttribute("id")
    let filteredUser = userData.filter(user=>user._id===updateId)
    updateUserInput.value=filteredUser[0].name
    updateEmailInput.value=filteredUser[0].email
 }
})

////================================================>>>>HANDLING UPDATE LOGIC
document.getElementById("userUpdateForm").addEventListener("submit",(event)=>{
    event.preventDefault()
    fetch("http://localhost:3000/update",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            id:updateId,
            name:document.getElementById("updatename").value,
            email:document.getElementById("updateemail").value,
        })
    })
    .then(response=>response.text())
    .then(text=>{
        console.log(text)
        render()
    })
    .catch(err=>console.log(err.message))
})



////================================================>>>>NEW USER INPUT
document
        .getElementById("userForm")
        .addEventListener("submit", (event) => {
          event.preventDefault();
          const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
          };

          fetch("http://localhost:3000/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          })
            .then((response) => response.text())
            .then((message) => {
              console.log(message);
              render();
            })
            .catch((err) => console.log(err.message));

          //clearing the value of the form
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          console.log(formData);
          console.log("form is submitted sucessfully");
        });


////================================================>>>>RENDERING THE DATA OF USER ON SCREEN
      function render() {
        //REQUESTING FOR THE DATA WHICH I STORED IN THE DATABASE
        const userList = document.getElementById("userDetails");
        userList.innerText = "";
        fetch("http://localhost:3000/userData")
          .then((resposne) => resposne.json())
          .then((data) => {
            userData=data
            data.map((el) => {
              const newRow = document.createElement("tr");
              newRow.innerHTML = `
            <td>${el.name}</td>
            <td>${el.email}</td>
            <td><span class="updateBtn" id=${el._id}>update</span><span class="deleteBtn" id=${el._id}>Delete</span></td>
            `;
              userList.append(newRow);
            });
          });
      }

      render();