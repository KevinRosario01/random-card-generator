/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const cardValue = document.querySelector(".card-value");
  cardValue.innerHTML = pickCard();

  const cardSuits = document.querySelectorAll(".card-suit");
  let suit = pickSuit();
  cardSuits.forEach(cardSuit => {
    cardSuit.innerHTML = suit;
    if (suit === "♦" || suit === "♥") {
      cardSuit.style.color = "red";
    }
  });

  console.log("Suit: " + pickSuit());
  console.log("Card: " + pickCard());
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
