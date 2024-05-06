let yourScore = document.getElementById("score-card");
let timeLeft = document.getElementById("time-card");
const emojis = document.querySelectorAll(".emoji");
let catched = "/assets/1690-love-face-emoji.gif";
let score = 0;
let time = 60;

const emojiSources = [
  "/assets/1690-love-face-emoji.gif",
  "/assets/1396-money-mouth-emoji.gif",
  "/assets/8112-scream-emoji.gif",
  "/assets/4936-halo-emoji.gif",
  "/assets/5218-cry-face-emoji.gif",
  "/assets/6397-skypeloveheartcircle.gif",
  "/assets/6670-skype-cool.gif",
  "/assets/6686-hot-face-emoji.gif",
  "/assets/6767-skype-tired.gif",
  "/assets/9197-skype-sleeping.gif",
];

function randomizeEmojis() {
  emojis.forEach((emoji) => {
    realTime = emoji.src =
      emojiSources[Math.floor(Math.random() * emojiSources.length)];
  });
}

const intervalId = setInterval(() => {
  randomizeEmojis();
}, 500);

function timeDuration() {
  let interval = setInterval(() => {
    if (time < 1) {
      alert("Game Over You Scored " + score + " Points");
      time = 60;
      resetScore()
    }
    if (time < 10) {
      timeLeft.innerHTML = "Time Left 0" + time;
    } else {
      timeLeft.innerHTML = "Time Left " + time;
    }

    time--;
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
  }, 61800);
}

timeDuration();

function clickedBox() {
  if (catched == realTime) {
    console.log("catch");
    score = score + 10;
    yourScore.innerHTML = "Your Score " + score;
  } else {
    console.log("missed");
  }
}

function resetScore() {
  score = 0;
  yourScore.innerHTML = "Your Score " + score;
  timeDuration();
}
