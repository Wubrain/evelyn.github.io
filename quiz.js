 
  let questions = [{
    "question": "What is 2*5?",
    "option1":2,
    "option2":5,
    "option3":10,
    "option4":20,
    "answer": "3",
  }, {
    "question": "What is 3*6?",
    "option1":3,
    "option2":6,
    "option3":9,
    "option4":18,
     "answer": "4"
  }, {
    "question": "What is 8*9?",
    "option1":72,
    "option2":99,
    "option3":108,
    "option4":134,
     "answer": "1"
  }, {
    "question": "What is 1*7?",
    "option1":4,
    "option2":5,
    "option3":6,
    "option4":7,
     "answer": "4"
    
  }, {
    "question": "What is 8*8?",
    "option1":20,
    "option2":30,
    "option3":40,
    "option4":64,
     "answer": "4"
    
  }];
  
var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizcontainer')
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')
var opt4 = document.getElementById('opt4')

var nextButton = document.getElementById('nextButton');
var resultCont  = document.getElementById('result');


function loadQuestion(questionIndex){
  var q = questions[questionIndex];
  questionEl.textContent = [questionIndex + 1] +'.'+ q.question;
  opt1.textContent = q.option1;
  opt2.textContent = q.option2;
  opt3.textContent = q.option3;
  opt4.textContent = q.option4;
}

function loadNextQuestion(){
  var selectedOption = document.querySelector('input[type=radio]:checked');
  if (!selectedOption) {
    alert('Please select your answer');
    return;
  }
  var answer = selectedOption.value;
  if (questions[currentQuestion].answer==answer) {
    score +=10;
  }
  selectedOption.checked =false;
  currentQuestion++;
  if (currentQuestion ==totQuestions-1) {
    nextButton.textContent = 'finish';
  }
  if(currentQuestion == totQuestions){
    container.style.display ='none';
    resultCont.style.display = '';
    resultCont.textContent= 'Your score: ' + score;
    return;

  }
  loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion)



