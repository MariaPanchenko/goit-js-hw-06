const inputEl = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const divEl = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// function createBoxSizesArr(amount) {
//   const newBox = [];
//   let boxSize = 30;
//   for (let i = 0; i < amount; i++) {
//     newBox.push({ width: boxSize, height: boxSize });
//     boxSize += 10;
//   }
//   return newBox;
// }

// function createDiv(width, height) {
//   const newElement = document.createElement('div');
//   newElement.style.width = `${width}px`;
//   newElement.style.height = `${height}px`;
//   newElement.style.backgroundColor = getRandomHexColor();
//   return newElement;
// }

// function appendBoxes() {
//   const arr = createBoxSizesArr(Number(inputEl.value));
//   arr.forEach((sizes) => {
//     divEl.append(createDiv(sizes.width, sizes.height));
//   });
// }

function createDiv(size) {
  const newElement = document.createElement('div');
  newElement.style.width = `${size}px`;
  newElement.style.height = `${size}px`;
  newElement.style.backgroundColor = getRandomHexColor();
  return newElement;
}

function appendBoxes() {
  if (divEl.childNodes.length) {
    divEl.innerHTML = '';
  }
  let boxSize = 30;
  for (let i = 0; i < inputEl.value; i++) {
    divEl.append(createDiv(boxSize));
    boxSize += 10;
  }
}

function deleteBoxes() {
  if (divEl.childNodes.length) {
    divEl.innerHTML = '';
    inputEl.value = undefined;
  }
}

btnCreate.addEventListener('click', appendBoxes);
btnDestroy.addEventListener('click', deleteBoxes);
