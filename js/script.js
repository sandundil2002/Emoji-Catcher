let emoji1 = document.getElementById("emoji-1");
let emoji2 = document.getElementById("emoji-2");
let emoji3 = document.getElementById("emoji-3");
let emoji4 = document.getElementById("emoji-4");
let emoji5 = document.getElementById("emoji-5");
let emoji6 = document.getElementById("emoji-6");
let emoji7 = document.getElementById("emoji-7");
let emoji8 = document.getElementById("emoji-8");
let emoji9 = document.getElementById("emoji-9");
let emoji10 = document.getElementById("emoji-10");
let box1;
let box2;
let box3;
let box4;
let box5;
let box6;
let box7;
let box8;
let box9;
let box10;

var emojiArray = [
  emoji1,
  emoji2,
  emoji3,
  emoji4,
  emoji5,
  emoji6,
  emoji7,
  emoji8,
  emoji9,
  emoji10,
];

function random() {
  box1 = Math.floor(Math.random() * 11);
  box2 = Math.floor(Math.random() * 11);
  box3 = Math.floor(Math.random() * 11);
  box4 = Math.floor(Math.random() * 11);
  box5 = Math.floor(Math.random() * 11);
  box6 = Math.floor(Math.random() * 11);
  box7 = Math.floor(Math.random() * 11);
  box8 = Math.floor(Math.random() * 11);
  box9 = Math.floor(Math.random() * 11);
  box10 = Math.floor(Math.random() * 11);
  display()
}

function display() {
  emojiArray[box1].setAttribute("src", "/assets/1690-love-face-emoji.gif");
  emojiArray[box2].setAttribute("src", "/assets/1396-money-mouth-emoji.gif");
  emojiArray[box3].setAttribute("src", "/assets/8112-scream-emoji.gif");
  emojiArray[box4].setAttribute("src", "/assets/4936-halo-emoji.gif");
  emojiArray[box5].setAttribute("src", "/assets/5218-cry-face-emoji.gif");
  emojiArray[box6].setAttribute("src", "/assets/6397-skypeloveheartcircle.gif");
  emojiArray[box7].setAttribute("src", "/assets/6670-skype-cool.gif");
  emojiArray[box8].setAttribute("src", "/assets/6686-hot-face-emoji.gif");
  emojiArray[box9].setAttribute("src", "/assets/6767-skype-tired.gif");
  emojiArray[box10].setAttribute("src", "/assets/9197-skype-sleeping.gif");
}

setInterval(random, 300);
