"use strict";

const startBox = document.querySelector(".hero-text-box-aim");
const press = document.querySelector(".icon-aim");
const target = document.querySelector(".icon-targ");
const finalAim = document.querySelector(".final-aim");
const remaining = document.querySelector(".rem");
const hero = document.querySelector(".hero-aim");
const num = document.querySelector(".num");
const msFinal = document.querySelector(".finalMs-aim");
const tryAgainAim = document.querySelector(".btn-hero-aim-ta");
const saveScoreAim = document.querySelector(".btn-hero-aim-ss");

const getX = () => {
  let x = Math.trunc(Math.random() * 550) + 1;
  if (x % 2 == 0) x *= -1;
  return x;
};
const getY = () => Math.trunc(Math.random() * 470) + 1;

let counterRea = 0;
let startTime;

const exitAim = document.querySelector(".bsButton");
const aimPanels = document.querySelector(".pnButton");
const aimAcc = document.querySelector(".acButton");

const exitFuncAim = (e) => {
  e.preventDefault();
  startBox.classList.remove("hidden");
  hero.classList.remove("hidden");
  finalAim.classList.add("hidden");
  target.classList.add("hidden");
  remaining.classList.add("hidden");
};

saveScoreAim.addEventListener("click", function (e) {
  const temp = localStorage.getItem("Aim");

  if (!temp) {
    localStorage.setItem("Aim", msFinal.textContent);
  } else {
    if (parseInt(temp) > parseInt(finalScore.textContent))
      localStorage.setItem("Aim", msFinal.textContent);
  }
  exitFuncAim(e);
  clearFunc(e);
  msFunc(e);
  startScreen.classList.add("hidden");
  panels.classList.add("hidden");
  accScreen.classList.remove("hidden");
  fill.classList.remove("hidden");
});

exitAim.addEventListener("click", (e) => exitFuncAim(e));
aimPanels.addEventListener("click", (e) => exitFuncAim(e));
aimAcc.addEventListener("click", (e) => exitFuncAim(e));

press.addEventListener("click", function (e) {
  counterRea = 0;
  finalAim.classList.add("hidden");
  hero.classList.remove("hidden");
  e.preventDefault();
  startTime = new Date();
  const x = getX();
  const y = getY();
  startBox.classList.add("hidden");
  target.classList.remove("hidden");
  remaining.classList.remove("hidden");
  num.textContent = "30";
  target.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${x}, ${y}, 0, 1)`;
});

target.addEventListener("click", function (e) {
  if (counterRea < 29) {
    e.preventDefault();
    counterRea++;
    num.textContent = 30 - counterRea;
    const x = getX();
    const y = getY();
    target.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${x}, ${y}, 0, 1)`;
  } else {
    hero.classList.add("hidden");
    remaining.classList.add("hidden");
    finalAim.classList.remove("hidden");
    const temp = new Date();
    msFinal.textContent = ((temp - startTime) / 30).toFixed(0) + " ms";
  }
});

tryAgainAim.addEventListener("click", function (e) {
  e.preventDefault();
  finalAim.classList.add("hidden");
  hero.classList.remove("hidden");
  target.classList.add("hidden");
  startBox.classList.remove("hidden");
});
