let counter = document.getElementById("count-element");
let saver = document.getElementById("save-element");

let count = 0;

function increment() {
  count += 1;
  counter.innerText = count;
}

function decrement() {
  count -= 1;
  counter.innerText = count;
}

function incrementBig() {
  count += 10;
  counter.innerText = count;
}

function decrementBig() {
  count -= 10;
  counter.innerText = count;
}

function save() {
  let display = ` ( ${count} ) `;
  saver.innerText += display;
  counter.innerText = 0;
  count = 0;
}

function wipe() {
  counter.innerText = 0;
  saver.innerText = `Entries: `;
  count = 0;
}
