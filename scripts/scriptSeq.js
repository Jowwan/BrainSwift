const seqStartScreen = document.querySelector(".hero-seq");
const seqDuringSCreen = document.querySelector(".hero-during-seq");
const seqEndScreen = document.querySelector(".final-seq");
const seqScoreFinal = document.querySelector(".seq-final");

const seqDivs = document.querySelectorAll(".seq-div");
const tryAgainSeq = document.querySelector(".try-again-seq");
const saveScoreSeq = document.querySelector(".save-score-seq");

let scoreSeq = 0;
let flagSeq = false;
let seqSeq = [];
let currSeq = 0;

const exitFuncSeq = (e) => {
  e.preventDefault();

  scoreSeq = 0;
  flagSeq = false;
  seqSeq.splice(0, 0);
  currSeq = 200;
  setTimeout(function () {
    currSeq = 0;
  }, 1000);

  seqEndScreen.classList.add("hidden");
  seqDuringSCreen.classList.add("hidden");
  seqStartScreen.classList.remove("hidden");
};

saveScoreSeq.addEventListener("click", function (e) {
  const temp = localStorage.getItem("Seq");

  if (!temp) {
    localStorage.setItem("Seq", seqScoreFinal.textContent);
  } else {
    if (temp < seqScoreFinal.textContent)
      localStorage.setItem("Seq", seqScoreFinal.textContent);
  }
  exitFuncSeq(e);
  clearFunc(e);
  msFunc(e);
  startScreen.classList.add("hidden");
  panels.classList.add("hidden");
  accScreen.classList.remove("hidden");
  fill.classList.remove("hidden");
});

const exitSeq = document.querySelector(".bsButton");
const seqPanels = document.querySelector(".pnButton");
const seqAcc = document.querySelector(".acButton");

exitSeq.addEventListener("click", (e) => exitFuncSeq(e));
seqPanels.addEventListener("click", (e) => exitFuncSeq(e));
seqAcc.addEventListener("click", (e) => exitFuncSeq(e));

tryAgainSeq.addEventListener("click", function (e) {
  e.preventDefault();
  seqEndScreen.classList.add("hidden");
  seqStartScreen.classList.remove("hidden");
});

const endSeq = () => {
  seqEndScreen.classList.remove("hidden");
  seqDuringSCreen.classList.add("hidden");
  seqScoreFinal.textContent = seqSeq.length - 1;
  scoreSeq = 0;
  flagSeq = false;
  seqSeq.splice(0, 0);
  currSeq = 0;
};

const playSeq = () => {
  let x;
  if (currSeq < seqSeq.length) x = seqSeq[currSeq];
  else {
    x = Math.round(Math.random() * 8);
    seqSeq.push(x);
    currSeq++;
  }

  currSeq++;

  seqDivs[x].classList.add("seq-div-active");

  setTimeout(function () {
    seqDivs[x].classList.remove("seq-div-active");
    if (currSeq < seqSeq.length + 1) {
      setTimeout(() => playSeq(), 500);
    } else {
      flagSeq = true;
      currSeq = 0;
    }
  }, 1000);
};

seqStartScreen.addEventListener("click", function (e) {
  e.preventDefault();

  seqStartScreen.classList.add("hidden");
  seqDuringSCreen.classList.remove("hidden");
  currSeq = 0;
  scoreSeq = 0;
  flagSeq = false;
  seqSeq.length = 0;
  playSeq();
});

for (let i = 0; i < seqDivs.length; i++) {
  seqDivs[i].addEventListener("click", function (e) {
    e.preventDefault();
    if (flagSeq) {
      if (seqSeq[currSeq] == i) currSeq++;
      else {
        endSeq();
      }

      if (currSeq == seqSeq.length) {
        flagSeq = false;
        setTimeout(function () {
          currSeq = 0;
          playSeq();
        }, 1000);
      }
    }
  });
}
