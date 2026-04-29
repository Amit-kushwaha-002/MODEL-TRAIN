/* =========================
   SEARCH PATIENT
========================= */

function searchPatient() {

   let input = document.getElementById("searchPatient").value.toLowerCase();

   let rows = document.querySelectorAll("#patientTable tbody tr");

   rows.forEach(row => {

      let name = row.children[1].innerText.toLowerCase();

      if (name.includes(input)) {
         row.style.display = "";
      }
      else {
         row.style.display = "none";
      }

   });

}

//toogle
function toggleMenu() {
  document.querySelector(".side-menu").classList.toggle("active");
}

   // FILTER BY GENDER

function filterGender() {

   let gender = document.getElementById("genderFilter").value;

   let rows = document.querySelectorAll("#patientTable tbody tr");

   rows.forEach(row => {

      let patientGender = row.children[3].innerText;

      if (gender === "All" || patientGender === gender) {
         row.style.display = "";
      }
      else {
         row.style.display = "none";
      }

   });

}



// 
   // VIEW PATIENT DETAILS

function viewPatient() {

   window.location.href = "patient.html";

}


   // SORT PATIENTS BY NAME

function sortPatients() {

   let table = document.getElementById("patientTable");

   let rows = Array.from(table.rows).slice(1);

   rows.sort((a, b) => {

      let nameA = a.cells[1].innerText.toLowerCase();
      let nameB = b.cells[1].innerText.toLowerCase();

      return nameA.localeCompare(nameB);

   });

   rows.forEach(row => table.appendChild(row));

}


   // ROW HOVER ANIMATION

let tableRows = document.querySelectorAll("#patientTable tbody tr");

tableRows.forEach(row => {

   row.addEventListener("mouseover", function () {

      row.style.background = "#f2f8fb";

   });

   row.addEventListener("mouseout", function () {

      row.style.background = "white";

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