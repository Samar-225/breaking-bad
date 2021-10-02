var readlineSync = require('readline-sync');
const chalk = require('chalk');
var myName = readlineSync.question("What is your Name? ")

console.log("Hello "+ chalk.red(myName) + " Welcome to this quiz")
console.log("Name of this quiz is "+ chalk.green("How well do you know me?"))
console.log("---------------------------------------------")


var score =0;
var highScores = ["Samarsinh = 10"]
var question = [{question:"In which New Mexico City does the show 'Breaking Bad' take place? \n1.Santa Fe \n2.Albuquerque \n3.Roswell",
answer:"2"},
{question:"Which subject did Walt teach high school children? \n1.chemistry \n2.Maths \n3.Biology\n",
answer:"1"},
{question:"What is the slogan of Saul Goodman's law firm in 'Breaking Bad'?\n1.Turn Your Pain Into Rain.\n2.Better Call Saul!\n3.Get What’s Yours\n",
answer:"2"}
]
function play(question,answer){
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer){
    console.log("Correct answer")
    score=score+2
  }else{
    console.log("Wrong answer")
  }
  console.log("Congratulation!!You have scored "+ score + " Out of 6")
}


for (var i=0;i<=question.length;i++){
  var currentQuestion = question[i];
  play(currentQuestion.question,currentQuestion.answer)
}
console.log(score)
console.log(highScores)
