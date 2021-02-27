console.log("Javascript loaded");

//pages/divs
const startPage = document.querySelector(".start");
const quiz = document.querySelector(".quiz");
const final = document.querySelector(".final");

//buttons
const startButton = document.querySelector("#start");
const nextButton = document.querySelector("#next");
const replayButton = document.querySelector("#replay");

//default display upon load
startPage.style.display = "visible";
quiz.style.display = "none";
final.style.display = "none";




/******PLAYING THE GAME******/

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
    final.style.display = "block";
})

//click 'try again' to start the trivia over
replayButton.addEventListener('click', (e) => {
    e.preventDefault();
    final.style.display = "none";
    startPage.style.display = "block";
})