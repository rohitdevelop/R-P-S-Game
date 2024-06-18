let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msges = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const playComp = () => {
   let option = ["rock", "paper", "scissor"]
   let randIdx = Math.floor(Math.random() * 3);
   return option[randIdx];
};

let drawGame = () => {
   console.log("game was draw");
   msges.innerText = "Oops Game draw play again!";
   msges.style.backgroundColor = "gray";

}

let shoowWinner = (userwin) => {
   if (userwin) {
      userScore++;
      userScorePara.innerText = userScore;
      console.log("you win!");
      msges.innerText = "Congratulation you win!";
      msges.style.backgroundColor = "green";
   } else {
      compScore++;
      compScorePara.innerText = compScore;
      console.log("you lose")
      msges.innerText = "Sorry comp win!";
      msges.style.backgroundColor = "red";
   }
};
const playGame = (userChoice) => {
   console.log("user choice =", userChoice)
   // computer genrated
   let compChoice = playComp();
   console.log("comp choice = ", compChoice);

   if (userChoice === compChoice) {
      drawGame();
   } else {
      let userwin = true;
      if (userChoice === "rock") {
         // scissor, paper
         userwin = compChoice === "paper" ? false : true;
      } else if (userChoice === "paper") {
         // rock,paper
         userwin = compChoice === "scissor" ? false : true;
      } else {
         // rock,paper
         userwin = compChoice === "rock" ? false : true;
      }
      shoowWinner(userwin);
   }
};
choices.forEach((choice) => {
   choice.addEventListener("click", () => {
      let userChoice = choice.getAttribute("id");
      playGame(userChoice);
   });
});