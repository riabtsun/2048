const ceilStyles =
  "flex items-center justify-center bg-stone-100 text-4xl font-bold";
const fieldElement = document.querySelectorAll("#field");
let fieldMatrix = [];

window.onload = () => startGame();

const startGame = () => {
  fieldMatrix = new Array(4).fill(null).map(() => new Array(4).fill(0));
};
