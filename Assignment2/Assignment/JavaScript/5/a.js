//========================================>>DropDown

let dropDown = document.getElementById("dropDown");
for (let i = 18; i <= 100; i++) {
  let option = document.createElement("option");
  option.innerText = i;
  option.setAttribute("value", i);
  dropDown.appendChild(option);
}

//========================================>>CheckLIst
let counter = 0;
let hobbieContainer = document.getElementById("hobbies");
let allInput = hobbieContainer.querySelectorAll("input");

allInput.forEach((item) => {
  item.addEventListener("change", (e) => {
    let check = e.target.checked;
    if (check) {
      counter++;
    } else {
      counter--;
    }
  });
});

//========================================>>Submit Form
document
  .getElementById("submit")
  .addEventListener("click", function handleSubmit(e) {
    e.preventDefault();
    //Name validate
    let inputVAlue = document.getElementById("studName").value;
    let array = inputVAlue.split("");
    let spaceCounter = 0;
    array.map((char) => {
      if (char === " ") {
        spaceCounter++;
      }
    });
    if (inputVAlue == "") {
      document.getElementById("studName").style.border = "1px solid red";
      return alert("Please Provide Your Name");
    } else if (array.length < 30 && spaceCounter <= 2) {
      // document.getElementById("studName").style.border = "none";
      console.log("fine");
    } else {
      return alert(
        "The Name Length should be less than 30 Character and Only 2 SPACES allowed"
      );
    }

    //age validte
    let drpValue = document.getElementById("dropDown").value;
    if (drpValue == "none") {
      return alert("please eneter a age");
    }

    if (counter < 5) {
      return alert("at least 5 item should be checked");
    }
    //validate items>>>>>>>>>>>>>>>>>>>>>
    const bookInp = document.getElementById("bookQnt").value;
    const penInp = document.getElementById("penQnt").value;
    const paperInp = document.getElementById("paperQnt").value;

    if (bookInp == "") {
      document.getElementById("bookQnt").style.border = "1px solid red";
      return alert("No Field Should be Blank");
    }
    if (penInp == "") {
      document.getElementById("penQnt").style.border = "1px solid red";
      return alert("No Field Should be Blank");
    }
    if (paperInp == "") {
      document.getElementById("paperQnt").style.border = "1px solid red";
      return alert("No Field Should be Blank");
    }
    if (bookInp > 10 || bookInp<1 || penInp > 10 || penInp<1 || paperInp > 10 || paperInp<1) {
      return alert("Quantity must between 1-10");
    }


    //FILLING VALUES IN MODAL
    document.getElementById("name").innerText = inputVAlue;
    document.getElementById("date").innerText = new Date().toLocaleDateString(
      undefined,
      { day: "2-digit", month: "2-digit", year: "numeric" }
    );
    let total = bookInp * 100 + penInp * 150 + paperInp * 200;
    document.getElementById("book").innerText = bookInp;
    document.getElementById("pen").innerText = penInp;
    document.getElementById("paper").innerText = paperInp;
    document.getElementById("total").innerText = total;

    document.getElementById("invoice").style.display = "block";
  });

//========================================>> Validation for Input Field
document.querySelectorAll("input").forEach((inp) => {
  inp.addEventListener("input", (e) => {
    if (e.target.value) {
      inp.style.border = "1px solid black";
    } else {
      inp.style.border = "1px solid red";
    }
  });
});

//========================================>>Modal Control
function handleModal() {
  document.getElementById("invoice").style.display = "none";
  document.querySelectorAll("input").forEach((inp) => {
    inp.value = "";
    inp.checked = false;
  });
  document.querySelector("option").selected = "Please Select Your Age";
}
