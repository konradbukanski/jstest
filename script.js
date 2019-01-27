const eng = [
  {
    question: "11111111111111111ENG",
    AnswerA: "aaaaaaaaaaa",
    AnswerB: "bbbbbbbbbbb",
    AnswerC: "ccccccccccccccc",
    corect: "A"
  },
  {
    question: "2222222222222222222ENG",
    AnswerA: "aaaaaaaaaaa",
    AnswerB: "bbbbbbbbbbb",
    AnswerC: "ccccccccccccccc",
    corect: "B"
  },
  {
    question: "33333333333333333333ENG",
    AnswerA: "aaaaaaaaaaa",
    AnswerB: "bbbbbbbbbbb",
    AnswerC: "ccccccccccccccc",
    corect: "C"
  },
  {
    question: "44444444444444444444ENG",
    AnswerA: "aaaaaaaaaaa",
    AnswerB: "bbbbbbbbbbb",
    AnswerC: "ccccccccccccccc",
    corect: "A"
  }
];
const pl = [
  {
    question: "11111111111111111pl",
    AnswerA: "aaaaaaaaaaa",
    AnswerB: "bbbbbbbbbbb",
    AnswerC: "ccccccccccccccc",
    corect: "A"
  },
  {
    question: "222222222222222222pl",
    AnswerA: "aaaaaaaaaaa",
    AnswerB: "bbbbbbbbbbb",
    AnswerC: "ccccccccccccccc",
    corect: "B"
  },
  {
    question: "3333333333333333333pl",
    AnswerA: "aaaaaaaaaaa",
    AnswerB: "bbbbbbbbbbb",
    AnswerC: "ccccccccccccccc",
    corect: "C"
  },
  {
    question: "4444444444444444444pl",
    AnswerA: "aaaaaaaaaaa",
    AnswerB: "bbbbbbbbbbb",
    AnswerC: "ccccccccccccccc",
    corect: "A"
  }
];
let itemList;

const inputs = document.querySelectorAll(".input");
let result = 0;
let j = 0;
let i;
let answerChecked = false;

function checkAnswer(i) {
  inputs.forEach(input => {
    if (input.checked) {
      answerChecked = true;
      if (input.value == itemList[i].corect) {
        result++;
      }
      input.checked = false;
    }
  });
}

function changeQestion(i) {
  document.querySelector(".exercise h1").innerHTML = `Zadanie ${j}`;
  document.querySelector(".question").innerHTML = itemList[i].question;
  document.querySelector(".answerA").innerHTML = itemList[i].AnswerA;
  document.querySelector(".answerB").innerHTML = itemList[i].AnswerB;
  document.querySelector(".answerC").innerHTML = itemList[i].AnswerC;
}

document.querySelector(".formBtn").addEventListener("click", () => {
  checkAnswer(i);
  if (answerChecked) {
    if (j < 3) {
      itemList.splice(i, 1);
      i = Math.floor(Math.random() * itemList.length);
      changeQestion(i);
      j++;
      answerChecked = false;
    } else {
      alert(`Uzyskałeś ${result}/4 punktów`);
    }
  } else alert("zaznacz odpowiedź");
});

document.querySelector(".startTestBtn").addEventListener("click", () => {
  document.querySelectorAll(".startTest__language--input").forEach(input => {
    if (input.checked) {
      input.value === "pl" ? (itemList = pl) : null;
      input.value === "eng" ? (itemList = eng) : null;
    }
  });
  document.querySelector(".startTest").style.display = "none";
  document.querySelector(".exercise").style.display = "flex";
  i = Math.floor(Math.random() * itemList.length);
  changeQestion(i);
});
