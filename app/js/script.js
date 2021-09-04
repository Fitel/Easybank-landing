let btnHamburger = document.querySelector("#btnHamburger");
let header = document.querySelector(".header");
let overlay = document.querySelector(".overlay");

btnHamburger.addEventListener("click", () => {

    if(header.classList.contains("open")) {
        header.classList.remove("open");
        overlay.classList.remove("fade-in");
        overlay.classList.add("fade-out");
    } else {
        header.classList.add("open");
        overlay.classList.remove("fade-out");
        overlay.classList.add("fade-in");
    };
});