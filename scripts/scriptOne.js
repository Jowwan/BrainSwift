"use strict";

const oneStartScreen = document.querySelector(".hero-one");
const oneDuringScreen = document.querySelector(".hero-during-one");
const oneEndScreen = document.querySelector(".final-one");
const oneButtons = document.querySelectorAll(".btn-number-one");
const oneScore = document.querySelector(".one-final");
const tryAgainOne = document.querySelector(".try-again-one");
const saveScoreOne = document.querySelector(".save-score-one");

let niz = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
];

let counterOne = 1;
let startOne;

const exitFuncOne = (e) => {
  oneEndScreen.classList.add("hidden");
  oneDuringScreen.classList.add("hidden");
  oneStartScreen.classList.remove("hidden");
  niz = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];

  for (let i = 0; i < oneButtons.length; i++) {
    oneButtons[i].style.opacity = "1";
  }
};

saveScoreOne.addEventListener("click", function (e) {
  const temp = localStorage.getItem("One");

  if (!temp) {
    localStorage.setItem("One", oneScore.textContent);
  } else {
    if (parseInt(temp) > parseInt(oneScore.textContent))
      localStorage.setItem("One", oneScore.textContent);
  }
  exitFuncOne(e);
  clearFunc(e);
  msFunc(e);
  startScreen.classList.add("hidden");
  panels.classList.add("hidden");
  accScreen.classList.remove("hidden");
  fill.classList.remove("hidden");
});

const exitOne = document.querySelector(".bsButton");
const onePanels = document.querySelector(".pnButton");
const oneAcc = document.querySelector(".acButton");

exitOne.addEventListener("click", (e) => exitFuncOne(e));
onePanels.addEventListener("click", (e) => exitFuncOne(e));
oneAcc.addEventListener("click", (e) => exitFuncOne(e));

tryAgainOne.addEventListener("click", function (e) {
  e.preventDefault();
  oneEndScreen.classList.add("hidden");
  oneStartScreen.classList.remove("hidden");
});

oneStartScreen.addEventListener("click", function (e) {
  e.preventDefault();

  oneStartScreen.classList.add("hidden");
  oneDuringScreen.classList.remove("hidden");

  startOne = new Date();

  let arrOne = niz;
  console.log(arrOne);
  counterOne = 1;
  for (let i = 0; i < oneButtons.length; i++) {
    let x = Math.floor(Math.random() * arrOne.length);
    oneButtons[i].textContent = arrOne[x];
    arrOne.splice(x, 1);
  }
});

const winScreenOne = () => {
  let endOne = new Date();
  oneDuringScreen.classList.add("hidden");
  oneEndScreen.classList.remove("hidden");
  oneScore.textContent = Math.round((endOne - startOne) / 100) / 10 + " s";

  for (let i = 0; i < oneButtons.length; i++) {
    oneButtons[i].style.opacity = "1";
  }

  niz = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];
};

for (let i = 0; i < oneButtons.length; i++) {
  oneButtons[i].addEventListener("click", function (e) {
    e.preventDefault();

    if (oneButtons[i].textContent == counterOne) {
      counterOne++;
      oneButtons[i].style.opacity = "0";
    }

    if (counterOne > 25) winScreenOne();
  });
}
