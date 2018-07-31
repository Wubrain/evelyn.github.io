let questions = [
{
    "question": "What is the name of the network of computers from which the Internet has emerged?",
    "option1":"Arpanet",
    "option2":"Gold",
    "option3":"ethernet",
    "option4":"cable",
    "answer": "1",
  }, {
    "question": "In what year was Google launched on the web?",
    "option1":3,
    "option2":6,
    "option3":  1998,
    "option4":18,
     "answer": "3"
  }, {
    "question": "What is the country top-level domain of Belgium?",
    "option1":72,
    "option2":99,
    "option3":"The .be domain",
    "option4":134,
     "answer": "1"
  }, {
    "question": "Which unit is an indication for the sound quality of MP3?",
    "option1":4,
    "option2":5,
    "option3":6,
    "option4":"Kbps",
     "answer": "4"
    
  }, {
    "question": "In computing what is Ram short for?",
    "option1":20,
    "option2":30,
    "option3":"Random Access Memory",
    "option4":64,
     "answer": "3"
    
  },
  {"question":"In which Nintendo DS game do you have to raise a puppy as well as possible?",
    "option1":20,
    "option2":"Nintendogs",
    "option3":"Random Access Memory",
    "option4":64,
     "answer": "2"

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
loadQuestion(currentQuestion);


let date = new Date();
document.getElementById("date").innerHTML = date;