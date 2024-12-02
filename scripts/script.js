"use strict";

const fill = document.querySelector(".fill");

const panels = document.querySelector(".section-panels");
const btnPanels = document.querySelector(".pnButton");

const startScreen = document.querySelector(".starts");
const btnStart = document.querySelector(".bsButton");

const reacScreen = document.querySelector(".sec-hero-rea");
const btnRea = document.querySelectorAll(".btn-rea");

const aimScreen = document.querySelector(".sec-hero-aim");
const btnAim = document.querySelector(".btn-aim");

const btnVerb = document.querySelector(".btn-verb");
const verbScreen = document.querySelector(".sec-hero-verb");

const btnNum = document.querySelector(".btn-num");
const numScreen = document.querySelector(".sec-hero-num");

const btnOne = document.querySelector(".btn-one");
const oneScreen = document.querySelector(".sec-hero-one");

const btnSeq = document.querySelector(".btn-seq");
const seqScreen = document.querySelector(".sec-hero-seq");

const btnAcc = document.querySelector(".acButton");
const accScreen = document.querySelector(".account-page");

const clearFunc = (e) => {
  e.preventDefault();
  aimScreen.classList.add("hidden");
  reacScreen.classList.add("hidden");
  verbScreen.classList.add("hidden");
  numScreen.classList.add("hidden");
  oneScreen.classList.add("hidden");
  seqScreen.classList.add("hidden");
  fill.classList.add("hidden");
  startScreen.classList.remove("hidden");
  panels.classList.remove("hidden");
  accScreen.classList.add("hidden");
};

const msFunc = (e) => {
  if (localStorage.getItem("Reaction")) {
    const tempReac = document.querySelector(".ms-reac-grade");
    const tempReacGrade = document.querySelector(".gradeReac");
    tempReac.textContent = localStorage.getItem("Reaction");
    const tempGrade = parseInt(tempReac.textContent);
    if (tempGrade < 220) {
      tempReacGrade.textContent = "A";
      tempReacGrade.style.color = "rgb(99, 235, 99)";
    } else if (tempGrade < 250) {
      tempReacGrade.textContent = "B";
      tempReacGrade.style.color = "rgb(209, 169, 82)";
    } else if (tempGrade < 300) {
      tempReacGrade.textContent = "C";
      tempReacGrade.style.color = "rgb(209, 143, 82)";
    } else if (tempGrade < 320) {
      tempReacGrade.textContent = "D";
      tempReacGrade.style.color = "rgb(209, 101, 82)";
    } else {
      tempReacGrade.textContent = "F";
      tempReacGrade.style.color = "black";
    }
  }

  if (localStorage.getItem("Aim")) {
    const tempReac = document.querySelector(".ms-aim-grade");
    const tempReacGrade = document.querySelector(".gradeAim");
    tempReac.textContent = localStorage.getItem("Aim");
    const tempGrade = parseInt(tempReac.textContent);
    if (tempGrade < 500) {
      tempReacGrade.textContent = "A";
      tempReacGrade.style.color = "rgb(99, 235, 99)";
    } else if (tempGrade < 550) {
      tempReacGrade.textContent = "B";
      tempReacGrade.style.color = "rgb(209, 169, 82)";
    } else if (tempGrade < 570) {
      tempReacGrade.textContent = "C";
      tempReacGrade.style.color = "rgb(209, 143, 82)";
    } else if (tempGrade < 650) {
      tempReacGrade.textContent = "D";
      tempReacGrade.style.color = "rgb(209, 101, 82)";
    } else {
      tempReacGrade.textContent = "F";
      tempReacGrade.style.color = "black";
    }
  }

  if (localStorage.getItem("One")) {
    const tempReac = document.querySelector(".ms-one-grade");
    const tempReacGrade = document.querySelector(".gradeOne");
    tempReac.textContent = localStorage.getItem("One");
    const tempGrade = parseInt(tempReac.textContent);
    if (tempGrade < 14) {
      tempReacGrade.textContent = "A";
      tempReacGrade.style.color = "rgb(99, 235, 99)";
    } else if (tempGrade < 16) {
      tempReacGrade.textContent = "B";
      tempReacGrade.style.color = "rgb(209, 169, 82)";
    } else if (tempGrade < 18) {
      tempReacGrade.textContent = "C";
      tempReacGrade.style.color = "rgb(209, 143, 82)";
    } else if (tempGrade < 20) {
      tempReacGrade.textContent = "D";
      tempReacGrade.style.color = "rgb(209, 101, 82)";
    } else {
      tempReacGrade.textContent = "F";
      tempReacGrade.style.color = "black";
    }
  }

  if (localStorage.getItem("Seq")) {
    const tempReac = document.querySelector(".ms-seq-grade");
    const tempReacGrade = document.querySelector(".gradeSeq");
    tempReac.textContent = localStorage.getItem("Seq");
    const tempGrade = parseInt(tempReac.textContent);
    if (tempGrade > 15) {
      tempReacGrade.textContent = "A";
      tempReacGrade.style.color = "rgb(99, 235, 99)";
    } else if (tempGrade > 10) {
      tempReacGrade.textContent = "B";
      tempReacGrade.style.color = "rgb(209, 169, 82)";
    } else if (tempGrade > 8) {
      tempReacGrade.textContent = "C";
      tempReacGrade.style.color = "rgb(209, 143, 82)";
    } else if (tempGrade > 4) {
      tempReacGrade.textContent = "D";
      tempReacGrade.style.color = "rgb(209, 101, 82)";
    } else {
      tempReacGrade.textContent = "F";
      tempReacGrade.style.color = "black";
    }
  }

  if (localStorage.getItem("Verb")) {
    const tempReac = document.querySelector(".ms-verb-grade");
    const tempReacGrade = document.querySelector(".gradeVerb");
    tempReac.textContent = localStorage.getItem("Verb");
    const tempGrade = parseInt(tempReac.textContent);
    if (tempGrade > 25) {
      tempReacGrade.textContent = "A";
      tempReacGrade.style.color = "rgb(99, 235, 99)";
    } else if (tempGrade > 18) {
      tempReacGrade.textContent = "B";
      tempReacGrade.style.color = "rgb(209, 169, 82)";
    } else if (tempGrade > 15) {
      tempReacGrade.textContent = "C";
      tempReacGrade.style.color = "rgb(209, 143, 82)";
    } else if (tempGrade > 10) {
      tempReacGrade.textContent = "D";
      tempReacGrade.style.color = "rgb(209, 101, 82)";
    } else {
      tempReacGrade.textContent = "F";
      tempReacGrade.style.color = "black";
    }
  }

  if (localStorage.getItem("Num")) {
    const tempReac = document.querySelector(".ms-num-grade");
    const tempReacGrade = document.querySelector(".gradeNum");
    tempReac.textContent = localStorage.getItem("Num");
    const tempGrade = parseInt(tempReac.textContent);
    if (tempGrade > 7) {
      tempReacGrade.textContent = "A";
      tempReacGrade.style.color = "rgb(99, 235, 99)";
    } else if (tempGrade > 5) {
      tempReacGrade.textContent = "B";
      tempReacGrade.style.color = "rgb(209, 169, 82)";
    } else if (tempGrade > 4) {
      tempReacGrade.textContent = "C";
      tempReacGrade.style.color = "rgb(209, 143, 82)";
    } else if (tempGrade > 3) {
      tempReacGrade.textContent = "D";
      tempReacGrade.style.color = "rgb(209, 101, 82)";
    } else {
      tempReacGrade.textContent = "F";
      tempReacGrade.style.color = "black";
    }
  }
};

btnStart.addEventListener("click", function (e) {
  clearFunc(e);
});

btnPanels.addEventListener("click", function (e) {
  e.preventDefault();
  clearFunc(e);

  const pozicija = document.querySelector(".starts");

  smoothScroll({ yPos: pozicija.clientHeight + 150, duration: 750 });
});

btnAcc.addEventListener("click", function (e) {
  clearFunc(e);

  startScreen.classList.add("hidden");
  panels.classList.add("hidden");
  accScreen.classList.remove("hidden");
  fill.classList.remove("hidden");
  smoothScroll({ yPos: 0, duration: 0 });
  msFunc(e);
});

for (let i = 0; i < btnRea.length; i++) {
  btnRea[i].addEventListener("click", function (e) {
    e.preventDefault();

    startScreen.classList.add("hidden");
    reacScreen.classList.remove("hidden");

    panels.classList.add("hidden");
    fill.classList.remove("hidden");
    smoothScroll({ yPos: 0, duration: 0 });
  });
}

btnAim.addEventListener("click", function (e) {
  e.preventDefault();

  startScreen.classList.add("hidden");
  aimScreen.classList.remove("hidden");
  panels.classList.add("hidden");
  fill.classList.remove("hidden");
  smoothScroll({ yPos: 0, duration: 0 });
});

btnVerb.addEventListener("click", function (e) {
  e.preventDefault();

  startScreen.classList.add("hidden");
  verbScreen.classList.remove("hidden");
  panels.classList.add("hidden");
  fill.classList.remove("hidden");
  smoothScroll({ yPos: 0, duration: 0 });
});

btnNum.addEventListener("click", function (e) {
  e.preventDefault();

  startScreen.classList.add("hidden");
  numScreen.classList.remove("hidden");
  panels.classList.add("hidden");
  fill.classList.remove("hidden");
  smoothScroll({ yPos: 0, duration: 0 });
});

btnOne.addEventListener("click", function (e) {
  e.preventDefault();

  startScreen.classList.add("hidden");
  oneScreen.classList.remove("hidden");
  panels.classList.add("hidden");
  fill.classList.remove("hidden");
  smoothScroll({ yPos: 0, duration: 0 });
});

btnSeq.addEventListener("click", function (e) {
  e.preventDefault();

  startScreen.classList.add("hidden");
  seqScreen.classList.remove("hidden");
  panels.classList.add("hidden");
  fill.classList.remove("hidden");
  smoothScroll({ yPos: 0, duration: 0 });
});
