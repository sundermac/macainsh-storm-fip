// --Variables--

// Hamburger Menu
const burgerBtn = document.querySelector("#burger-btn");
const navMenu = document.querySelector("#main-nav");

// --Functions--

// Hamburger Menu
function hamburgerMenu() {
    burgerBtn.classList.toggle("rotate");
	navMenu.classList.toggle("slide-toggle");
}

// --Event Listeners--

// Hamburger Menu
burgerBtn.addEventListener("click", hamburgerMenu);