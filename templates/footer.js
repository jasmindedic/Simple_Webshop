// Get needed elements 
let footer = document.querySelector(".footer");


// Function to generate footer 
function generateFooter() {
    footer.innerHTML = createFooter();
}

// Function to create footer content
function createFooter() {
    return /* html */`
    <div class="social-links-container">
        <ul class="social-links">
            <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-github"></i></a></li>
        </ul>
    </div>
    `;
}