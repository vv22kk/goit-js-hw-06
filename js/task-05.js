const inputNameEl = document.querySelector('#name-input');
console.log(inputNameEl);
const valueSpanEl = document.querySelector('#name-output');
console.log(valueSpanEl);

inputNameEl.addEventListener('input', onInputName);

function onInputName(event) {
  const handerValueSpan =
    !event.currentTarget.value === ''
      ? (event.currentTarget.value = 'Anonymous')
      : (valueSpanEl.textContent = event.currentTarget.value);
  return handerValueSpan;
}
