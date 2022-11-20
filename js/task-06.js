const inputValidatEl = document.querySelector('#validation-input');
const dataLengthValueEl = document.querySelector('[data-length]');

inputValidatEl.addEventListener('blur', validatoprValue);

function validatoprValue(event) {
  if (event.target.value.length === Number(dataLengthValueEl.dataset.length)) {
    inputValidatEl.classList.remove('invalid');
    inputValidatEl.classList.add('valid');
    return;
  }
  inputValidatEl.classList.remove('valid');
  inputValidatEl.classList.add('invalid');
}
