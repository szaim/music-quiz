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
function quizAnswer(){

	for(var i = 0; i < quiz.length; i++){

			$(".quiz").text(quiz[i].question);
		
	}
}
quizAnswer();