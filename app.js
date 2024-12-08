// Now adding Javascript

const quizQuestions =[
    {
    question: "what does 'let' do in Javascript?",
    options: [
        "Declare a constant variable",
        "Declare a block-scoped variable",
        "Declare a global variable",
        "Create a function"

    ],
    correctAnswer: 1
},
{
    question:"What method is used to parse a JSON string in Javascipt?",
    options:[
        "JSON.parse()",
        "JSON.stringify()",
        "parse.JSON()",
        "JSON.convert()"
    ],
    correctAnswer: 0
},

 {
    question:"How do you define a function in javascript?",
    options:[
        "function myFunc()",
        "def myFunc()",
        "func myFunc()",
        "function:myFunc()"

    ],
    correctAnswer:0
 }
];

let currentQuestionIndex=0;
let score=0;

function loadQuestion(){
    const questionData = quizQuestions[currentQuestionIndex];
    document.getElementById("question").textContent = questionData.question;

    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = ""; 

    questionData.options.forEach((option,index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });

    document.getElementById("feedback").textContent = "";
    document.getElementById("next-question").style.display ="none";
}

function checkAnswer(selectedIndex){
    const correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer;

    if(selectedIndex == correctAnswer){
        score++;
        document.getElementById("feedback").textContent = "Correct";
        document.getElementById("feedback").style.color ="green";
    }
    else{
        document.getElementById("feedback").textContent="Incorrect";
        document.getElementById("feedback").style.color = "red";
    }

    document.getElementById("score").textContent = score;

    document.getElementById("next-question").style.display = "block";
}

function nextQuestion(){
    currentQuestionIndex++;

    if(currentQuestionIndex < quizQuestions.length){
        loadQuestion();
    }
    else{
        document.getElementById("question").textContent = "Quiz over !";
        document.getElementById("options-container").innerHTML="";
        document.getElementById("next-question").style.display = "none";
    }
}

loadQuestion();