const navbarToggleBtn = document.querySelector(".nav__toggle-button")
const mainNav = document.querySelector(".main-nav")

navbarToggleBtn.addEventListener("click", toggleNavigation)

function toggleNavigation() {
    if(mainNav.classList.contains("main-nav--active")) {
        navbarToggleBtn.querySelector("img").src = "./assets/logos/hamburger.svg"
    }
    else {
        navbarToggleBtn.querySelector("img").src = "./assets/logos/close.svg"
    }
    mainNav.classList.toggle("main-nav--active")
}

const navLinks = document.querySelectorAll(".nav__link")

navLinks.forEach(link => link.addEventListener("click", toggleNavigation))