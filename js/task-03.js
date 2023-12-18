const userName = document.querySelector("#name-input");
userName.addEventListener("input", onInput);

function onInput(event) {
  const inputCurrentValue = document.querySelector("#name-output");
  inputCurrentValue.textContent =
    event.currentTarget.value.trim() || "Anonymous";
}
