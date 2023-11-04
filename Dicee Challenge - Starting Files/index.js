var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var leftImg = "images/dice" + randomNumber1 + ".png";
var dice1 = document.querySelector(".dice .img1");
dice1.setAttribute("src", leftImg);

var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var rightImg = "images/dice" + randomNumber2 + ".png";
var dice2 = document.querySelector(".dice .img2");
dice2.setAttribute("src", rightImg);

h1 = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
    h1.textContent = "🚩 Player1 Wins";
} else if (randomNumber2 > randomNumber1) {
    h1.textContent = "🚩 Player2 Wins";
} else {
    h1.textContent = "🪢 It's a tie";
}