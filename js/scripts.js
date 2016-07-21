/**var question = ["who am I?", ]

var quiz = {
	question: 	
}




var question1 = {
	prompt: "Who is considered the father of modern symphony?",
	answer: ["Joseph Hydn", "Wolfgang Mozart", "Franz Schubet", "Ludwig Beethoven"],
	correctAnswer: function() {
		if (this.answer === "Joseph Hydn") {
			console.log("You are correct!");
		}
		else {
			console.log("You are dead wrong!");
		}
	}


}
**/

/* constructors */
/*
var Question = function(question_text, answers, correctAnswer){
	this.answers = answers;
	this.question_text  = question_text;
	this.correctAnswer = this.answers[correctAnswer];
}

Question.prototype.checkAnswer = function(value){


}

var quiz = [
	new Question("whois the ?", ["alkjs"], 0),
]

*/

// working with Object literals

var quiz = [{
	question: "Who is considered the father of modern symphony?",
	answer: ["Joseph Hydn", "Wolfgang Mozart", "Franz Schubet", "Ludwig Beethoven"],	
	correctAnswer: 0
	},
	{
	question: "What type of music existed during the medieval period?",
	answer: ["chance music", "oops I did it again", "gregorian chant", "Bel Canto Operas"],
	correctAnswer: 2
	},
	{
	question: "When did expressionism in music flourished?",
	answer: ["1920 - 1945", "1800 - 1850", "1912 - 1925", "2000 - present"],
	correctAnswer: 2
	}    
];

// landing, coding for step 1
// direct  (use a zero)
var currentAnswer = 0;
var currentQuestion = 0; //a number that represent where we are now, or what we are seeing?
	$(".nextQuestion").click(function() {
		for (var i = 0; i < 3; i++) {
			$(".quiz").text(quiz[currentQuestion].question);
		}
		currentQuestion++;
			$(".answers").text(quiz[currentAnswer].answer);
			currentAnswer++;
	})



	// for (var i = 0; i < 3; i++) {
		
	// 	}


// $(".answers").append("<li>" + quiz[currentAnswer].answer + "</li>");
		// currentAnswer++;	

// for (ANSWERS){
// 	// Input??
// 	//LI
// }


// Tricky part, producing the next question on clicking a button

// function quizAnswer(){

// 	for(var i = 0; i < quiz.length; i++){

			
		
// 	}
// }
// quizAnswer();

// function random() {
// 	var random = Math.floor((quiz.length * Math.random()) + 1);
// }