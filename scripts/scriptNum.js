"use strict";

const startScreenNum = document.querySelector(".hero-num");
const duringScreenNum = document.querySelector(".hero-num-during");
const guessScreenNum = document.querySelector(".hero-num-guessing");
const winScreenNum = document.querySelector(".final-num");
const scoreFinalNum = document.querySelector(".num-final");
const numberNum = document.querySelector(".num-num");
const formNum = document.querySelector(".num-form");
const inptNum = document.querySelector(".num-input");
const loaderNum = document.querySelector(".loader");
const tryAgainNum = document.querySelector(".try-again-num");
const saveScoreNum = document.querySelector(".save-score-num");

let scoreNum = 0;
let round = 10;
let roundNum = 1;
let timer1Num = setTimeout(() => console.log(0), 0);
let timer2Num = setTimeout(() => console.log(0), 0);

const exitFuncNum = (e) => {
  e.preventDefault();
  scoreNum = 0;
  round = 10;
  roundNum = 1;
  startScreenNum.classList.remove("hidden");
  duringScreenNum.classList.add("hidden");
  guessScreenNum.classList.add("hidden");
  winScreenNum.classList.add("hidden");

  clearTimeout(timer1Num);
  clearTimeout(timer2Num);
  loaderNum.style.animation = `l2 2s infinite steps(100)`;
};

saveScoreNum.addEventListener("click", function (e) {
  const temp = localStorage.getItem("Num");

  if (!temp) {
    localStorage.setItem("Num", scoreFinalNum.textContent);
  } else {
    if (temp < scoreFinalNum.textContent)
      localStorage.setItem("Num", scoreFinalNum.textContent);
  }
  exitFuncNum(e);
  clearFunc(e);
  msFunc(e);
  startScreen.classList.add("hidden");
  panels.classList.add("hidden");
  accScreen.classList.remove("hidden");
  fill.classList.remove("hidden");
});

const exitNum = document.querySelector(".bsButton");
const numPanels = document.querySelector(".pnButton");
const numAcc = document.querySelector(".acButton");

exitNum.addEventListener("click", (e) => exitFuncNum(e));
numPanels.addEventListener("click", (e) => exitFuncNum(e));
numAcc.addEventListener("click", (e) => exitFuncNum(e));

tryAgainNum.addEventListener("click", function (e) {
  e.preventDefault();
  winScreenNum.classList.add("hidden");
  round = 10;
  scoreNum = 0;
  roundNum = 0;
  inptNum.value = "";
  startScreenNum.classList.remove("hidden");
  loaderNum.style.animation = `l2 2s infinite steps(100)`;
});

startScreenNum.addEventListener("click", function (e) {
  e.preventDefault();

  startScreenNum.classList.add("hidden");
  duringScreenNum.classList.remove("hidden");

  numberNum.textContent = Math.trunc(Math.random() * 9) + 1;
  timer1Num = setTimeout(function () {
    duringScreenNum.classList.add("hidden");
    guessScreenNum.classList.remove("hidden");
    inptNum.focus();
  }, 2000);
});

formNum.addEventListener("submit", function (e) {
  e.preventDefault();

  if (inptNum.value == numberNum.textContent && scoreNum < 25) {
    scoreNum++;
    round++;
    inptNum.value = "";
    numberNum.textContent =
      Math.floor(Math.random() * (round * 10 - round)) + round;
    guessScreenNum.classList.add("hidden");
    duringScreenNum.classList.remove("hidden");
    loaderNum.style.animation = `l2 ${Math.min(
      2 + roundNum * 0.5,
      5
    )}s infinite steps(100)`;

    timer2Num = setTimeout(function () {
      duringScreenNum.classList.add("hidden");
      guessScreenNum.classList.remove("hidden");
      inptNum.focus();
    }, Math.min(2000 + roundNum * 500, 5000));

    round *= 10;
    roundNum++;
  } else {
    guessScreenNum.classList.add("hidden");
    winScreenNum.classList.remove("hidden");
    scoreFinalNum.textContent = scoreNum;
  }
});
