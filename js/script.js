const navbarToggleBtn = document.querySelector(".nav__toggle-button")
const mainNav = document.querySelector(".header-nav")

navbarToggleBtn.addEventListener("click", toggleNavigation)

function toggleNavigation() {
    if(mainNav.classList.contains("header-nav--active")) {
        navbarToggleBtn.querySelector("img").src = "./assets/logos/hamburger.svg"
    }
    else {
        navbarToggleBtn.querySelector("img").src = "./assets/logos/close.svg"
    }
    mainNav.classList.toggle("header-nav--active")
}

const navLinks = document.querySelectorAll(".nav__link")

navLinks.forEach(link => link.addEventListener("click", toggleNavigation))




const slideImages = document.querySelectorAll("slide-img")
const controlBtns = document.querySelectorAll("control-btn")

controlBtns.forEach(btn => btn.addEventListener("click", handleSlider))

let index = 0
function handleSlider(e) {
    slideImages[index].classList.remove("active")

    index = index + Number(e.target.getAttribute("data-action"))
    console.log(index)

    if(index < 0) {
        index = slideImages.length - 1
    }
    else if(index > slideImages.length - 1) {
        index = 0
    }

    slideImages[index].classList.add("active")
}