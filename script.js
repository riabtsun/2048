const ceilStyles =
  "flex items-center justify-center bg-stone-100 text-4xl font-bold";
const fieldElement = document.querySelector("#field");
let fieldMatrix = [];

window.onload = () => startGame();

const startGame = () => {
  fieldMatrix = new Array(4).fill(null).map(() => new Array(4).fill(0));
  addNewBasic();
  addNewBasic();
  drawField();
};

const drawField = () => {
  fieldMatrix.flat().forEach((item) => {
    const div = document.createElement("div");
    div.innerText = item === 0 ? "" : item;
    div.classList.value = ceilStyles;
    fieldElement.appendChild(div);
  });
};

const addNewBasic = () => {
  const basicValue = Math.random() > 0.7 ? 4 : 2;
  let foundedEmpty = false;
  while (!foundedEmpty) {
    let rowIndex = Math.floor(Math.random() * 4);
    let colIndex = Math.floor(Math.random() * 4);
    if (fieldMatrix[rowIndex][colIndex] === 0) {
      fieldMatrix[rowIndex][colIndex] = basicValue;
      foundedEmpty = true;
    }
  }
};
