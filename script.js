let navLinks = document.querySelectorAll(".nav-menu .nav-link")
let menuOpenButton = document.querySelector("#menu-open-button")
let menuCloseButton = document.querySelector("#menu-close-button")

// Open menu
menuOpenButton.addEventListener("click", () => {
    document.body.classList.add("show-mobile-menu")
})

// Close menu
menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu")
})
navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click())
})

// initilze swiper
let swiper = new Swiper('.slider-wrapper', {
    loop: true,
    spaceBetween: 25,
    // if we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicullets: true
    },
    // navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // responsive brek points
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
})