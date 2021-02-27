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
