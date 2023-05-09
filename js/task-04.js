const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');
const counterValue = document.getElementById("value");
let count = 0;

function setupCounter() {
  counterValue.textContent = count;
}

incrementButton.addEventListener("click", () => {
  count++;
  setupCounter();
});

decrementButton.addEventListener("click", () => {
  count--;
  setupCounter();
});
