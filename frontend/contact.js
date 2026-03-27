   // FORM VALIDATION

function validateContactForm() {

   let name = document.getElementById("name").value.trim();
   let email = document.getElementById("email").value.trim();
   let message = document.getElementById("message").value.trim();

   let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

   if (name === "") {
      alert("Please enter your name");
      return false;
   }

   if (!email.match(emailPattern)) {
      alert("Enter a valid email address");
      return false;
   }

   if (message.length < 10) {
      alert("Message must be at least 10 characters");
      return false;
   }

   showSuccessPopup();

   return false;

}


   // SUCCESS POPUP

function showSuccessPopup() {

   let popup = document.getElementById("contactPopup");

   if (popup) {
      popup.style.display = "flex";
   }

}


   // CLOSE POPUP

function closePopup() {

   document.getElementById("contactPopup").style.display = "none";

   document.getElementById("contactForm").reset();

}


   // INPUT HIGHLIGHT EFFECT

let inputs = document.querySelectorAll("input, textarea");

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


   // MESSAGE CHARACTER COUNTER

let messageBox = document.getElementById("message");
let counter = document.getElementById("charCount");

if (messageBox) {

   messageBox.addEventListener("keyup", function () {

      let length = messageBox.value.length;

      counter.innerText = length + " characters";

   });

}

document.querySelector('#contactForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;

  fetch('http://localhost:3000/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message })
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
  });
});
