const userName = document.querySelector('#name-input');
userName.addEventListener('input', handlerInput);

const inputCurrentValue = document.querySelector('#name-output');


function handlerInput(event) {
    event.currentTarget.value.includes(null) || event.currentTarget.value.trim() === '' ? inputCurrentValue.textContent = "Anonymous" : inputCurrentValue.textContent = event.currentTarget.value.trim();
}

