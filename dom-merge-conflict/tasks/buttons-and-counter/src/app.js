import header from "./header.js";
import main from "./main.js";

//increments the number in a node's text
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

  body.appendChild(header);

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
