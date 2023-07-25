const divContainer = document.querySelector(".container-grid");
let size = 16;
createGrid();

function createGrid() {
  for (let i = 0; i < size; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.className = `row-container`;
    divContainer.append(rowDiv);
    for (let j = 0; j < size; j++) {
      const squareDiv = document.createElement("div");
      squareDiv.className = "square";
      rowDiv.append(squareDiv);
    }
  }
}

document.addEventListener("mouseover", (event) => {
  event.target.classList.add("hovered");
});

const selectButton = document.querySelector("button");
selectButton.onclick = () => {
  selectedValue = prompt("select a grid size (<=100)");
  if (selectedValue <= 100) {
    size = selectedValue;
  }
  const rowContainers = document.querySelectorAll(".rowContainer");
  rowContainers.forEach((rowContainer) => rowContainer.remove());
  const squareDivs = document.querySelectorAll(".square");
  squareDivs.forEach((squareDiv) => squareDiv.remove());
  createGrid();
};
