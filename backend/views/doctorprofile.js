   // DASHBOARD COUNTER ANIMATION

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


/* RUN COUNTERS */

window.addEventListener("load", function () {

   startCounter("totalPatients", 2);
   startCounter("totalScans", 4);
   startCounter("totalReports", 2);
   startCounter("pendingReports", 1);

});


   // EDIT PROFILE TOGGLE

function editProfile() {

   let fields = document.querySelectorAll(".editable");

   fields.forEach(field => {

      field.removeAttribute("readonly");
      field.style.border = "1px solid #1f6d95";

   });

   alert("You can now edit your profile");

}


   // SAVE PROFILE

function saveProfile() {

   let fields = document.querySelectorAll(".editable");

   fields.forEach(field => {

      field.setAttribute("readonly", true);
      field.style.border = "none";

   });

   alert("Profile Updated Successfully");

}


   // LOGOUT CONFIRMATION

function logoutDoctor() {

   let confirmLogout = confirm("Are you sure you want to logout?");

   if (confirmLogout) {

      window.location.href = "login.html";

   }

}


   // SEARCH PATIENT

function searchPatient() {

   let input = document.getElementById("searchPatient").value.toLowerCase();

   let rows = document.querySelectorAll(".patient-row");

   rows.forEach(row => {

      let name = row.children[0].innerText.toLowerCase();

      if (name.includes(input)) {
         row.style.display = "";
      }
      else {
         row.style.display = "none";
      }

   });

}


   // BUTTON CLICK ANIMATION

let buttons = document.querySelectorAll("button");

buttons.forEach(btn => {

   btn.addEventListener("click", function () {

      btn.style.transform = "scale(0.95)";

      setTimeout(() => {
         btn.style.transform = "scale(1)";
      }, 200);

   });

});


   // NOTIFICATION POPUP

function showNotification(message) {

   let box = document.getElementById("notification");

   if (!box) return;

   box.innerText = message;

   box.style.display = "block";

   setTimeout(() => {
      box.style.display = "none";
   }, 3000);

}


   // SCROLL TO TOP

function scrollToTop() {

   window.scrollTo({
      top: 0,
      behavior: "smooth"
   });

}