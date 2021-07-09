// these are all the elements that will be written to/innerHTML changed. Is const right option for all?
const questionText = document.getElementById('question-text');
const correctAnswers = document.getElementById('score');
const progressCount = document.getElementById('current-q');
const answers = document.getElementsByClassName('answer-text');// does this need to be made into an array? Array.from()
const reset = document.getElementById('reset-btn');
const quit = document.getElementById('quit-btn');
const previousScore = document.getElementById('prev-score');
const possAnswers = questionBank;

let currentQuestion;



//control what happens between home page and quiz page on clicking each category choice
let buttons = document.getElementsByClassName('cat-btn');
let answerBtns = document.getElementsByClassName('answer-btn');
console.log(answerBtns);

for (let button of buttons) {
    button.addEventListener('click', function() {
         if (this.getAttribute('id') === 'cat1') {
            //box color. answerBtns.style not working
            //cat1 function
            console.log('cat1 clicked');
        } else if (this.getAttribute('id') === 'cat2') {
            //box color
            //cat2 function
            console.log('cat2 clicked');
        } else if (this.getAttribute('id') === 'cat3') {
            //box color
            //cat3 function
            console.log('cat3 clicked');
        } else if (this.getAttribute('id') === 'cat4') {
            //box color
            //cat4 function
            console.log('cat4 clicked');
        } else if (this.getAttribute('id') === 'cat5') {
            //box color
            //cat5 function
            console.log('cat5 clicked');
        } else if (this.getAttribute('id') === 'cat6') {
            //box color
            //cat6 function
            console.log('cat6 clicked');
        } 
    });
}




// in each category need to begin at index 0 and loop through questions, writing to questionText using currentQuestion
function loadQuestion() {
    for (let i = 0; i < possAnswers.length; i++) {
        let currentQuestion = possAnswers[i];
        questionText.innerHTML = currentQuestion;
    }
} // how 

// for each question write answers to answers - by array index?

// show current question number in progressCount - index + 1?

// if isCorrect=false background color of clicked red and isCorrect green, else isCorrect green

// if isCorrect increment score

//load next question

//on completion? display correct answer score? by overwriting html of quiz area?
