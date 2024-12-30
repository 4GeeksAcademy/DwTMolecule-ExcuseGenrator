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

  console.log(who[Math.floor(Math.random() * who.length)]);
  console.log(action[Math.floor(Math.random() * action.length)]);
  console.log(what[Math.floor(Math.random() * what.length)]);
  console.log(when[Math.floor(Math.random() * when.length)]);

  let excuse =
    who[Math.floor(Math.random() * who.length)] +
    " " +
    action[Math.floor(Math.random() * action.length)] +
    " " +
    what[Math.floor(Math.random() * what.length)] +
    " " +
    when[Math.floor(Math.random() * when.length)] +
    ".";
  console.log(excuse);
  document.getElementById("excuse").innerHTML = excuse;
};
document.getElementById("excuse");
