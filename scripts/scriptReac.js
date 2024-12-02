"use strict";
const stBtn = document.querySelector(".sec-hero-rea");
const start = document.querySelector(".hero-rea");
const during = document.querySelector(".during");
const early = document.querySelector(".early");
const win = document.querySelector(".win");
const final = document.querySelector(".final");
const duringTitle = document.querySelector(".during-title");
const winTime = document.querySelector(".time");
const finalScore = document.querySelector(".finalMs");
const tryAgain = document.querySelector(".btn-hero-ta-rea");
const saveScoreRea = document.querySelector(".btn-hero-ss-rea");

const exitRea = document.querySelector(".bsButton");
const reaPanels = document.querySelector(".pnButton");
const reaAcc = document.querySelector(".acButton");

let x = false;
let y = false;
let sat;
let secs;
let tries = 0;
let sum = 0;
let flag = true;

const exitFuncRea = (e) => {
  e.preventDefault();
  start.classList.remove("hidden");
  during.classList.add("hidden");
  early.classList.add("hidden");
  win.classList.add("hidden");
  final.classList.add("hidden");

  x = false;
  y = false;
  tries = 0;
  sum = 0;
  flag = true;
  clearTimeout(sat);
  stBtn.style.backgroundImage = `url("img/Hero-img.webp")`;
};

saveScoreRea.addEventListener("click", function (e) {
  const temp = localStorage.getItem("Reaction");

  if (!temp) {
    localStorage.setItem("Reaction", finalScore.textContent);
  } else {
    if (parseInt(temp) > parseInt(finalScore.textContent))
      localStorage.setItem("Reaction", finalScore.textContent);
  }
  exitFuncRea(e);
  clearFunc(e);
  msFunc(e);
  startScreen.classList.add("hidden");
  panels.classList.add("hidden");
  accScreen.classList.remove("hidden");
  fill.classList.remove("hidden");
});

exitRea.addEventListener("click", (e) => exitFuncRea(e));
reaPanels.addEventListener("click", (e) => exitFuncRea(e));
reaAcc.addEventListener("click", (e) => exitFuncRea(e));

stBtn.addEventListener("click", function (e) {
  if (flag) {
    e.preventDefault();
    during.classList.add("hidden");
    start.classList.add("hidden");
    win.classList.add("hidden");
    early.classList.add("hidden");
    final.classList.add("hidden");
    if (tries > 2) {
      tries = 0;
      stBtn.style.backgroundImage = `url("img/Hero-img.webp")`;
      final.classList.remove("hidden");
      finalScore.textContent = (sum / 3).toFixed(0) + " ms";
      flag = false;
    } else {
      if (!x) {
        if (!y) {
          during.classList.remove("hidden");
          stBtn.style.backgroundImage = "linear-gradient(30deg, red, red)";
          duringTitle.textContent = "Wait For Green...";
          x = true;
          const timer = Math.floor(Math.random() * (5 - 2) + 2) * 1000;

          sat = setTimeout(() => {
            stBtn.style.backgroundImage =
              "linear-gradient(-30deg, green, green)";
            duringTitle.textContent = "Click!";
            y = true;
            x = false;
            secs = new Date();
          }, timer);
        } else {
          during.classList.add("hidden");
          win.classList.remove("hidden");
          stBtn.style.backgroundImage = `url("img/Hero-img.webp")`;
          const secs2 = new Date();
          const temp = secs2 - secs;
          winTime.textContent = temp + " ms";
          sum += temp;
          tries++;
          y = false;
        }
      } else {
        clearInterval(sat);
        during.classList.add("hidden");
        early.classList.remove("hidden");
        stBtn.style.backgroundImage = `url("img/Hero-img.webp")`;
        x = false;
      }
    }
  }
});

tryAgain.addEventListener("click", (e) => {
  e.preventDefault();
  final.classList.add("hidden");
  start.classList.remove("hidden");
  sum = 0;
  setTimeout(() => {
    flag = true;
  }, 500);
});
