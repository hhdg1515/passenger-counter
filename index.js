let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function add() {
    count += 1;
    countEl.textContent = count;
}

function reviewOrder() {
    saveEl.textContent="";
    countStr = "You have ordered "+ count + " coffee☕";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}


function cancel() {
    countStr = "Please start your order";
    saveEl.textContent = countStr;
    countEl.textContent = 0;
    count = 0;
}
