var ExamQuestions = [
  {
    question:
      "Which of the following keywords is used to define a variable in Javascript?",
    choices: {
      A: "var",
      B: "let",
      C: "None of the above",
      D: "Both of the Above",
    },
    correctchoice: "D",
  },
  {
    question: "Javascript is an_______ language?",
    choices: {
      A: "Object-Oriented",
      B: "Object Based",
      C: "Procedural",
      D: "None of the Above",
    },
    correctchoice: "A",
  },
  {
    question: "How can a datatype be declared to be a constant type?",
    choices: {
      A: "var",
      B: "const",
      C: "Constant",
      D: "let",
    },
    correctchoice: "B",
  },
  {
    question:
      "What keyword is used to check whether a given property is valid or not?",
    choices: {
      A: "in",
      B: "is in",
      C: "exists",
      D: "lies",
    },
    correctchoice: "A",
  },
  {
    question:
      " When an operator's value is NULL, the typeof returned by the unary operator is:",
    choices: {
      A: "Boolean",
      B: "Object",
      C: "Undefined",
      D: "interger",
    },
    correctchoice: "B",
  },
];
//declare variables
var ExamsQuestionsContainer = document.getElementsByClassName("questions");
var ExamsResultsContainer = document.getElementsByClassName("results");
var ExamsSubmit = document.getElementsByClassName("submit");
//declare functions
function Questions() {
  //declare a variable to store HTML output
  const HTMLoutput = [];
  //in each question, declare a variable to store the list of possible answers and add a radio button for easy selection of the correct answer
  ExamQuestions.forEach((CurrentQuestion, questionNumber) => {
    //declare a variable to store the list of the choices for each question
    const choices = [];
    // add the radio button to each question to ease selection of answers
    for (letter in CurrentQuestion.choices) {
      // now push the radio buttons into the choices
      choices.push(
        '<label> <input type="radio" name="radio&{questionNumber}" value="&{letter}"> &{currentQuestion.choices[letter]} </label>'
      );
    }
    //now push the questions and the choices to the output constainer 
    HTMLoutput.push(
      '<div class="question"> &{currentQuestion.question} </div> <div class="choices"> &{choices.join("")} <div>');

  });
  //now join the HTML output  content and the  to one page
  ExamsQuestionsContainer.innerHTML = HTMLoutput.join('');
}
//declare a  function to show results 
function Results() {
  //put together all the selected choices in the questions  into one variable
  const answers = ExamsResultsContainer.querySelectorAll('.choices');
  //count the selected choices
  let numberOfCorrectChoices = 0;
  //then find the selected answers in each question and add to the number of correct choices
  ExamQuestions.forEach((CurrentQuestion, questionNumber) => {
    //now find the selected choice in each question and store the answer in the variable
    const selectedanswer = answers[questionNumber];
    //the selected answer
    const selected ='input[name=question&{questionNumber}]: checked'
  })
  
}

 
