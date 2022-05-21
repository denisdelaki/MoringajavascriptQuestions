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
  });
}
/*
function Questions() {
  var Questionscontainer = ExamsQuestionsContainer.querySelectorAll(".choices");
    let correctselection = 0;
    ExamQuestions.forEach((currentQuestion, questionNumber) => {
        
       
   })
}
*/
