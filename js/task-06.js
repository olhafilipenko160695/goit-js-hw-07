
const box = document.getElementById('boxes');
const number = document.querySelector('[type = "number"]');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');


createButton.addEventListener('click', createBoxes)
destroyButton.addEventListener('click', deleteBoxes)


function createBoxes() {
  const amount = number.value;
  if (amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100.');
    return;
  }
  deleteBoxes();
  
  let sizeofBox = 30;

  for (let i = 0; i < amount; i += 1){
    const newBox = document.createElement('div');
    newBox.style.width = `${sizeofBox}px`;
    newBox.style.height = `${sizeofBox}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    box.appendChild(newBox);
    sizeofBox += 10;
  }
  number.value = '';
  
  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
}

function deleteBoxes(){
  box.innerHTML = '';
}