// --- Part 2: JavaScript Functions ---

// Function with parameters and return value
function calculateDouble(num) {
    return num * 2;
}

// Demonstrate scope
let globalVar = "I am global!";

function scopeDemo() {
    let localVar = "I am local!";
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible only here
}
scopeDemo();

// --- Part 3: Combine CSS + JS ---

// Animate the box
const box = document.querySelector(".box");
const animateBoxBtn = document.getElementById("animateBoxBtn");

animateBoxBtn.addEventListener("click", () => {
    toggleBounce(box);
});

// Reusable function to toggle bounce animation
function toggleBounce(element) {
    element.classList.toggle("bounce");
}

// Modal logic
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("modal");

openModalBtn.addEventListener("click", () => {
    showModal();
});

closeModalBtn.addEventListener("click", () => {
    hideModal();
});

function showModal() {
    modal.classList.remove("hidden");
}

function hideModal() {
    modal.classList.add("hidden");
}
