const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector('#value');

const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};
incrementBtn.addEventListener('click', function () {
  counter.increment();
  valueEl.textContent = counter.value;
});
decrementBtn.addEventListener('click', function () {
  counter.decrement();
  valueEl.textContent = counter.value;
});
