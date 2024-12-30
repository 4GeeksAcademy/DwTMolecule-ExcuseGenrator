/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let who = ["un perro", "un ladron", "mi mama", "el chofer"];
  let action = ["se comio", "me robo", "mojo", "se llevo"];
  let what = ["mi proyecto", "mi laptop "];
  let when = [
    "en el bus",
    "en la cocina",
    "en el centro",
    "en la piscina",
    "en el avion",
    "en la sala"
  ];
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  let excuse =
    getRandomElement(who) +
    " " +
    getRandomElement(action) +
    " " +
    getRandomElement(what) +
    " " +
    getRandomElement(when) +
    ".";

  document.getElementById("excuse").innerHTML = excuse;
};
document.getElementById("excuse");
