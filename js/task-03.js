const userName = document.querySelector('#name-input');
userName.addEventListener('input', handlerInput);

const inputCurrentValue = document.querySelector('#name-output');


function handlerInput(event) {
 inputCurrentValue.textContent = event.currentTarget.value.trim() || 'Anonymous';
}

