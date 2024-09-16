const ceilStyles =
  "flex items-center justify-center bg-stone-100 text-4xl font-bold";
const fieldElement = document.querySelector("#field");
let fieldMatrix = [];

window.onload = () => startGame();
document.addEventListener("keyup", (event) => {
  if (event.key === "ArrowLeft") {
    moveLeft();
    addNewBasic();
    drawField();
  } else if (event.key === "ArrowRight") {
    moveRight();
    addNewBasic();
    drawField();
  } else if (event.key === "ArrowUp") {
    moveUp();
    addNewBasic();
    drawField();
  } else if (event.key === "ArrowDown") {
    moveDown();
    addNewBasic();
    drawField();
  }
});

const startGame = () => {
  fieldMatrix = new Array(4).fill(null).map(() => new Array(4).fill(0));
  addNewBasic();
  addNewBasic();
  drawField();
};

const drawField = () => {
  fieldElement.innerHTML = "";
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
  while (!foundedEmpty && checkFreeCell()) {
    let rowIndex = Math.floor(Math.random() * 4);
    let colIndex = Math.floor(Math.random() * 4);
    if (fieldMatrix[rowIndex][colIndex] === 0) {
      fieldMatrix[rowIndex][colIndex] = basicValue;
      foundedEmpty = true;
    }
  }
};

const moveLeft = () => {
  fieldMatrix = fieldMatrix.map((row) => {
    let filteredRow = row.filter((item) => item > 0);
    let mergedRow = filteredRow.map((item, index, currentRow) => {
      if (item === currentRow[index + 1]) {
        currentRow.splice(1, index + 1);
        return item * 2;
      } else {
        return item;
      }
    });
    let resultRow = mergedRow.filter((item) => item > 0);

    while (resultRow.length < 4) {
      resultRow.push(0);
    }
    return resultRow;
  });
};

const moveRight = () => {
  fieldMatrix = fieldMatrix.map((row) => {
    let filteredRow = row.filter((item) => item > 0);
    let mergedRow = filteredRow.reverse().map((item, index, currentRow) => {
      if (item === currentRow[index + 1]) {
        currentRow.splice(1, index + 1);
        return item * 2;
      } else {
        return item;
      }
    });
    let resultRow = mergedRow.filter((item) => item > 0);

    while (resultRow.length < 4) {
      resultRow.push(0);
    }
    return resultRow.reverse();
  });
};

const moveUp = () => {
  let transposedMatrix = new Array(4).fill(0).map(() => new Array(4).fill(0));
  fieldMatrix.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      transposedMatrix[cellIndex][rowIndex] = cell;
    });
  });

  transposedMatrix = transposedMatrix.map((row) => {
    let filteredRow = row.filter((item) => item > 0);
    let mergedRow = filteredRow.map((item, index, currentRow) => {
      if (item === currentRow[index + 1]) {
        currentRow.splice(1, index + 1);
        return (item *= 2);
      } else {
        return item;
      }
    });
    let resultRow = mergedRow.filter((item) => item > 0);
    while (resultRow.length < 4) {
      resultRow.push(0);
    }
    return resultRow;
  });

  transposedMatrix.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      fieldMatrix[cellIndex][rowIndex] = cell;
    });
  });
};

const moveDown = () => {
  let transposedMatrix = new Array(4).fill(0).map(() => new Array(4).fill(0));
  fieldMatrix.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      transposedMatrix[cellIndex][rowIndex] = cell;
    });
  });

  transposedMatrix = transposedMatrix.map((row) => {
    let filteredRow = row.filter((item) => item > 0);
    let mergedRow = filteredRow.reverse().map((item, index, currentRow) => {
      if (item === currentRow[index + 1]) {
        currentRow.splice(1, index + 1);
        return (item *= 2);
      } else {
        return item;
      }
    });
    let resultRow = mergedRow.filter((item) => item > 0);
    while (resultRow.length < 4) {
      resultRow.push(0);
    }
    return resultRow.reverse();
  });

  transposedMatrix.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      fieldMatrix[cellIndex][rowIndex] = cell;
    });
  });
};

const checkFreeCell = () => {
  return fieldMatrix.flat().some((item) => item === 0);
};
