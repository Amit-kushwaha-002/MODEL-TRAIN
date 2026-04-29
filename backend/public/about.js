   // PAGE FADE-IN ANIMATION

document.addEventListener("DOMContentLoaded", function () {

   document.body.style.opacity = "0";

   setTimeout(function () {
      document.body.style.transition = "opacity 1s";
      document.body.style.opacity = "1";
   }, 100);

});
//toogle
function toggleMenu() {
  document.querySelector(".side-menu").classList.toggle("active");
}


   // TEAM CARD HOVER EFFECT

let teamCards = document.querySelectorAll(".team-card");

teamCards.forEach(card => {

   card.addEventListener("mouseover", function () {
      card.style.transform = "scale(1.05)";
      card.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
   });

   card.addEventListener("mouseout", function () {
      card.style.transform = "scale(1)";
      card.style.boxShadow = "none";
   });

});


   // STATISTICS COUNTER

function startCounter(id, target) {

   let element = document.getElementById(id);

   if (!element) return;

   let count = 0;

   let speed = target / 150;

   let interval = setInterval(function () {

      count += speed;

      if (count >= target) {

         element.innerText = target;
         clearInterval(interval);

      }
      else {

         element.innerText = Math.floor(count);

      }

   }, 20);

}


/* RUN COUNTER */

window.addEventListener("load", function () {

   startCounter("doctors", 25);
   startCounter("patients", 500);
   startCounter("scans", 1200);

});


   // SCROLL REVEAL ANIMATION

window.addEventListener("scroll", function () {

   let elements = document.querySelectorAll(".reveal");

   elements.forEach(function (el) {

      let position = el.getBoundingClientRect().top;
      let screenHeight = window.innerHeight;

      if (position < screenHeight - 100) {

         el.style.opacity = "1";
         el.style.transform = "translateY(0)";
      }

   });

});


   // MODAL POPUP (MORE INFO)

function openModal() {

   let modal = document.getElementById("aboutModal");

   if (modal) {
      modal.style.display = "flex";
   }

}

function closeModal() {

   let modal = document.getElementById("aboutModal");

   if (modal) {
      modal.style.display = "none";
   }

}


   // SCROLL TO TOP BUTTON

let topButton = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

   if (window.scrollY > 300) {

      topButton.style.display = "block";

   }
   else {

      topButton.style.display = "none";

   }

});

function scrollToTop() {

   window.scrollTo({
      top: 0,
      behavior: "smooth"
   });

}


   // BUTTON CLICK EFFECT

let buttons = document.querySelectorAll("button");

buttons.forEach(btn => {

   btn.addEventListener("click", function () {

      btn.style.transform = "scale(0.9)";

      setTimeout(() => {
         btn.style.transform = "scale(1)";
      }, 200);

   });

});