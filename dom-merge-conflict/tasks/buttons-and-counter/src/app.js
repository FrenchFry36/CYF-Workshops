// increments the number in a node's text
function increment(node) {
  let current = node.textContent;
  node.textContent = Number(current) + 1;
}

// decrements the number in a node's text
function decrement(node) {
  let current = node.textContent;
  node.textContent = Number(current) - 1;
}

export function App() {
  const body = document.createElement("body");

  const header = document.createElement("header");
  header.innerHTML = `
    <h1>Number Counter</h1>
    <p>A simple counter. Press increment to increase or decrement to decrease the count by one.</p>
  `;
  body.appendChild(header);

  const main = document.createElement("main");
  main.innerHTML = `
    <p id="counter" data-testid="counter">0</p>
    <button id="increment">Increment</button>
    <button id="increment2">Increment again</button>
    <button id="decrement">Decrement</button>
  `;
  body.appendChild(main);

  const counter = body.querySelector("#counter");
  const incrementButton = body.querySelector("#increment");
  const incrementButton2 = body.querySelector("#increment2");
  const decrementButton = body.querySelector("#decrement");

  incrementButton.addEventListener("click", () => {
    increment(counter);
  });

  incrementButton2.addEventListener("click", () => {
    increment(counter);
  });

  decrementButton.addEventListener("click", () => {
    decrement(counter);
  });

  return body;
}
