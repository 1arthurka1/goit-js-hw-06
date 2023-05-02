const buttonRef = document.querySelector('.change-color');
const textRef = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

function changeBackgroundColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  textRef.textContent = randomColor;
}

buttonRef.addEventListener('click', changeBackgroundColor);
