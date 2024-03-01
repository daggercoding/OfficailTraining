const quiz = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["J.K. Rowling", "Harper Lee", "Stephen King", "George Orwell"],
    answer: "Harper Lee",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["CO2", "NaCl", "O2", "H2O"],
    answer: "H2O",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Saturn", "Mars", "Jupiter", "Earth"],
    answer: "Jupiter",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Leonardo da Vinci",
      "Vincent van Gogh",
      "Pablo Picasso",
      "Michelangelo",
    ],
    answer: "Leonardo da Vinci",
  },
  {
    question: "What is the main ingredient in guacamole?",
    options: ["Tomato", "Avocado", "Onion", "Lemon"],
    answer: "Avocado",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["Japan", "China", "India", "South Korea"],
    answer: "Japan",
  },
  {
    question: "What is the tallest mammal?",
    options: ["Elephant", "Horse", "Rhino", "Giraffe"],
    answer: "Giraffe",
  },
  {
    question: "What is the capital of Australia?",
    options: ["Canberra", "Sydney", "Melbourne", "Perth"],
    answer: "Canberra",
  },
  {
    question: "Who discovered penicillin?",
    options: [
      "Alexander Fleming",
      "Thomas Edison",
      "Albert Einstein",
      "Isaac Newton",
    ],
    answer: "Alexander Fleming",
  },
];

let count = 0;
let score = 0;

let question = document.getElementById("question");
let quizBody = document.getElementById("quizBody");
let answer = document.getElementById("answer");

let nextBtn = document.getElementById("next");
nextBtn.addEventListener("click", () => {
  count++;
  answer.innerText = "";
  if (count >= quiz.length) {
    question.innerText = "";
    question.innerText = `your Score is ${score} please refresh to Start Again`;
  } else {
    render(count);
  }
});

function render(count) {
  question.innerHTML = "";
  question.innerHTML = quiz[count].question;
  quizBody.innerText = "";
  quizBody.appendChild(nextBtn);
  quiz[count].options.forEach((el) => {
    const button = document.createElement("button");
    button.textContent = el;
    button.classList.add("optionbutton")
    quizBody.insertAdjacentElement("afterbegin", button);

    button.addEventListener("click", () => {
      if (quiz[count].answer == button.textContent) {
        console.log("right answer");
        button.style.backgroundColor = "green";
        score++;
        console.log(score);
        answer.innerText = "";
        answer.innerText = "Congratulations You are Right";
      } else {
        answer.innerText = "";
        answer.innerText = `Oh NO Correct Answer : ${quiz[count].answer}`;
        button.style.backgroundColor = "red";
      }
      document.querySelectorAll(".optionbutton").forEach(el=>el.disabled=true)
    });
  });

}

render(count);
