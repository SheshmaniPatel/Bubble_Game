let timer = 60;
let score = 0;
let randomHit;

// Making bubble with loop

function makeBubble() {
  let bubbles = "";

  for (let i = 1; i <= 30; i++) {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    bubbles += `<div class="bubble">${randomNum}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = bubbles;
}

// using timer for the game

function runTimer() {
  let interval = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.getElementById("timer").textContent = timer;
    } else {
      clearInterval(interval);
      document.getElementById("hit").textContent = "0";
      document.querySelector(
        "#pbtm"
      ).innerHTML = `<h1>Your score is : ${score}</h1>
             `;
    }
  }, 1000);
}

// Making random hit

function hitRandom() {
  randomHit = Math.floor(Math.random() * 10) + 1;
  document.getElementById("hit").textContent = randomHit;
}

// Handling score
function increaseScore() {
  score += 10;
  document.getElementById("score").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (details) {
  let target = Number(details.target.innerText);
  if (details.target.id == "pbtm") {
    return;
  } else if (randomHit === target) {
    increaseScore();
    makeBubble();
    hitRandom();
  }
});

document.querySelector(".start").addEventListener("click", function () {
  hitRandom();
  makeBubble();
  runTimer();
});
