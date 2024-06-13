/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  updateCard();
  startTimer();
};

function pickSuit() {
  let suit = Math.floor(Math.random() * 4);

  const numToSuit = {
    "0": "♣",
    "1": "♠",
    "2": "♦",
    "3": "♥"
  };
  // ♠ ♣ ♥ ♦
  return numToSuit[suit];
}

function pickCard() {
  let card = Math.floor(Math.random() * 12);

  const numToCard = {
    "0": "2",
    "1": "3",
    "2": "4",
    "3": "5",
    "4": "6",
    "5": "7",
    "6": "8",
    "7": "9",
    "8": "10",
    "9": "J",
    "10": "Q",
    "11": "K",
    "12": "A"
  };

  return numToCard[card];
}

function updateCard() {
  let suit = pickSuit();
  let card = pickCard();

  const cardValue = document.querySelector(".card-value");
  const cardSuits = document.querySelectorAll(".card-suit");

  cardValue.innerHTML = card;

  cardSuits.forEach(cardSuit => {
    cardSuit.innerHTML = suit;
    if (suit === "♦" || suit === "♥") {
      cardSuit.style.color = "red";
    } else {
      cardSuit.style.color = "black";
    }
  });

  console.log("Suit: " + suit);
  console.log("Card: " + card);
}

const button = document.getElementById("myButton");

button.addEventListener("click", () => {
  updateCard();
});

function updateTimer(seconds) {
  const timer = document.getElementById("timer");
  timer.innerHTML = `Next card in: ${seconds}s`;
}

function startTimer() {
  let countdown = 10;
  updateTimer(countdown);

  setInterval(() => {
    updateCard();
    countdown = 10;
    updateTimer(countdown);
  }, 10000);

  setInterval(() => {
    countdown--;
    updateTimer(countdown);
  }, 1000);
}

function updateCardSize() {
  const width = document.getElementById("width").value;
  const height = document.getElementById("height").value;
  const card = document.getElementById("card");
  card.style.width = `${width}px`;
  card.style.height = `${height}px`;
}

const update = document.getElementById("updateSize");

update.addEventListener("click", () => {
  updateCardSize();
});
