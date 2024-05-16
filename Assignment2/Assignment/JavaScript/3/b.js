document.getElementById("container").addEventListener("submit", (e) => {
  e.preventDefault();
  let value = document.getElementById("userInput").value;
  let uperCAse = /^[A-Z]+$/;
  let lowerCase = /^[a-z]+$/;
  let bothCase = /^[A-Za-z]+$/;
  let numeric = /^[0-9]+$/;
//   let mixedCharacter = /^[A-Za-z0-9|)(*&^%$#@!]+$/;
  let alphaNumeric = /^[A-Za-z0-9]+$/;
  let symbols = /^[^a-zA-Z0-9\s]+$/;

  let res = "";
  if (uperCAse.test(value)) {
    res = "Upper case alphabets";
  } else if (lowerCase.test(value)) {
    res = "Lower case alphabets";
  } else if (bothCase.test(value)) {
    res = "kamal ho gya esme uper case bhi  hai aur lower case bhi";
  } else if (numeric.test(value)) {
    res = "Numeric";
  } else if (alphaNumeric.test(value)) {
    res = "Alpha numeric";
  } else if (symbols.test(value)) {
    res = "Symbols";
  } else if (value == "") {
    res = "Empty value";
  } else {
    res = "Mixed Character set";
  }

  const theVal = document.getElementById("userInput").value;
  document.getElementById(
    "result"
  ).innerText = `The Input is : ${theVal} ==> ${res}`;

  document.getElementById("userInput").value = "";
});
