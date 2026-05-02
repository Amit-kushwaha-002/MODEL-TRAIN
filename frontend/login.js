   // LOGIN VALIDATION

function loginUser() {

   let email = document.getElementById("email").value.trim();
   let password = document.getElementById("password").value.trim();

   let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

   if (email === "") {
      showMessage("Please enter your email");
      return false;
   }

   if (!email.match(emailPattern)) {
      showMessage("Enter a valid email");
      return false;
   }

   if (password.length < 6) {
      showMessage("Password must be at least 6 characters");
      return false;
   }

   /* LOGIN SUCCESS SIMULATION */

   showMessage("Login Successful", "success");

   setTimeout(function () {

      window.location.href = "doctor-profile.html";

   }, 1500);

   return false;

}


   // SHOW / HIDE PASSWORD

function togglePassword() {

   let pass = document.getElementById("password");

   if (pass.type === "password") {
      pass.type = "text";
   }
   else {
      pass.type = "password";
   }

}


   // SHOW MESSAGE

function showMessage(message, type = "error") {

   let box = document.getElementById("loginMessage");

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


   // INPUT HIGHLIGHT EFFECT

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


   // LOGIN BUTTON ANIMATION

let loginBtn = document.getElementById("loginBtn");

if (loginBtn) {

   loginBtn.addEventListener("click", function () {

      loginBtn.style.transform = "scale(0.95)";

      setTimeout(() => {
         loginBtn.style.transform = "scale(1)";
      }, 200);

   });

}