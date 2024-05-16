const testButton = document.getElementById("testValue");
const matchButton = document.getElementById("showMatch");

const pattern = document.getElementById("pattern");
const sentence = document.getElementById("sentence");

let regx;
let stirng;
let test = false;
testButton.addEventListener("click", (e) => {
  e.preventDefault();
  regx = new RegExp(pattern.value.substring(1, pattern.value.length - 1));
  stirng = sentence.value;
  test = regx.test(stirng);
  if (test) {
    alert("Pass :)");
    matchButton.addEventListener("click", () => {
      alert(
        `Valid string and starign index is :0 and the last index is :${
          stirng.length - 1
        }`
      );
    });
  } else {
    alert("FAil :(");
  }
});
