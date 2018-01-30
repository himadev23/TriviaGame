var countTime = 31;
var ansArray = ['a', 'b', 'c'];
var myQuestions = [{
        question: "what is 10+20 ?",
        answers: [30, 5, 100],
    },
    {
        question: "what is 30+40 ?",
        answers: [20, 40, 70],
    },
    {
        question: "what is 20+40 ?",
        answers: [20, 60, 70],
    }

]
var correctAnswer = 0;
var wrongAnswers = 0;
var notAnswered = 0;
var answerValue;
var intervalControl;


function success() {
    clearInterval(intervalControl);
    $("#result").html("<h1>your score</h1><br><h2>CorrectAnswers :" + correctAnswer + "</h2><br><h2>wrongAnswers :" + wrongAnswers + "</h2><br><h2>not answered : " + notAnswered + "</h2><br>");
    $("#question").html('');
    $("#title").remove();

}

function timeCount() {
    countTime = countTime - 1;
    $("#timecount").text(countTime)
    if (countTime === 0) {
        success();

    }

}


function showQuestions() {

    for (var i = 0; i < myQuestions.length; i++) {
        $("#question").append("<h3>" + myQuestions[i].question + "</h3><br>");
        for (var j = 0; j < myQuestions[i].answers.length; j++) {
            $("#question").append("<input type='radio' class='answer-option' name='option" + i + "' value='" + myQuestions[i].answers[j] + "'>" + myQuestions[i].answers[j] + "<br>");


        }
    }
}


function valueOfradioButton() {
    var value = $(this).val();


    if ((value == 30) || (value == 70) || (value == 60)) {
        correctAnswer = correctAnswer + 1;
        //console.log("correctAnswer" + correctAnswer)
    } else {
        wrongAnswers = wrongAnswers + 1;
        //console.log("wrongAnswers" + wrongAnswers);
    }

    var lengthChecked = $("input:checked").length;
    var arrayLength = myQuestions.length;
    var res = arrayLength - lengthChecked;
    console.log("arrayLength " + arrayLength);
    console.log("lengthChecked " + lengthChecked);
    console.log("res" + res);
    notAnswered = res;

    if (lengthChecked === arrayLength) {


        success();


    }

}
$("#start").on("click", function() {
    $("#result").empty();
    correctAnswer = 0;
    wrongAnswers = 0;
    notAnswered = 0;


    showQuestions();
    intervalControl = setInterval(timeCount, 1000);
    countTime = 31;



});



$(document).on('change', '.answer-option', valueOfradioButton);