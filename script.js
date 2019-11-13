   // Global variables for quiz
   var pos = 0;
   var correct = 0;
   var containerEl = document.getElementById("container");
   var submitBtn = document.getElementById("submit-button");
   // Global Variables for Timer
   var countdown;
   var countdownNumber;
   // Keeping track from pseudocode
   var test, testStatus, question, choice, choices, chA, chB, chC;
   
   // The following function will be used to grab various HTML elements
   function get(x) {
       return document.getElementById(x);
   }
   // Functions
   function renderQuestion(){
       // Make div visible
       containerEl.style.visibility = "visible";
       submitBtn.style.visibility = "hidden";
       // Quiz Render
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
       chA = questions[pos][1];
       chB = questions[pos][2];
       chC = questions [pos][3];
       test.innerHTML = "<h3>"+question+"<h3>";
       test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
       test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
       test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br>";
       test.innerHTML += "<button id='test-button' onclick='checkAnswer()' type='button' class='btn btn-secondary'>SUBMIT Answer</button>";
       
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

// Variables for HTML elements
var submitBtn = document.getElementById("submit-button");
var timeDisplay = document.getElementById("time-display");
var containerEl = document.getElementById("container");

// Variables for function setTime
var secondsLeft = 75;

function setTime() {
    renderQuestion();
    submitBtn.style.visibility = "hidden";
    containerEl.style.visibility = "visible";
};


submitBtn.addEventListener("click", setTime); 