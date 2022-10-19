// Get elements
let navbar = document.querySelector(".nav");


// Function to generate navbar 
function generateNavbar() {
    navbar.innerHTML = createNavbar();
}

// Function to create navbar content
function createNavbar() {
    return /* html */`
    <div class="logo-container">
        <img class="logo" src="./images/logo.png">
    </div>
    <div class="toggle-btn" onclick="hamburgerMenu()">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#"><i class="fa-solid fa-basket-shopping"></i></a></li>
    </ul>
    `;
}

// Hamburger menu
function hamburgerMenu() {
    let navLinks = document.querySelector(".nav-links");
    let logo = document.querySelector(".logo");

    navLinks.classList.toggle("active");
    logo.classList.toggle("active");
}