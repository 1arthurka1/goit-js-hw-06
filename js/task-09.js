const buttonRef = document.querySelector('.change-color');
const colorRef = document.querySelector('.color');
const bodyRef = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

function changeBackgroundColor() {
  const randomColor = getRandomHexColor();
  bodyRef.style.backgroundColor = randomColor;
  colorRef.textContent = randomColor;
}

buttonRef.addEventListener('click', changeBackgroundColor);
