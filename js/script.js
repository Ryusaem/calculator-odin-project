// --- VARIABLES --- //
const row = 4;
const column = 4;
const keys = {
  0: 7,
  1: 8,
  2: 9,
  3: "/",
  4: 4,
  5: 5,
  6: 6,
  7: "*",
  8: 1,
  9: 2,
  10: 3,
  11: "-",
  12: ".",
  13: 0,
  14: "=",
  15: "+",
};

// --- SELECTORS --- //
const controlButtons = document.querySelector(".control-buttons");
const calculatorKeys = document.querySelector(".calculator-keys");

// BUTTON CLEAR + DELETE CREATION //
const buttonClear = document.createElement("button");
buttonClear.textContent = "Clear";
buttonClear.value = "Clear";
buttonClear.classList.add("btn");
controlButtons.appendChild(buttonClear);

const buttonDelete = document.createElement("button");
buttonDelete.textContent = "Delete";
buttonDelete.value = "Delete";
buttonDelete.classList.add("btn");
controlButtons.appendChild(buttonDelete);

// --- BUTTON CALCULATOR KEYS --- //
for (let i = 0; i < row * column; i++) {
  let key = document.createElement("button");
  let value = keys[i];
  key.value = value;
  key.textContent = value;
  key.id = `key-${value}`;
  key.classList.add("key");
  calculatorKeys.appendChild(key);
}

calculatorKeys.addEventListener("click", (e) => console.log(e.target.value));
controlButtons.addEventListener("click", (e) => console.log(e.target.value));
