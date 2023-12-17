const loginForm = document.querySelector('.login-form');
const loginEmail = document.querySelector('[name="email"]');
const loginPassword = document.querySelector('[name="password"]');

const button = document.querySelector('[type ="submit"]');

loginForm.addEventListener('submit', sendForm);

function sendForm(event) {
    event.preventDefault();
 
    let formElements = this.elements;
    let formData = {};
    // console.log(formElements);
    

    for (let i = 0; i < formElements.length; i += 1){
        let element = formElements[i];
// console.dir(element);
        if (element.tagName === "INPUT" && element.type !== 'submit') {
            formData[element.name] = element.value.trim();
        }
    }
       if (loginEmail.value === '' || loginPassword.value === "") {
        alert('All form fields must be filled in')
       }
    
    console.log(formData);

    this.reset();
}