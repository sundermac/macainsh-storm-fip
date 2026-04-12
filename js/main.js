// ---Variables---

// Hamburger Menu
const burgerBtn = document.querySelector("#burger-btn");
const navMenu = document.querySelector("#main-nav");

// Product Popup
const bottles = document.querySelectorAll(".product-card-bottle");
const popup = document.querySelector("#popup");
const card = document.querySelector(".popup-card");
const image = document.querySelector(".popup-image");
const content = document.querySelector(".popup-content");
const cta = document.querySelector(".popup-cta");


let drinks = [
    {
        title: "Orange Oasis",
        desc: "A bottle of sunshine that gives you a burst of energy for the playground.",
        ingredients: "INGREDIENTS: Filtered Sparkling Water, Mandarin Orange Juice, Natural Cane Sugar, Citric Acid, Natural Beta-Carotene (for colour), Natural Vanilla Extract.",
        img: "images/bottle-orange.png"
    },
    {
        title: "Bluberry Blast",
        desc: "Super blue and super cool. It tastes like a handful of fresh berries from the forest.",
        ingredients: "INGREDIENTS: Filtered Sparkling Water, Sweet Blueberry Juice, Natural Cane Sugar, Citric Acid, Fruit and Vegetable Juice (for color), Natural Blueberry Flavour.",
        img: "images/bottle-blueberry.png"
    },
    {
        title: "Watermelon Splash",
        desc: "Clear, crisp, and bursting with watermelon flavor. It is the light and fruity way to stay refreshed all day long.",
        ingredients: "INGREDIENTS: Filtered Sparkling Water, Watermelon Juice, Natural Cane Sugar, Citric Acid, Fruit and Vegetable Juice (for color), Natural Watermelon Flavour.",
        img: "images/bottle-watermelon.png"
    },
    {
        title: "Tropical Mango",
        desc: "A sweet island treat that makes every sip feel like a vacation at the beach.",
        ingredients: "INGREDIENTS: Filtered Sparkling Water, Mango Puree (Filtered), Natural Cane Sugar, Citric Acid, Natural Beta-Carotene (for color), Natural Mango Flavour.",
        img: "images/bottle-mango.png"
    },
    {
        title: "Grape Punch",
        desc: "Big, bold grape flavor that packs a punch and keeps the fun going all day long.",
        ingredients: "INGREDIENTS: Filtered Sparkling Water, Concord Grape Juice, Natural Cane Sugar, Citric Acid, Grape Skin Extract (for color), Natural Grape Flavour.",
        img: "images/bottle-grape.png"
    }
];



// --Functions--

// Hamburger Menu
function hamburgerMenu() {
    burgerBtn.classList.toggle("rotate");
	navMenu.classList.toggle("slide-toggle");
}

// Product Popup
function displayPopup(){

    // Toggle on and off the popup class when a product card is pressed to display the popup.
    popup.classList.toggle("slide-toggle");

    // Add heading of Drink Details into the popup for the document outline.
    const drinkHead = document.createElement("h2");
    drinkHead.textContent = `Drink Details`;
    drinkHead.classList = "visually-hidden";
    card.prepend(drinkHead); //Adds the content at start of the container instead of at the end.

    // Add the close button to the popup and set the href to blank so it reloads the current page.
    const closeBtn = document.createElement("a");
    closeBtn.href = ``;
    closeBtn.textContent = `x`;
    closeBtn.classList = "close-btn";
    image.appendChild(closeBtn);

    // Add the image to the drink of popup --> will change depending on what product card is pressed.
    let drinkImg = document.querySelector("img");
    drinkImg.src = `${drinks[this.dataset.drinkIndex].img}`;
    drinkImg.alt = `${drinks[this.dataset.drinkIndex].title} Orbitz Bottle`;
    drinkImg.classList = "popup-image";
    image.appendChild(drinkImg);

    // Add the title of the drink to the popup --> will change depending on what product card is pressed.
    let drinkTitle = document.createElement("h3");
    drinkTitle.textContent = drinks[this.dataset.drinkIndex].title;
    drinkTitle.classList = "popup-title";
    content.appendChild(drinkTitle);

    // Add the description of the drink to the popup --> will change depending on what product card is pressed.
    let drinkDesc = document.createElement("p");
    drinkDesc.textContent = drinks[this.dataset.drinkIndex].desc;
    drinkDesc.classList = "popup-description";
    content.appendChild(drinkDesc);

    // Add the ingredients of the drink to the popup --> will change depending on what product card is pressed.
    let drinkIng = document.createElement("p");
    drinkIng.textContent = drinks[this.dataset.drinkIndex].ingredients;
    drinkIng.classList = "popup-ingredients";
    content.appendChild(drinkIng);

    // Add the price the drink popup --> it does not change when other product cards are pressed.
    const drinkPrice = document.createElement("p");
    drinkPrice.textContent = `$2.99`;
    drinkPrice.classList = "popup-price";
    cta.appendChild(drinkPrice);

    // Add the cart button the drink popup --> it does not change when other product cards are pressed.
    const cartBtn = document.createElement("div");
    cartBtn.textContent = `Add to Cart`;
    cartBtn.classList = "popup-btn";
    cta.appendChild(cartBtn);
};



// --Event Listeners--

// Hamburger Menu
burgerBtn.addEventListener("click", hamburgerMenu);

// Product Popup
bottles.forEach(bottle => bottle.addEventListener("click", displayPopup));