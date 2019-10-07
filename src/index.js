import Game from "./game";

document.addEventListener('DOMContentLoaded', () => {
  let context = document.getElementById("game-canvas").getContext("2d");
  window.context = context;
  let game = new Game(context)
});