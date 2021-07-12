const TOTAL_QUESTIONS = 11;
let answerBtns = document.getElementsByClassName('answer-btn');
function getCategoryFromURLParams() {
  const urlParams = new URLSearchParams(window.location.search);
  console.log(urlParams.get('category'));
  return urlParams.get('category');
}
function isCategoryValid(categoryId) {
  const categoriesIds = CATEGORIES.map((eachCategory) => eachCategory.id);
  return categoriesIds.includes(categoryId);
}
const currentCategoryId = getCategoryFromURLParams();
if (!isCategoryValid(currentCategoryId)) {
  alert('Invalid input');
  window.location.href = './'
} //make error html with message and link back home?
const questionsToShow = questionBank.filter(
  (eachQuestion) => eachQuestion.categoryId === currentCategoryId
);
let currentQuestionIndex = 0;
let score = 0;
function initGame() {
  showNextQuestion();
  score = 0;
}
function showQuestion(currentQuestionIndex) {
  let questionDetails = questionsToShow[currentQuestionIndex - 1];
  document.getElementById('question-text').innerText = questionDetails.question;
  let answerBtns = document.getElementsByClassName('answer-btn');
  let options = questionDetails.options;
  for (let i = 0; i < options.length; i++) {
    answerBtns[i].innerText = options[i].text;
    if (options[i].isCorrect === true) {
      answerBtns[i].dataset.correct = true;
    } else {
      answerBtns[i].dataset.correct = false;
    }
    answerBtns[i].style.backgroundColor = 'transparent';
    answerBtns[i].addEventListener('click', checkAnswer);
  }
  // let answerBoxes = document.getElementsByClassName('answer-btn');
  // for (let i = 0; i < answerBoxes.length; i++) {
  //  //for each answer box, listen for click and call checkAnswer
  // }
  updateQuestionNumberOnUI();
}
function updateQuestionNumberOnUI() {
  let oldNumber = parseInt(document.getElementById('current-q').innerText);
  document.getElementById('current-q').innerText = ++oldNumber;
}
// this is all okay
////////////////////////////////////////////////////////////////////////////////
function checkAnswer(event) {
  let selectedAnswer = event.target;
  const isCorrect = selectedAnswer.dataset.correct === 'true';
  if (isCorrect) {
    selectedAnswer.style.backgroundColor = 'limegreen';
    increaseScore();
  } else {
    selectedAnswer.style.backgroundColor = 'orangered';
  }
  setTimeout(() => {
    showNextQuestion();
  }, 600);
}
function increaseScore() {
  score++;
  document.getElementById('score').innerText = score;
}
function showNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex === TOTAL_QUESTIONS) {
    onGameOver();
    return;
  }
  showQuestion(currentQuestionIndex);
}
function onGameOver() {
  // SHow a popup
}
// function restartQuiz(event) {
//   event.preventDefault;
//   let restart = document.getElementById('restart-btn');
//   restart.addEventListener('click', showQuestion);
// }
//display alert when user clicks quit
function quitQuiz() {
  alert('Are you sure you want to quit?');
}
let quitBtn = document.getElementById('quit-btn');
quitBtn.addEventListener('click', quitQuiz);
initGame();