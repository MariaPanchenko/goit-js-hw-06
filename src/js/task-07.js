const inputChange = document.querySelector('input#font-size-control');
const mainText = document.querySelector('span#text');

inputChange.addEventListener('input', (e) => {
  mainText.style.fontSize = `${e.target.value}px`;
});
