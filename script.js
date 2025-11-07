// // Scroll Effect
// window.addEventListener("scroll", () => {
//     const navContainer = document.querySelector(".nav-container");
//     if (window.scrollY > 0) navContainer.classList.add("scrolled");
//     else navContainer.classList.remove("scrolled");
// });

// // Toggle Menu
// function toggleMenu() {
//     const mobileMenu = document.querySelector(".mobile-menu");
//     mobileMenu.classList.toggle("active");
// }


// Navbar background change on scroll
window.addEventListener("scroll", () => {
    const navContainer = document.querySelector(".nav-container");
    if (window.scrollY > 0) {
        navContainer.classList.add("scrolled");
    } else {
        navContainer.classList.remove("scrolled");
    }
});

// Toggle mobile menu open/close
function toggleMenu() {
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu.classList.toggle("active");
}

// Close menu when any mobile link is clicked
document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll(".mobile-menu a");
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            const mobileMenu = document.querySelector(".mobile-menu");
            mobileMenu.classList.remove("active");
        });
    });
});
