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


//SCORE
let score = document.querySelector("#score");
let currentScore = 0;

//OPTIONS
let option1 = document.querySelector("#a1");
let option2 = document.querySelector("#a2");
let option3 = document.querySelector("#a3");
let option4 = document.querySelector("#a4");


//default display upon load
startPage.style.display = "visible";
quiz.style.display = "none";
final.style.display = "none";


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

let question2 = new questionSet (questions[0], qTwoOptions[0], qTwoOptions[1], qTwoOptions[2], qTwoOptions[3], qTwoOptions[2])
console.log(question2)





/******PLAYING THE GAME******/

/***BUTTONS***/
//click button to start trivia
startButton.addEventListener('click', (e) => {
    e.preventDefault();
    startPage.style.display = "none";
    quiz.style.display = "block";
});

//click next button to go to next question
//for now using it to test going to the final page
nextButton.addEventListener('click', (e) => {
    e.preventDefault();
    quiz.style.display = "none";
    // question3.style.display = "block;"
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


question.innerHTML = questions[0];
option1.innerHTML = qOneOptions[0];
option2.innerHTML = qOneOptions[1];
option3.innerHTML = qOneOptions[2];
option4.innerHTML = qOneOptions[3];
let playerChoice = "";
let correctAnswer = qOneOptions[3];


option1.addEventListener('click', (e) => {
    e.preventDefault();
    let playerChoice = qOneOptions[0];
    if (playerChoice === correctAnswer) {
        console.log("That is correct");
        currentScore++;
        console.log(currentScore);
    } else {
        console.log("Incorrect answer");
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
    }
})




