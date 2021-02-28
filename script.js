console.log("Javascript loaded");

//pages/divs
const startPage = document.querySelector(".start");
const quiz = document.querySelector(".quiz");
const final = document.querySelector(".final");

//buttons
const startButton = document.querySelector("#start");
const nextButton = document.querySelector("#next");
const replayButton = document.querySelector("#replay");

//QUESTION
let question = document.querySelector("#question");
/***QUESTIONS***/
//Making arrays so that way I can populate the spaces with the required questions and answers. 

//SCORE
let score = document.querySelector("#score");
let currentScore = 0;

//OPTIONS
let option1 = document.querySelector("#a1");
let option2 = document.querySelector("#a2");
let option3 = document.querySelector("#a3");
let option4 = document.querySelector("#a4");


//ARRAYS WITH QUESTIONS, OPTIONS, AND ANSWERS
let questions = [
    "What gaming platforms is FFXIV available on?", 
    "How many playable races are there?",
    "What's the acronym of the role 'DPS' stand for?",
    "What job does the class Lancer become at level 30?",
    "How many battle jobs are there? (as of Shadowbringers expansion)",
    "What is species of your trusty steed and companion called?",
    "What expansion is included in the free trial?",
    "How many jobs can you play on one character?",
    "What are the newest playable races that were added to the game?",
    "What is the game's name equivalent to a potato?"
];

/***ANSWER OPTIONS***/
qOneOptions = ["XBOX & Playstation", "PC only", "Playstation Only", "PC & Playstation"];
qTwoOptions = ["5", "12", "7", "You can't select a race."];
qThreeOptions = ["Derps per Sandwich", "Damage per Second", "Darrel Peter Sampson", "Dunk People Soon"];
qFourOptions = ["Floor tank", "Pilates instructor", "Dragoon", "Halberdiers"];
qFiveOptions = ["10", "8", "14", "18"];
qSixOptions = ["Moogle", "Ostrich", "Chocobo", "Amaro"];
qSevenOptions = ["Heavensward", "Endwalker", "Stormblood", "Shadowbringers"];
qEightOptions = ["Three", "One", "All of them!", "Five"];
qNineOptions = ["Sylph & Nu Mou", "Bangaa & Aegyl", "Viera & Hrothgar", "Fal'Cie & l'Cie"];
qTenOptions = ["Pohtahto", "Popoto", "Puputu", "Lalafell"];

//MAKING CLASSES FOR EACH QUESTION
class questionSet {
    constructor (question, a1, a2, a3, a4, answer) {
        this.question = question;
        this.a1 = a1;
        this.a2 = a2;
        this.a3 = a3;
        this.a4 = a4;
        this.answer = answer;
    }
}

let question1 = new questionSet (questions[0], qOneOptions[0], qOneOptions[1], qOneOptions[2], qOneOptions[3], qOneOptions[3]);
let question2 = new questionSet (questions[1], qTwoOptions[0], qTwoOptions[1], qTwoOptions[2], qTwoOptions[3], qTwoOptions[2])
let question3 = new questionSet (questions[2], qThreeOptions[0], qThreeOptions[1], qThreeOptions[2], qThreeOptions[3], qThreeOptions[1]);
let question4 = new questionSet (questions[3], qFourOptions[0], qFourOptions[1], qFourOptions[2], qFourOptions[3], qFourOptions[2]);
let question5 = new questionSet (questions[4], qFiveOptions[0], qFiveOptions[1], qFiveOptions[2], qFiveOptions[3], qFiveOptions[3]);
let question6 = new questionSet (questions[5], qSixOptions[0], qSixOptions[1], qSixOptions[2], qSixOptions[3], qSixOptions[2]);
let question7 = new questionSet (question[6], qSevenOptions[0], qSevenOptions[1], qSevenOptions[2], qSevenOptions[3], qSevenOptions[0]);
let question8 = new questionSet (questions[7], qEightOptions[0], qEightOptions[1], qEightOptions[2], qEightOptions[3], qEightOptions[2]);
let question9 = new questionSet (questions[8], qNineOptions[0], qNineOptions[1], qNineOptions[2], qNineOptions[3], qNineOptions[2]);
let question10 = new questionSet (questions[9], qTenOptions[0], qTenOptions[1], qTenOptions[2], qTenOptions[3], qTenOptions[1]);


//default display upon load
startPage.style.display = "visible";
quiz.style.display = "none";
final.style.display = "none";



/******PLAYING THE GAME******/

/***BUTTON NAVIGATION***/
//click button to start trivia
startButton.addEventListener('click', (e) => {
    e.preventDefault();
    startPage.style.display = "none";
    quiz.style.display = "block";
});

//click next button to go to next question
nextButton.addEventListener('click', (e) => {
    e.preventDefault();
    quiz.style.display = "none";
    final.style.display = "block";
    return currentScore;
});

//click 'try again' to start the trivia over
replayButton.addEventListener('click', (e) => {
    e.preventDefault();
    final.style.display = "none";
    startPage.style.display = "block";
    currentScore = 0;
    return currentScore;
});





//Maybe doing a loop where each click on Next brings it to the next in the loop?
//Going to need functions for each option button

//1. Click start
//2. Choose an answer
//3. Click next to go to the next question. Do steps 1-2 about 10 times total, the tenth time bringing 
//you to the quiz ending div. 
//4. User can click try again to retake the quiz. 


question.innerHTML = question1.question;
option1.innerHTML = question1.a1;
option2.innerHTML = question1.a2;
option3.innerHTML = question1.a3;
option4.innerHTML = question1.a4;
let playerChoice = "";
let correctAnswer = question1.answer;


option1.addEventListener('click', (e) => {
    e.preventDefault();
    let playerChoice = qOneOptions[0];
    if (playerChoice === correctAnswer) {
        console.log("That is correct");
        currentScore++;
        console.log(currentScore);
    } else {
        console.log("Incorrect answer");
        currentScore = 0;
    }
})

option2.addEventListener('click', (e) => {
    e.preventDefault();
    let playerChoice = qOneOptions[1];
    if (playerChoice === correctAnswer) {
        console.log("That is correct");
        currentScore++;
        console.log(currentScore);
    } else {
        console.log("Incorrect answer");
        currentScore = 0;
    }
})

option3.addEventListener('click', (e) => {
    e.preventDefault();
    let playerChoice = qOneOptions[2];
    if (playerChoice === correctAnswer) {
        console.log("That is correct");
        currentScore++;
        console.log(currentScore);
    } else {
        console.log("Incorrect answer");
        currentScore = 0;
    }
})

option4.addEventListener('click', (e) => {
    e.preventDefault();

    let playerChoice = qOneOptions[3];
    if (playerChoice === correctAnswer) {
        console.log("That is correct");
        currentScore++;
        console.log(currentScore);
    } else {
        console.log("Incorrect answer");
        currentScore = 0;
    }
})




