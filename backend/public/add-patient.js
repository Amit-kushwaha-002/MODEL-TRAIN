   // AUTO GENERATE PATIENT ID

window.addEventListener("load", function () {

   let patientID = "P" + Math.floor(1000 + Math.random() * 9000);

   let idField = document.getElementById("patientID");

   if (idField) {
      idField.value = patientID;
   }

});


   // CALCULATE AGE FROM DOB

function calculateAge() {

   let dob = document.getElementById("dob").value;

   if (dob) {

      let birthDate = new Date(dob);

      let today = new Date();

      let age = today.getFullYear() - birthDate.getFullYear();

      let m = today.getMonth() - birthDate.getMonth();

      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
         age--;
      }

      document.getElementById("age").value = age;

   }

}


   // FORM VALIDATION

function validatePatientForm() {

   let name = document.getElementById("name").value.trim();
   let phone = document.getElementById("phone").value.trim();
   let gender = document.getElementById("gender").value;

   if (name === "") {
      alert("Please enter patient name");
      return false;
   }

   if (phone.length < 10) {
      alert("Enter valid phone number");
      return false;
   }

   if (gender === "") {
      alert("Select gender");
      return false;
   }

   showSuccessPopup();

   return false;

}


   // SUCCESS POPUP

function showSuccessPopup() {

   let popup = document.getElementById("successPopup");

   popup.style.display = "flex";

}


   // CLOSE POPUP

function closePopup() {

   document.getElementById("successPopup").style.display = "none";

   document.getElementById("patientForm").reset();

}


   // INPUT HIGHLIGHT EFFECT

let inputs = document.querySelectorAll("input,select");

inputs.forEach(input => {

   input.addEventListener("focus", function () {

      input.style.borderColor = "#1f6d95";
      input.style.boxShadow = "0 0 5px rgba(31,109,149,0.4)";

   });

   input.addEventListener("blur", function () {

      input.style.borderColor = "#ccc";
      input.style.boxShadow = "none";

   });

});

let addbtn=document.querySelector("save-btn");


