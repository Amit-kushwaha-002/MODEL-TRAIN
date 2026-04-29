/* =========================
   CHANGE PASSWORD
========================= */

function changePassword() {

   let current = document.getElementById("currentPassword").value;
   let newPass = document.getElementById("newPassword").value;
   let confirmPass = document.getElementById("confirmPassword").value;

   if (current === "") {
      alert("Enter current password");
      return;
   }

   if (newPass.length < 6) {
      alert("New password must be at least 6 characters");
      return;
   }

   if (newPass !== confirmPass) {
      alert("Passwords do not match");
      return;
   }

   showNotification("Password updated successfully");

   document.getElementById("passwordForm").reset();

}


/* =========================
   DARK MODE TOGGLE
========================= */

function toggleDarkMode() {

   let body = document.body;

   body.classList.toggle("dark-mode");

   if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
   }
   else {
      localStorage.setItem("theme", "light");
   }

}


/* LOAD SAVED THEME */

window.addEventListener("load", function () {

   let theme = localStorage.getItem("theme");

   if (theme === "dark") {
      document.body.classList.add("dark-mode");
   }

});


/* =========================
   NOTIFICATION SWITCH
========================= */

function toggleNotifications() {

   let check = document.getElementById("notificationToggle");

   if (check.checked) {
      showNotification("Notifications Enabled");
   }
   else {
      showNotification("Notifications Disabled");
   }

}


/* =========================
   SAVE SETTINGS
========================= */

function saveSettings() {

   showNotification("Settings saved successfully");

}


/* =========================
   LOGOUT
========================= */

function logout() {

   let confirmLogout = confirm("Are you sure you want to logout?");

   if (confirmLogout) {
      window.location.href = "login.html";
   }

}


/* =========================
   INPUT HIGHLIGHT EFFECT
========================= */

let inputs = document.querySelectorAll("input");

inputs.forEach(input => {

   input.addEventListener("focus", function () {

      input.style.borderColor = "#1f6d95";
      input.style.boxShadow = "0 0 5px rgba(31,109,149,0.3)";

   });

   input.addEventListener("blur", function () {

      input.style.borderColor = "#ccc";
      input.style.boxShadow = "none";

   });

});


/* =========================
   NOTIFICATION POPUP
========================= */

function showNotification(message) {

   let box = document.getElementById("notification");

   if (!box) return;

   box.innerText = message;

   box.style.display = "block";

   setTimeout(() => {
      box.style.display = "none";
   }, 3000);

}