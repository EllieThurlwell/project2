const TOTAL_QUESTIONS = 11;

// set the category of the current window and check validity. prompt user if invalid
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
}

// functions to display the questions and answers from the relevant category
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
    answerBtns[i].style.backgroundColor = 'rgba(113, 135, 146, 0.3)';
    answerBtns[i].addEventListener('click', checkAnswer);
  }
  updateQuestionNumberOnUI();
}

function updateQuestionNumberOnUI() {
  let oldNumber = parseInt(document.getElementById('current-q').innerText);
  document.getElementById('current-q').innerText = ++oldNumber;
}

// check if the user selected answer is correct and style accordingly
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
    localStorage.setItem('totalScore', score);
    onGameOver();
    return;
  }
  showQuestion(currentQuestionIndex);
}

// modal box to display after all questions answered
function onGameOver() {
  let modal = document.getElementById('score-modal');
  let modalScore = document.getElementById('modal-score');

  modalScore.innerText = localStorage.getItem('totalScore');
  modal.style.display = 'block';
  
  window.onClick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
}

// confirm whether the user wants to quit
function quitQuiz() {
  let link = document.getElementById('quit-link');
  let ok = confirm('Are you sure you want to quit?');
  if (ok == true) {
    link.setAttribute('href', 'index.html');
  } else {
    return;
  }
}
let quitBtn = document.getElementById('quit-btn');
quitBtn.addEventListener('click', quitQuiz);

initGame();