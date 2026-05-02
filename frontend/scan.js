/* =========================
   IMAGE PREVIEW AFTER UPLOAD
========================= */

function previewScan(event) {

   let reader = new FileReader();

   reader.onload = function () {

      let preview = document.getElementById("scanPreview");

      preview.src = reader.result;
      preview.style.display = "block";

   }

   reader.readAsDataURL(event.target.files[0]);

}


/* =========================
   SIMULATE FILE UPLOAD
========================= */

function uploadScan() {

   let fileInput = document.getElementById("scanFile");

   if (fileInput.files.length === 0) {

      alert("Please upload a scan image");

      return;

   }

   let progress = document.getElementById("uploadProgress");

   let width = 0;

   let interval = setInterval(function () {

      width += 5;

      progress.style.width = width + "%";

      if (width >= 100) {

         clearInterval(interval);

         showNotification("Scan uploaded successfully");

         startAIScan();

      }

   }, 100);

}


/* =========================
   AI SCAN ANALYSIS
========================= */

function startAIScan() {

   let loader = document.getElementById("aiLoader");

   loader.style.display = "block";

   setTimeout(function () {

      loader.style.display = "none";

      showResult();

   }, 3000);

}


/* =========================
   SCAN RESULT SIMULATION
========================= */

function showResult() {

   let resultBox = document.getElementById("scanResult");

   let probability = Math.random();

   if (probability > 0.6) {

      resultBox.innerText = "Result: No Lung Disease Detected";
      resultBox.style.color = "green";

   }
   else {

      resultBox.innerText = "Result: Possible Lung Disease Detected";
      resultBox.style.color = "red";

   }

   resultBox.style.display = "block";

}


/* =========================
   REMOVE FILE
========================= */

function removeFile() {

   document.getElementById("scanFile").value = "";

   document.getElementById("scanPreview").style.display = "none";

   document.getElementById("scanResult").style.display = "none";

   document.getElementById("uploadProgress").style.width = "0%";

}


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


/* =========================
   BUTTON CLICK ANIMATION
========================= */

let buttons = document.querySelectorAll("button");

buttons.forEach(btn => {

   btn.addEventListener("click", function () {

      btn.style.transform = "scale(0.95)";

      setTimeout(() => {
         btn.style.transform = "scale(1)";
      }, 200);

   });

});