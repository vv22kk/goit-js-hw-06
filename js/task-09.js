function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyColorEl = document.querySelector('body');
const backgroundColor = document.querySelector('.color');
const buttonChangeColor = document.querySelector('.change-color');

buttonChangeColor.addEventListener('click', onChangeColor);

function onChangeColor() {
  bodyColorEl.style.backgroundColor = getRandomHexColor();
  backgroundColor.textContent = getRandomHexColor();
}
