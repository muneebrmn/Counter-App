const counter = document.getElementById("counter");

const decrease = document.getElementById("dec");
const increase = document.getElementById("inc");

let c = 0;

function increment() {
    c++;
    updateCounter();
}

function reset() {
    c = 0;
    updateCounter();
}

function decrement() {
    c--;
    updateCounter();
}

function updateCounter() {
    counter.innerText = c;
}