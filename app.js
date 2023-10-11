window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 0);
    const backtop = document.querySelector(".backToTop");
    backtop.classList.toggle("scrolledBack", window.scrollY > 100);
});

const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".closeBtn");
const slideNav = document.querySelector(".slideNav");
const closeMenu1 = document.querySelector(".slideNav .closeMenu1")
const closeMenu2 = document.querySelector(".slideNav .closeMenu2")
const closeMenu3 = document.querySelector(".slideNav .closeMenu3")
const closeMenu4 = document.querySelector(".slideNav .closeMenu4")
const closeMenu5 = document.querySelector(".slideNav .closeMenu5")


hamburger.addEventListener("click", () => {
    slideNav.style.left = "0px";
});

closeBtn.addEventListener("click", () => {
    slideNav.style.left = "-300%";
});

closeMenu1.addEventListener("click", () => {
    slideNav.style.left = "-300%";
});

closeMenu2.addEventListener("click", () => {
    slideNav.style.left = "-300%";
});

closeMenu3.addEventListener("click", () => {
    slideNav.style.left = "-300%";
});

closeMenu4.addEventListener("click", () => {
    slideNav.style.left = "-300%";
});

closeMenu5.addEventListener("click", () => {
    slideNav.style.left = "-300%";
});
