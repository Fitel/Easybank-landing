let btnHamburger = document.querySelector("#btnHamburger");
let body = document.querySelector("body");
let header = document.querySelector(".header");
let overlay = document.querySelector(".overlay");
let fadeElems = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", () => {

    if(header.classList.contains("open")) {
        body.classList.remove("noscroll");
        header.classList.remove("open");
        fadeElems.forEach( (element) => {
            element.classList.remove("fade-in");
            element.classList.add("fade-out");
        });
    } else {
        body.classList.add("noscroll");
        header.classList.add("open");
        fadeElems.forEach( (element) => {
            element.classList.remove("fade-out");
            element.classList.add("fade-in");
        });
    };
});