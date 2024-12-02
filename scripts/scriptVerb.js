"use strict";

const nouns = [
  "Abundance",
  "Accord",
  "Admiration",
  "Advantage",
  "Affection",
  "Agreement",
  "Alertness",
  "Ambition",
  "Amusement",
  "Appeal",
  "Approval",
  "Ardor",
  "Artistry",
  "Assertiveness",
  "Assurance",
  "Authority",
  "Awe",
  "Balance",
  "Beauty",
  "Bravery",
  "Brilliance",
  "Calm",
  "Candor",
  "Capability",
  "Care",
  "Celebration",
  "Certainty",
  "Challenge",
  "Charm",
  "Cheer",
  "Clarity",
  "Comfort",
  "Commitment",
  "Compassion",
  "Competence",
  "Composure",
  "Concentration",
  "Confidence",
  "Connection",
  "Consciousness",
  "Consistency",
  "Contentment",
  "Contribution",
  "Conviction",
  "Courage",
  "Courtesy",
  "Creativity",
  "Credibility",
  "Curiosity",
  "Daring",
  "Decisiveness",
  "Dedication",
  "Delight",
  "Dependability",
  "Depth",
  "Determination",
  "Devotion",
  "Dignity",
  "Diligence",
  "Discipline",
  "Discovery",
  "Discretion",
  "Diversity",
  "Dream",
  "Drive",
  "Duty",
  "Eagerness",
  "Efficiency",
  "Elegance",
  "Empathy",
  "Empowerment",
  "Endurance",
  "Energy",
  "Enjoyment",
  "Enthusiasm",
  "Excellence",
  "Experience",
  "Expertise",
  "Exploration",
  "Expressiveness",
  "Fairness",
  "Faith",
  "Fascination",
  "Fearlessness",
  "Ferocity",
  "Fidelity",
  "Flexibility",
  "Focus",
  "Foresight",
  "Forgiveness",
  "Fortitude",
  "Freedom",
  "Friendliness",
  "Frugality",
  "Generosity",
  "Gentleness",
  "Grace",
  "Gratitude",
  "Growth",
  "Guidance",
  "Happiness",
  "Harmony",
  "Health",
  "Heart",
  "Helpfulness",
  "Honesty",
  "Hope",
  "Humility",
  "Humor",
  "Idealism",
  "Imagination",
  "Impact",
  "Impartiality",
  "Independence",
  "Individuality",
  "Innovation",
  "Inquisitiveness",
  "Insight",
  "Inspiration",
  "Integrity",
  "Intelligence",
  "Intensity",
  "Intuition",
  "Investment",
  "Joy",
  "Justice",
  "Kindness",
  "Knowledge",
  "Liberation",
  "Life",
  "Light",
  "Loyalty",
  "Majesty",
  "Mastery",
  "Maturity",
  "Meaning",
  "Mindfulness",
  "Modesty",
  "Motivation",
  "Nobility",
  "Nurturing",
  "Openness",
  "Opportunity",
  "Optimism",
  "Order",
  "Originality",
  "Passion",
  "Patience",
  "Peace",
  "Perseverance",
  "Persistence",
  "Perspective",
  "Philanthropy",
  "Poise",
  "Potential",
  "Power",
  "Presence",
  "Pride",
  "Principles",
  "Purpose",
  "Quality",
  "Rationality",
  "Receptivity",
  "Reflection",
  "Regard",
  "Reliability",
  "Resourcefulness",
  "Respect",
  "Responsibility",
  "Restraint",
  "Reverence",
  "Risk-taking",
  "Sacrifice",
  "Satisfaction",
  "Security",
  "Self-discipline",
  "Self-esteem",
  "Sensitivity",
  "Serendipity",
  "Service",
  "Sharing",
  "Simplicity",
  "Sincerity",
  "Skill",
  "Solitude",
  "Sophistication",
  "Soul",
  "Spontaneity",
  "Stability",
  "Strength",
  "Success",
  "Support",
  "Sustainability",
  "Sympathy",
  "Teamwork",
  "Tenacity",
  "Tolerance",
  "Tranquility",
  "Trust",
  "Understanding",
  "Unity",
  "Valor",
  "Victory",
  "Vigor",
  "Vision",
  "Vitality",
  "Warmth",
  "Wealth",
  "Wisdom",
  "Wonder",
  "Zeal",
];

const firstScreenVerb = document.querySelector(".hero-verb");
const duringVerb = document.querySelector(".hero-verb-during");
const wordVerb = document.querySelector(".word-verb");
const seenBtn = document.querySelector(".seen-btn");
const newBtn = document.querySelector(".new-btn");
const livesVerb = document.querySelector(".verb-lives-number");
const scoreVerb = document.querySelector(".verb-score-number");
const winScreenVerb = document.querySelector(".final-verb");
const winScoreVerb = document.querySelector(".verb-final");
const tryAgainVerb = document.querySelector(".try-again-verb");
const saveScoreVerb = document.querySelector(".save-score-verb");

const getWord = (num) => Math.trunc(Math.random() * (num - 1)) + 1;
const yesNo = () => Math.trunc(Math.random() * 3) + 1;

let score = 0;
let lives = 3;
let set = [];
let slen = 0;

const exitFuncVerb = (e) => {
  e.preventDefault();

  score = 0;
  lives = 3;
  set = [];
  slen = 0;

  winScreenVerb.classList.add("hidden");
  duringVerb.classList.add("hidden");
  firstScreenVerb.classList.remove("hidden");
};

saveScoreVerb.addEventListener("click", function (e) {
  const temp = localStorage.getItem("Verb");

  if (!temp) {
    localStorage.setItem("Verb", winScoreVerb.textContent);
  } else {
    if (temp < winScoreVerb.textContent)
      localStorage.setItem("Verb", winScoreVerb.textContent);
  }
  exitFuncVerb(e);
  clearFunc(e);
  msFunc(e);
  startScreen.classList.add("hidden");
  panels.classList.add("hidden");
  accScreen.classList.remove("hidden");
  fill.classList.remove("hidden");
});

const exitVerb = document.querySelector(".bsButton");
const verbPanels = document.querySelector(".pnButton");
const verbAcc = document.querySelector(".acButton");

exitVerb.addEventListener("click", (e) => exitFuncVerb(e));
verbPanels.addEventListener("click", (e) => exitFuncVerb(e));
verbAcc.addEventListener("click", (e) => exitFuncVerb(e));

const winScreen = () => {
  winScreenVerb.classList.remove("hidden");
  duringVerb.classList.add("hidden");
  winScoreVerb.textContent = score;
};

const switchWord = () => {
  if (yesNo() < 3) {
    let x = getWord(205);
    while (set.includes(nouns[x])) x = getWord(205);
    wordVerb.textContent = nouns[x];
  } else {
    wordVerb.textContent = set[getWord(slen) - 1];
  }
};

firstScreenVerb.addEventListener("click", function (e) {
  e.preventDefault();

  firstScreenVerb.classList.add("hidden");
  duringVerb.classList.remove("hidden");

  livesVerb.textContent = lives;
  scoreVerb.textContent = score;

  let x = getWord(205);
  wordVerb.textContent = nouns[x];
});

seenBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (set.includes(wordVerb.textContent)) {
    score++;
  } else {
    lives--;
  }

  livesVerb.textContent = lives;
  scoreVerb.textContent = score;

  set.push(wordVerb.textContent);
  slen++;

  if (lives < 1 || score > 199) winScreen();
  else switchWord();
});

newBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (set.includes(wordVerb.textContent)) {
    lives--;
  } else {
    score++;
    set.push(wordVerb.textContent);
    slen++;
  }

  livesVerb.textContent = lives;
  scoreVerb.textContent = score;

  if (lives < 1 || score > 199) winScreen();
  else switchWord();
});

tryAgainVerb.addEventListener("click", function (e) {
  e.preventDefault();
  score = 0;
  lives = 3;
  set = [];
  slen = 0;

  winScreenVerb.classList.add("hidden");
  duringVerb.classList.remove("hidden");
  livesVerb.textContent = lives;
  scoreVerb.textContent = score;
  let x = getWord(205);
  wordVerb.textContent = nouns[x];
});
