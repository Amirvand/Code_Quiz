   // Basic Variables
   var pos = 0;
   var correct = 0;
   var containerEl = document.getElementById("container");
   var submitBtn = document.getElementById("submit-button");
   //Timer 
   var countdown;
   var countdownNumber;
//Overall 
   var test;
   var testStatus;
   var question;
   //Tracks user choice
   var choice;
   var choices;
   var ansA, ansB, ansC;
   
   function get(x) {
       return document.getElementById(x);
    //Grabs the test questions from questions.js 
   }
   function renderQuestion(){
       containerEl.style.visibility = "visible";
       submitBtn.style.visibility = "hidden";
       test = get("test");
       if(pos >= questions.length){
           userScore = correct * countdown
           test.innerHTML = "<h2>You got a score of "+userScore+"!<h2>";
           get("test-status").innerHTML = "Test Completed, Congratulations!";
           countdownClear();
           return false;
       };
       get("test-status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
       question = questions[pos][0];
       ansA = questions[pos][1];
       ansB = questions[pos][2];
       ansC = questions [pos][3];
       test.innerHTML = "<h3>"+question+"<h3>";
       test.innerHTML += "<input type='radio' name='choices' value='A'> "+ansA+"<br>";
       test.innerHTML += "<input type='radio' name='choices' value='B'> "+ansB+"<br>";
       test.innerHTML += "<input type='radio' name='choices' value='C'> "+ansC+"<br>";
       test.innerHTML += "<button id='test-button' onclick='checkAnswer()' type='button' class='btn btn-secondary'>SUBMIT Answer</button>";
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
   function countdownBegin() {
       countdownNumber = 15;
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
           test.innerHTML = "<h2>You got a score of "+correct+"!<h2>";
           get("test-status").innerHTML = "No time remaining.";
           pos = 0;
           correct = 0;
           countdownClear();
       };
   };
   function countdownClear(){
       clearTimeout(countdown);
       get("time-display").style.visibility = "hidden";
       localStorage.setItem("score", userScore)
       var initials = prompt("Please enter your initials to save you score for next time");
       localStorage.setItem("initials", initials);
   };
   get("user-score").innerHTML = "Previous score: "+localStorage.getItem("score");
   get("user-initials").innerHTML = "Previous player: "+localStorage.getItem("initials");
   get("submit-button").addEventListener("click", countdownBegin);

var submitBtn = document.getElementById("submit-button");
var timeDisplay = document.getElementById("time-display");
var containerEl = document.getElementById("container");

//Base Timer Questions*15, should be 15 seconds per question, couldn't get formula to work. 
var secondsLeft = 30;

function setTime() {
    renderQuestion();
    submitBtn.style.visibility = "hidden";
    containerEl.style.visibility = "visible";
};


submitBtn.addEventListener("click", setTime); 