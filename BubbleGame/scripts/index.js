// Bubble Generator

function makeBubble() {
  let clutter = "";
  for (let i = 0; i <= 103; i++) {
    let randomno = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble${randomno}" id="bub">${randomno}</div>`;
  }
  document.querySelector(".bottomscreen").innerHTML = clutter;
}

makeBubble();

// Timer
let score = 0;
let clk = document.querySelector(".bottomscreen");
document.querySelector(".score").innerHTML = `0`;
let timer = 60;
let displayTimer = document.querySelector(".timer");
function runTimer() {
  let timeInterval = setInterval(function () {
    if (timer > 0) {
      timer--;

      displayTimer.innerHTML = `${timer}`;
    } else {
      clearInterval(timeInterval);
      clk.innerHTML = `<h1>Game Over Your Score is ${score}</h1>`;
      clearInterval(rnint);
    }
  }, 1000);
}

runTimer();

// Hit
let rno = 0;
function rnGenerator() {
  rno = Math.floor(Math.random() * 10);
  document.querySelector(".hit").innerHTML = `${rno}`;
}

rnGenerator();
// console.log(rno);

// let score = 0;
function scoreCounter() {
  score += 1;
  document.querySelector(".score").innerHTML = `${score}`;
}

clk.addEventListener("click", function (dets) {
  if (dets.target.innerHTML == rno) {
    scoreCounter();
    makeBubble();
    rnGenerator();
  }
});
