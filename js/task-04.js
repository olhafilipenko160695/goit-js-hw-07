const loginForm = document.querySelector('.login-form');
const button = document.querySelector('[type ="submit"]');

loginForm.addEventListener('submit', sendForm);

function sendForm(event) {
    event.preventDefault();
 
    let formElements = this.elements;
    let formData = {};

    
    for (let i = 0; i < formElements.length; i += 1){
        let element = formElements[i];
        
        if (element.tagName === "INPUT" && element.type !== 'submit') {
             if (loginForm.elements.email.value === '' || loginForm.elements.password.value === '') {
        alert('All form fields must be filled in')
             } else {
            formData[element.name] = element.value.trim();
       }
      }
    }
    console.log(formData);

    this.reset();
}

