//General variables
var pos = 0;
var correct = 0;
var containerEl = document.getElementById("container");
var submitBtn = document.getElementById("submit-button");
//Timer
var countdown;
var countdownNumber;

function get(x) {
    return document.getElementById(x);

function renderQuestion(){
    containerEl.style.visibility = "visible";
    submitBtn.style.visibility = "hidden";
    // Renders Quiz Q/A
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
    // Should append answer list to radio input
    test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br>";
    test.innerHTML += "<button id='test-button' onclick='checkAnswer()' type='button' class='btn btn-secondary'>SUBMIT Answer</button>";