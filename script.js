console.log("Javascript loaded");

//DEFINING DIV TYPES
const startPage = document.querySelector(".start");
const quiz = document.querySelectorAll(".quiz");
const final = document.querySelector(".final");

//DEFINING BUTTONS
const startButton = document.querySelector(".startButton");
const nextButton = document.querySelectorAll(".nextButton");
const submitButton = document.querySelector(".submitButton");
const replayButton = document.querySelector(".replayButton");

//DEFINING QUESTION LIST
let question = document.querySelectorAll(".question");

//SCORE & OTHER VALUES
let finalDescription = document.querySelector(".description2");
let score = document.querySelector(".score");
let currentScore = 0;
let previousQuestion = 0;
let currentQuestion = 0;
let answerSelected = false;

//DEFINING ANSWER OPTIONS
let option1 = document.querySelectorAll(".a1");
let option2 = document.querySelectorAll(".a2");
let option3 = document.querySelectorAll(".a3");
let option4 = document.querySelectorAll(".a4");


//QUESTIONS ARRAY
let questions = [
    "What gaming platforms is FFXIV available on?",
    "How many playable races are there?",
    "What's the acronym of the role 'DPS' stand for?",
    "What job does the class Lancer become at level 30?",
    "How many battle jobs are there? (as of Shadowbringers expansion)",
    "What is the species of your trusty steed and companion called?",
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
    constructor(question, a1, a2, a3, a4, answer) {
        this.question = question;
        this.a1 = a1;
        this.a2 = a2;
        this.a3 = a3;
        this.a4 = a4;
        this.answer = answer;
    }
}

let question1 = new questionSet(questions[0], qOneOptions[0], qOneOptions[1], qOneOptions[2], qOneOptions[3], qOneOptions[3]);
let question2 = new questionSet(questions[1], qTwoOptions[0], qTwoOptions[1], qTwoOptions[2], qTwoOptions[3], qTwoOptions[2])
let question3 = new questionSet(questions[2], qThreeOptions[0], qThreeOptions[1], qThreeOptions[2], qThreeOptions[3], qThreeOptions[1]);
let question4 = new questionSet(questions[3], qFourOptions[0], qFourOptions[1], qFourOptions[2], qFourOptions[3], qFourOptions[2]);
let question5 = new questionSet(questions[4], qFiveOptions[0], qFiveOptions[1], qFiveOptions[2], qFiveOptions[3], qFiveOptions[3]);
let question6 = new questionSet(questions[5], qSixOptions[0], qSixOptions[1], qSixOptions[2], qSixOptions[3], qSixOptions[2]);
let question7 = new questionSet(questions[6], qSevenOptions[0], qSevenOptions[1], qSevenOptions[2], qSevenOptions[3], qSevenOptions[0]);
let question8 = new questionSet(questions[7], qEightOptions[0], qEightOptions[1], qEightOptions[2], qEightOptions[3], qEightOptions[2]);
let question9 = new questionSet(questions[8], qNineOptions[0], qNineOptions[1], qNineOptions[2], qNineOptions[3], qNineOptions[2]);
let question10 = new questionSet(questions[9], qTenOptions[0], qTenOptions[1], qTenOptions[2], qTenOptions[3], qTenOptions[1]);

questionSets = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];

//Populating each question DIV with the questions and answer options
for (let i = 0; i < quiz.length; i++) {
    question[i].innerHTML = questionSets[i].question;
    option1[i].innerHTML = questionSets[i].a1;
    option2[i].innerHTML = questionSets[i].a2;
    option3[i].innerHTML = questionSets[i].a3;
    option4[i].innerHTML = questionSets[i].a4;
}


//default display upon load
startPage.style.display = "block";
for (let i = 0; i < quiz.length; i++) {
    quiz[i].style.display = "none";
}
final.style.display = "none";


/***BUTTON NAVIGATION***/
//click button to start trivia
startButton.addEventListener('click', (e) => {
    e.preventDefault();
    quiz[0].style.display = "block";
    startPage.style.display = "none";
});


//next button
for (let i = 0; i < nextButton.length; i++) {
    nextButton[i].addEventListener('click', (e) => {
        e.preventDefault();
        previousQuestion = currentQuestion;
        currentQuestion++
        if (answerSelected === true) {
            quiz[previousQuestion].style.display = "none";
            quiz[currentQuestion].style.display = "block";
        } else {
            answerSelected = false;
        }
    })
}


//submit button
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    for (let i = 0; i < quiz.length; i++) {
        quiz[i].style.display = "none";
    }
    final.style.display = "block";
    logScore();
    return currentScore;
})


//click 'try again' to start the trivia over
replayButton.addEventListener('click', (e) => {
    e.preventDefault();
    final.style.display = "none";
    startPage.style.display = "block";
    currentScore = 0;
    previousQuestion = 0;
    currentQuestion = 0;
    return currentScore;
});

/******PLAYING THE GAME******/
//Adding functionality to answer option buttons to have user select their
//answer. 
/* REMEMBER TO UPDATE "answerSelected" to TRUE to enable user to click next.*/

/*There should be a loop (if the answer buttons are in an array???) at some 
point to check if the answer they selected was the right one, 
adding points into the currentScore.*/

//first, add event listeners? ... or maybe a function? 

for (let i = 0; i < option1.length; i++) {
    option1[i].addEventListener('click', (e) => {
        e.preventDefault();
        answerSelected = true;
        console.log("A was selected!");
        if (option1[i].innerText === questionSets[i].answer) {
            console.log("Correct!")
            currentScore += 1;
        } else {
            console.log("Incorrect.")
        }
        console.log(currentScore);
        return currentScore
    })

    option2[i].addEventListener('click', (e) => {
        e.preventDefault();
        answerSelected = true;
        console.log("B was selected!");
        if (option2[i].innerText === questionSets[i].answer) {
            console.log("Correct!")
            currentScore += 1;
        } else {
            console.log("Incorrect.")
        }
        console.log(currentScore);
        return currentScore
    })

    option3[i].addEventListener('click', (e) => {
        e.preventDefault();
        answerSelected = true;
        console.log("C was selected!");
        if (option3[i].innerText === questionSets[i].answer) {
            console.log("Correct!")
            currentScore += 1;
        } else {
            console.log("Incorrect.")
        }
        console.log(currentScore);
        return currentScore
    })

    option4[i].addEventListener('click', (e) => {
        e.preventDefault();
        answerSelected = true;
        console.log("D was selected!");
        if (option4[i].innerText === questionSets[i].answer) {
            console.log("Correct!")
            currentScore += 1;
        } else {
            console.log("Incorrect.")
        }
        console.log(currentScore);
        return currentScore
    })
}

//score page 
console.log(score)
console.log(currentScore)

function logScore() {
    if (currentScore <= 3) {
        console.log(currentScore);
        score.innerText = `Your Final Score: ${currentScore}/10`;
        finalDescription.innerText = "Looks like you've got some brushing up to do!"
    } else if (currentScore <= 7) {
        console.log(currentScore)
        score.innerText = `Your Final Score: ${currentScore}/10`;
        finalDescription.innerText = "Almost there!"
    } else if (currentScore === 10) {
        console.log(currentScore)
        score.innerText = `Your Final Score: ${currentScore}/10`;
        finalDescription.innerText = "You know your stuff! Say, have you played this game before?"
    }
}





//Maybe doing a loop where each click on Next brings it to the next in the loop?
//Going to need functions for each option button

//1. Click start
//2. Choose an answer
//3. Click next to go to the next question. Do steps 1-2 about 10 times total, the tenth time bringing 
//you to the quiz ending div. 
//4. User can click try again to retake the quiz. 



//This whole thing works for the first page, but I don't really wanna do all the lines of code 
//for the next 9 questions either. It's too long.


