   // PAGE FADE IN ANIMATION

document.addEventListener("DOMContentLoaded", function () {

   document.body.style.opacity = "0";

   setTimeout(function () {

      document.body.style.transition = "opacity 1s";
      document.body.style.opacity = "1";

   }, 100);

});


   // EDIT PATIENT DETAILS

function enableEdit() {

   let fields = document.querySelectorAll(".editable");

   fields.forEach(field => {

      field.removeAttribute("readonly");
      field.style.border = "1px solid #1f6d95";

   });

   message("You can now edit patient details");

}


   // SAVE PATIENT DETAILS

function saveDetails() {

   let fields = document.querySelectorAll(".editable");

   fields.forEach(field => {

      field.setAttribute("readonly", true);
      field.style.border = "none";

   });

   showNotification("Patient details updated successfully");

}


   // DELETE PATIENT

function deletePatient() {

   let confirmDelete = confirm("Are you sure you want to delete this patient?");

   if (confirmDelete) {

      message("Patient record deleted");

      window.location.href = "patientlist.html";

   }

}


   // REPORT STATUS DISPLAY

function checkReport() {

   let statusBox = document.getElementById("reportStatus");

   let result = Math.random();

   if (result > 0.5) {

      statusBox.innerText = "No Lung Disease Detected";
      statusBox.style.color = "green";

   }
   else {

      statusBox.innerText = "Possible Lung Disease Detected";
      statusBox.style.color = "red";

   }

}


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


   // DOWNLOAD REPORT

function downloadReport() {

   alert("Patient report downloaded");

}


   // SCROLL TO TOP

function scrollTopPage() {

   window.scrollTo({

      top: 0,
      behavior: "smooth"

   });

}