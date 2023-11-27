//////////Variablelist///////////

let rockPaperScissors = ["Rock", "Paper", "Scissors"];
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
const myDiv = document.querySelector(".div1");
const yourChoice = document.querySelector("#yourChoice");
let CPURock = document.querySelector("#CPURock");
let CPUPaper = document.querySelector("#CPUPaper");
let CPUScissors = document.querySelector("#CPUScissors");
let comparison = document.querySelector("#comparison");
let yourName = document.querySelector("#h2name");
let yourScore = document.querySelector("#yourScore");
let CPUScore = document.querySelector("#CPUScore");
const resetBtn = document.querySelector("#resetButton");
const resetDiv = document.querySelector("#resetDiv");
let textDiv = document.querySelector("#textDiv");
const hiddenDiv = document.body.querySelector(".hiddenDiv");
const winningText = document.body.querySelector("#winningText");
const winningDiv = document.body.querySelector("#winningDiv");
CPUCount = 0;
yourCount = 0;

//////////eventlistener///////////

const myForm = document.querySelector("form");
myForm.addEventListener("submit", (eventInfo) => {
  eventInfo.preventDefault();

  yourName.innerText = myForm.querySelector("#name").value;
  myForm.style.display = "none";
  hiddenDiv.style.display = "block";
  myForm.reset();
});

myDiv.addEventListener("click", (event) => {
  let CPUChoice = rockPaperScissors[Math.floor(Math.random() * 3)];
  resetSize();
  textDiv.style.display = "block";

  /////////////CPU-Rock alternatives////////////////
  if (CPUChoice == "Rock" && event.target == rock) {
    CPURock.className = "imageSize";
    rock.className = "imageSize";
    yourChoice.innerText = "You both choose Rock";
  } else if (CPUChoice == "Rock" && event.target == paper) {
    CPURock.className = "imageSize";
    paper.className = "imageSize";
    yourChoice.innerText = "You choose Paper, you win this round";
    yourCount++;
  } else if (CPUChoice == "Rock" && event.target == scissors) {
    CPURock.className = "imageSize";
    scissors.className = "imageSize";
    yourChoice.innerText = "You choose Scissors, you loose this round";
    CPUCount++;
  }

  /////////////CPU-paper alternatives////////////////
  else if (CPUChoice == "Paper" && event.target == paper) {
    CPUPaper.className = "imageSize";
    paper.className = "imageSize";
    yourChoice.innerText = "You both choose Paper";
  } else if (CPUChoice == "Paper" && event.target == rock) {
    CPUPaper.className = "imageSize";
    rock.className = "imageSize";
    yourChoice.innerText = "You choose Rock, you loose this round";
    CPUCount++;
  } else if (CPUChoice == "Paper" && event.target == scissors) {
    CPUPaper.className = "imageSize";
    scissors.className = "imageSize";
    yourChoice.innerText = "You choose Scissors, you win this round";
    yourCount++;
  }

  /////////////CPU-Scissors alternatives////////////////
  else if (CPUChoice == "Scissors" && event.target == scissors) {
    CPUScissors.className = "imageSize";
    scissors.className = "imageSize";
    yourChoice.innerText = "You both choose Scissors";
  } else if (CPUChoice == "Scissors" && event.target == rock) {
    CPUScissors.className = "imageSize";
    rock.className = "imageSize";
    yourChoice.innerText = "You choose Rock, you win this round";
    yourCount++;
  } else if (CPUChoice == "Scissors" && event.target == paper) {
    CPUScissors.className = "imageSize";
    paper.className = "imageSize";
    yourChoice.innerText = "You choose Paper, you loose this round";
    CPUCount++;
  }
  yourScore.innerText = yourCount;
  CPUScore.innerText = CPUCount;

  //////////winning statements/////////////

  if (CPUCount === 3) {
    winningDiv.style.display = "block";
    winningText.innerText = "Computer wins, you loose! Mohahahaha";
    hiddenDiv.style.display = "none";
    resetBtn.style.display = "block";
    console.log(resetBtn);
  } else if (yourCount === 3) {
    winningDiv.style.display = "block";
    winningText.innerText = "You win, congratulations!";
    hiddenDiv.style.display = "none";
    resetBtn.style.display = "block";
    console.log(resetBtn);
  }
  console.log("count", CPUCount, yourCount);
});
/////////////Resetfunction///////////////
resetBtn.addEventListener("click", () => {
  location.reload();
});

function resetSize() {
  CPURock.className = "CPUImage";
  CPUPaper.className = "CPUImage";
  CPUScissors.className = "CPUImage";
  paper.className = "yourImage";
  rock.className = "yourImage";
  scissors.className = "yourImage";
  console.log("count", CPUCount, yourCount);
}
