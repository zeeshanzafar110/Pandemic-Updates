

let questions = [
  {
    id: 1,
    question: "Do you have cough?",
    answer: "YES",
    options: ["YES", "NO"],
    imgSrc: "svg/cough.svg",
  },
  {
    id: 2,
    question: "Do you have a cold?",
    answer: "YES",
    options: ["YES", "NO"],
    imgSrc: "svg/cold.svg",
  },
  {
    id: 3,
    question: "Are you having Diarrhea?",
    answer: "YES",
    options: ["YES", "NO"],
    imgSrc: "svg/diarrhea.svg",
  },
  {
    id: 4,
    question: "Are you having sore throat?",
    answer: "YES",
    options: ["YES", "NO"],
    imgSrc: "svg/sore throat.svg",
  },
  {
    id: 5,
    question: "Are you having body aches?",
    answer: "YES",
    options: ["YES", "NO"],
    imgSrc: "svg/aches.svg",
  },
  {
    id: 6,
    question: "Are you having a headache?",
    answer: "YES",
    options: ["YES", "NO"],
    imgSrc: "svg/headaches.svg",
  },
  {
    id: 7,
    question: "Do you have fever (Temperature 37.8 °C and above)?",
    answer: "YES",
    options: ["YES", "NO"],
    imgSrc: "svg/fever.svg",
  },
  {
    id: 8,
    question: "Are you having difficulty breathing?",
    answer: "YES",
    options: ["YES", "NO"],
    imgSrc: "svg/breathing.svg",
  },
  {
    id: 9,
    question: "Are you experiencing fatigue?",
    answer: "YES",
    options: ["YES", "NO"],
    imgSrc: "svg/fatigue.svg",
  },
  {
    id: 10,
    question: "Have you traveled recently during the past 14 days?",
    answer: "YES",
    options: ["YES", "NO"],
    imgSrc: "svg/travelling.svg",
  },
  {
    id: 11,
    question: "Do you have a travel history to a COVID-19 INFECTED AREA?",
    answer: "YES",
    options: ["YES", "NO"],
    imgSrc: "svg/infacted area.svg",
  },
  {
    id: 12,
    question: "Do you have direct contact with or are you taking care of a positive COVID-19 PATIENT?",
    answer: "YES",
    options: ["YES", "NO"],
    imgSrc: "svg/pationt.svg",
  },
];

let question_count = 0;
let points = 0;
let report;

window.onload = function () {
  show(question_count);

};

function next() {


  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    last();
    sessionStorage.setItem("report", report);
    question_count--;
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let img = document.getElementById("imageID");
  let source = questions[count].imgSrc;

  img.src=`${source}`

  let question = document.getElementById("questions");
  let [first, second] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
};
        
function last() {
     if (points == 120) {
      report = "SEVERE!";
  } else if (points == 110) {
    report = "SEVERE!";
  } else if (points == 100) {
    report = "SEVERE!";
  } else if (points == 90) {
    report = "SEVERE!";
  } else if (points == 80) {
    report = "HIGH.";
  } else if (points == 70) {
    report = "HIGH.";
  } else if (points == 60) {
    report = "HIGH.";
  } else if (points == 50) {
    report = "HIGH.";
  } else if (points == 40) {
    report = "MEDIUM.";
  } else if (points == 30) {
    report = "MEDIUM.";
  } else if (points == 20) {
    report = "MEDIUM.";
  } else if (points == 10) {
    report = "LOW.";
  } else {
    report = "LOW.";
  }

}




