const body = document.body;
const button = document.querySelector('.change-color');
const span = document.querySelector('.color');

button.addEventListener('click', getRandomColor);

 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function getRandomColor ()  {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  span.textContent = randomColor;
}
