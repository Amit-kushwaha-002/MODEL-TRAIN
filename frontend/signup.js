/* =========================
   SIGNUP FORM VALIDATION
========================= */

function registerUser() {

   let name = document.getElementById("name").value.trim();
   let email = document.getElementById("email").value.trim();
   let password = document.getElementById("password").value.trim();
   let confirm = document.getElementById("confirmPassword").value.trim();

   let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

   if (name === "") {
      showMessage("Please enter your name");
      return false;
   }

   if (!email.match(emailPattern)) {
      showMessage("Enter a valid email address");
      return false;
   }

   if (password.length < 6) {
      showMessage("Password must be at least 6 characters");
      return false;
   }

   if (password !== confirm) {
      showMessage("Passwords do not match");
      return false;
   }

   showMessage("Account Created Successfully", "success");

   setTimeout(function () {

      window.location.href = "login.html";

   }, 1500);

   return false;

}


/* =========================
   SHOW / HIDE PASSWORD
========================= */

function togglePassword(id) {

   let field = document.getElementById(id);

   if (field.type === "password") {
      field.type = "text";
   }
   else {
      field.type = "password";
   }

}


/* =========================
   PASSWORD STRENGTH CHECK
========================= */

function checkStrength() {

   let password = document.getElementById("password").value;

   let strengthText = document.getElementById("strength");

   if (password.length < 6) {

      strengthText.innerText = "Weak Password";
      strengthText.style.color = "red";

   }
   else if (password.match(/[A-Z]/) && password.match(/[0-9]/)) {

      strengthText.innerText = "Strong Password";
      strengthText.style.color = "green";

   }
   else {

      strengthText.innerText = "Medium Password";
      strengthText.style.color = "orange";

   }

}


/* =========================
   MESSAGE BOX
========================= */

function showMessage(message, type = "error") {

   let box = document.getElementById("signupMessage");

   box.innerText = message;

   box.style.display = "block";

   if (type === "success") {
      box.style.color = "green";
   }
   else {
      box.style.color = "red";
   }

   setTimeout(() => {

      box.style.display = "none";

   }, 3000);

}


/* =========================
   INPUT FOCUS EFFECT
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