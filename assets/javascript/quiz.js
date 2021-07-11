
let answerBtns = document.getElementsByClassName('answer-btn');
// function initQuiz() {(eachAnswer)
//   answerBtns.forEach(eachAnswer => { function
//     eachAnswer.addEventListener('click' , function() {
//       checkAnswer(this);
//     ;});
//   })
// }
function initQuiz() {
    answerBtns.forEach(function (eachAnswer) {
        eachAnswer.addEventListener('click', function () {
            checkAnswer(this);
        });
    });
}

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
} //gets the site stuck in a refresh loop on homepage

const questionsToShow = questionBank.filter(
  (eachQuestion) => eachQuestion.categoryId === currentCategoryId
);



let currentQuestionIndex = 0;
showNextQuestion();

function showQuestion(currentQuestionIndex) {
  const questionDetails = questionsToShow[currentQuestionIndex - 1].question; //.question not working - how else to bring it from bank
  document.getElementById('question-text').innerText = questionDetails;
  let answerBoxes = document.getElementsByClassName('answer-text');
  let options = questionsToShow[currentQuestionIndex - 1].options
  for (let i = 0; i < options.length; i++) {
    answerBoxes[i].innerText = options[i].text;
  }
  // Show the question on the UI
  // In case the option is correct, you need to add a [data-correct=true] when isCorrect = true
}

function checkAnswer(answerNode) {
  const isCorrect = answerNode.dataset.correct === 'true';
 // Increment score;
  showNextQuestion();
}

function showNextQuestion() {
  currentQuestionIndex++;
  showQuestion(currentQuestionIndex);
}


console.log(questionsToShow[currentQuestionIndex - 1].options);