
let answerBtns = document.getElementsByClassName('answer-btn');
// function initQuiz() {(eachAnswer)
//   answerBtns.forEach(eachAnswer => { function
//     eachAnswer.addEventListener('click' , function() {
//       checkAnswer(this);
//     ;});
//   })
// }
// function initQuiz() {
//     answerBtns.forEach(function (eachAnswer) {
//         eachAnswer.addEventListener('click', function () {
//             checkAnswer(this);
//         });
//     });
// } not sure if this is necessary

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
//   window.location.href = './';
  alert('Invalid input');
  window.location.href = './'
} //make error html with message and link back home?

const questionsToShow = questionBank.filter(
  (eachQuestion) => eachQuestion.categoryId === currentCategoryId
);

let currentQuestionIndex = 0;
showNextQuestion();

function showQuestion(currentQuestionIndex) {
  let questionDetails = questionsToShow[currentQuestionIndex - 1].question;
  document.getElementById('question-text').innerText = questionDetails;
  let answerText = document.getElementsByClassName('answer-text');
  let options = questionsToShow[currentQuestionIndex - 1].options
  for (let i = 0; i < options.length; i++) {
    answerText[i].innerText = options[i].text;
  }


  let answerBoxes = document.getElementsByClassName('answer-btn');
  for (let i = 0; i < answerBoxes.length; i++) {
    answerBoxes[i].addEventListener('click', showNextQuestion);//should be checkAnswer once working?
  }
  questionNumber();
  // In case the option is correct, you need to add a [data-correct=true] when isCorrect = true
}

// let allQuestions = questionBank.question;
// if (currentCategoryId === 'cat6') {
//   let randomQuestion = Math.floor(Math.random() * allQuestions.length);
//   let currentQuestion = allQuestions[randomQuestion];
//   document.getElementById('question-text').innerText = currentQuestion;
// }

function questionNumber() {
  let oldNumber = parseInt(document.getElementById('current-q').innerText);
  document.getElementById('current-q').innerText = ++oldNumber;
}

function checkAnswer(answerNode) {
  const isCorrect = answerNode.dataset.isCorrect === 'true';
 // if correct background green and increment score
 // if incorrect background red and correct background green 
  showNextQuestion();
}

function showNextQuestion() {
  currentQuestionIndex++;
  showQuestion(currentQuestionIndex);
}

function restartQuiz() {
  let restart = document.getElementById('restart-btn');
  restart.addEventListener('click', showQuestion[0]);
}

//display alert when user clicks quit
function quitQuiz() {
  alert('Are you sure you want to quit?');
}
let quitBtn = document.getElementById('quit-btn');
quitBtn.addEventListener('click', quitQuiz);

console.log(allQuestions);