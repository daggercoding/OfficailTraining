$(document).ready(function () {
  console.log($);

  const fruits = ["Apple","Banana","Orange","Grape","Strawberry","Watermelon","Pineapple","Mango","Kiwi","Peach","Cherry","Pear","Plum","Apricot","Blueberry","Raspberry","Blackberry","Cantaloupe","Pomegranate","Lemon","Lime","Coconut","Guava","Fig","Papaya",
  ];

  const vegetables = ["Carrot","Broccoli","Spinach","Cucumber","Tomato","Bell Pepper","Onion","Garlic","Potato","Sweet Potato","Lettuce","Zucchini","Eggplant","Cabbage","Green Bean","Mushroom","Celery","Radish","Asparagus","Cauliflower","Chilley","Spinch","Ginger","Garlic","BeetRoot"
  ];

  let body = $("tbody");
  
  for (let i = 0; i < 25; i++) {
    let row = $("<tr>");
    row.html(`<td>${fruits[i]}</td><td>${vegetables[i]}</td>`);
    body.append(row);
  }

  $("#findButton").click(function () {
    let value = $("#userInput").val();
    value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase().trim(" ");

////========================================>>>>>>>>> First Method

    let tableData = document.getElementById("table");
    let rows = tableData.rows;
    let presented = false
    for (let i = 0; i < rows.length; i++) {
      let cells = rows[i].cells;
      for (let j = 0; j < cells.length; j++) {
        if(j==0){
            if(value===cells[j].innerText){
             presented=true
             alert(`Item Is Presented in List at Column: 1 ROW: ${i}`); 
            }
        }else{
            if(value===cells[j].innerText){
            presented=true
            alert(`Item Is Presented in List at Column: 2 ROW: ${i}`); 
            }
        }
      }
    }
    if(!presented){
        alert("Item Is Not Presented In The List ")
    }
    $("#userInput").val("")

    ////========================================>>>>>>>>> Second Method

    // let tableData = document.getElementById("table");
    // let rows = tableData.rows;
    // let tableValues = [];
    // for (let i = 0; i < rows.length; i++) {
    //   let rowData = [];
    //   let cells = rows[i].cells;
    //   for (let j = 0; j < cells.length; j++) {
    //     rowData.push(cells[j].innerText);
    //   }
    //   tableValues.push(rowData);
    // }
    // let presented = false;
    // tableValues.forEach((ele, ind) => {
    //   if (ele.includes(value)) {
    //     presented = true;
    //     if (ele.indexOf(value) === 0) {
    //       alert(`Item Is Presented in List at Column: 1 ROW: ${ind} `);
    //     } else {
    //       alert(`Item Is Presented in List at Column: 2 ROW: ${ind} `);
    //     }
    //   }
    // });
    // if (!presented) {
    //   alert(`Item Is Not Presented in List`);
    // }
    // $("#userInput").val("")

    
    ////========================================>>>>>>>>> Previous Code
    // let presented = false;
    // tableValues.forEach((ele, ind) => {
    //   if (ele.includes(value)) {
    //     presented = true;
    //     if (ele.indexOf(value) === 0) {
    //       alert(`Item Is Presented in List at Column: 1 ROW: ${ind} `);
    //     } else {
    //       alert(`Item Is Presented in List at Column: 2 ROW: ${ind} `);
    //     }
    //   }
    // });
    // if (!presented) {
    //   alert(`Item Is Not Presented in List`);
    // }
    // $("#userInput").val("")

    // let fruit = fruits.filter(item => item.toLowerCase() === value.toLowerCase());
    // let vegetable = vegetables.filter(item => item.toLowerCase() === value.toLowerCase());
    // if (fruit.length > 0) {
    //     alert(`Item Is Presented in List at Position ROW: ${fruits.indexOf(fruit[0]) + 1} Column: 1`);
    // } else if (vegetable.length > 0) {
    //     alert(`Item Is Presented in List at Position ROW: ${vegetables.indexOf(vegetable[0]) + 1} Column: 2`);
    // } else {
    //     alert("Item is Not Presented In The List");
    // }
  });
});
