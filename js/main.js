
// Variables
const btn = document.querySelector("#main-menu-btn");
const navMenu = document.querySelector("#main-nav");

// Functions
function hamburgerMenu() {
	btn.classList.toggle("rotate");
	navMenu.classList.toggle("slide-toggle");
}

// Event Listeners
btn.addEventListener("click", hamburgerMenu); 