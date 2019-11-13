   // Basic Variables
   var pos = 0;
   var correct = 0;
   var containerEl = document.getElementById("container");
   var submitBtn = document.getElementById("submit-button");
   //Timer 
   var countdown;
   var countdownNumber;
//Overall 
   var quiz;
   var quizStatus;
   var question;
   //Tracks user choice
   var choice;
   var choices;
   var ansA, ansB, ansC;
   
   function get(x) {
       return document.getElementById(x);
    //Grabs the quiz questions from questions.js 
   }
   function renderQuestion(){
       containerEl.style.visibility = "visible";
       submitBtn.style.visibility = "hidden";
       quiz = get("quiz");
       if(pos >= questions.length){
           userScore = correct * countdown
           quiz.innerHTML = "<h2>You got a score of "+userScore+"!<h2>";
           get("quiz-status").innerHTML = "Congratulations! You complete the Quiz!";
           countdownClear();
           return false;
       };
       get("quiz-status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
       question = questions[pos][0];
       ansA = questions[pos][1];
       ansB = questions[pos][2];
       ansC = questions [pos][3];
       quiz.innerHTML = "<h3>"+question+"<h3>";
       quiz.innerHTML += "<input type='radio' name='choices' value='A'> "+ansA+"<br>";
       quiz.innerHTML += "<input type='radio' name='choices' value='B'> "+ansB+"<br>";
       quiz.innerHTML += "<input type='radio' name='choices' value='C'> "+ansC+"<br>";
       quiz.innerHTML += "<button id='quiz-button' onclick='checkAnswer()' type='button' class='btn btn-secondary'>SUBMIT Answer</button>";
//Checks if the answer is correct / incorrect, gives user score.
   }
   function checkAnswer(){
       choices = document.getElementsByName("choices");
       for(var i = 0; i < choices.length; i++){
           if(choices[i].checked){
               choice = choices[i].value;
           }
       }
       if(choice == questions[pos][4]){
           correct++;
       }
       pos++;
       renderQuestion();
   }
   
//Base Timer Questions*15, should be 15 seconds per question, couldn't get formula to work.
   function countdownBegin() {
       countdownNumber = 30;
       countdownTrigger();
       renderQuestion();
   }
   function countdownTrigger() {
       if (countdownNumber > 0) {
           countdownNumber--;
           get("time-display").innerHTML = countdownNumber;
           countdown = setTimeout("countdownTrigger()", 1000)
       }
       else if (countdownNumber == 0) {
           quiz.innerHTML = "<h2>You got a score of "+correct+"!<h2>";
           get("quiz-status").innerHTML = "No time remaining.";
           pos = 0;
           correct = 0;
           countdownClear();
       };
   };
   function countdownClear(){
       clearTimeout(countdown);
       get("time-display").style.visibility = "hidden";
       localStorage.setItem("score", userScore)
       var name = prompt("Please enter your name to save you score for next time");
       localStorage.setItem("name", name);
   };
   get("user-score").innerHTML = "Previous score: "+localStorage.getItem("score");
   get("user-name").innerHTML = "Previous player: "+localStorage.getItem("name");
   get("submit-button").addEventListener("click", countdownBegin);

var submitBtn = document.getElementById("submit-button");
var timeDisplay = document.getElementById("time-display");
var containerEl = document.getElementById("container");
 
var secondsLeft = 75;

function setTime() {
    renderQuestion();
    submitBtn.style.visibility = "hidden";
    containerEl.style.visibility = "visible";
};


submitBtn.addEventListener("click", setTime); 