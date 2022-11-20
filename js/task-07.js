const rangeFontSizeEl = document.querySelector('#font-size-control');
const rangeText = document.querySelector('#text');

rangeFontSizeEl.addEventListener('input', event => {
  rangeText.style.fontSize = `${event.currentTarget.value}px`;
});
