const inputNameEl = document.querySelector('#name-input');
console.log(inputNameEl);
const valueSpanEl = document.querySelector('#name-output');
console.log(valueSpanEl);

inputNameEl.addEventListener('input', event => {
  const handerValueSpan =
    event.currentTarget.value === ''
      ? (valueSpanEl.textContent = 'Anonymous')
      : (valueSpanEl.textContent = event.currentTarget.value);
});
