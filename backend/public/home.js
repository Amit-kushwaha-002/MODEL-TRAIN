//    NAVBAR SCROLL EFFECT

window.addEventListener("scroll", function () {

    let navbar = document.querySelector("header");

    if (window.scrollY > 50) {
        navbar.style.background = "#ffffff";
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
    }
    else {
        navbar.style.background = "transparent";
        navbar.style.boxShadow = "none";
    }

});

//toogle 

function toggleMenu() {
  document.getElementById("sideMenu").classList.toggle("active");
}
//    SMOOTH SCROLL

document.querySelectorAll("nav a").forEach(anchor => {

    anchor.addEventListener("click", function l(e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });

    });

});



//   COUNTER ANIMATION


function animateCounter(id, target) {

    let element = document.getElementById(id);

    if (!element) return;

    let count = 0;

    let speed = target / 200;

    let counter = setInterval(function () {

        count += speed;

        if (count >= target) {
            element.innerText = target;
            clearInterval(counter);
        }
        else {
            element.innerText = Math.floor(count);
        }

    }, 10);

}


//    RUN COUNTERS ON LOAD

window.addEventListener("load", function () {

    animateCounter("patients", 120);
    animateCounter("scans", 350);
    animateCounter("reports", 300);

});


//    IMAGE SLIDER

let slideIndex = 0;

function showSlides() {

    let slides = document.querySelectorAll(".slide");

    if (slides.length === 0) return;

    slides.forEach(slide => slide.style.display = "none");

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 4000);

}

showSlides();


//    SCROLL REVEAL ANIMATION

window.addEventListener("scroll", function () {

    let elements = document.querySelectorAll(".reveal");

    elements.forEach(function (el) {

        let position = el.getBoundingClientRect().top;

        let screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            el.classList.add("active");
        }

    });

});





//    BUTTON CLICK ANIMATION

document.querySelectorAll("button").forEach(btn => {

    btn.addEventListener("click", function () {

        btn.style.transform = "scale(0.95)";

        setTimeout(() => {
            btn.style.transform = "scale(1)";
        }, 200);

    });

});

