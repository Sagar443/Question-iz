const questions = [
  {
    que: "which of the following is Markup Language?",
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "PHP",
    correct: "a",
  },
  {
    que: "What year was JavaScript Launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    que: "What's a web browser?",
    a: "A kind of spider",
    b: "A computer that stores WWW files",
    c: "A person who likes to look at websites",
    d: "A software program that allows you to access sites on the World Wide Web",
    correct: "d",
  },
  {
    que: "How many bits is a byte?",
    a: "4",
    b: "8",
    c: "16",
    d: "32",
    correct: "b",
  },
];

let index = 0;
let total = questions.length;
let right = 0,
  wrong = 0;
const queBox = document.getElementById("queBox");
const optionInputs = document.querySelectorAll(".options");
const loadQuestion = () => {
  if (index === total) {
    return endQuiz();
  }

  reset();
  const data = questions[index];
  queBox.innerText = `${index + 1}. ${data.que}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer();
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};

const getAnswer = () => {
  let answer;
  optionInputs.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

const reset = () => {
  optionInputs.forEach((input) => {
    input.checked = false;
  });
};

const endQuiz = () => {
  document.getElementById("box").innerHTML = `
  <div style="text-align: center">
    <h3> Thanks for Playing </h3>
    <h2> ${right} / ${total} are correct </h2>
  </div>
  `;
};

loadQuestion();

const resetQuiz = () => {
  location.reload();
};
