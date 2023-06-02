let counterValue = 0;
const showValue = document.querySelector('#value');
const buttonMin = document.querySelector('button[data-action="decrement"]');
const buttonPlus = document.querySelector('button[data-action="increment"]');

buttonMin.addEventListener('click', () => {
  counterValue--;
  showValue.textContent = counterValue;
});

buttonPlus.addEventListener('click', () => {
  counterValue++;
  showValue.textContent = counterValue;
});
