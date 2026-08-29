// CCCCGBCC.com's Main JavaScript file, none of the code is mine, I do not know JavaScript

// To load navbar and modal, written by Proton Lumo
async function loadPartial(url, targetId) {
    const resp = await fetch(url);
    const html = await resp.text();
    document.getElementById(targetId).innerHTML = html;
}
document.addEventListener("DOMContentLoaded", async () => {
    await Promise.all([
        loadPartial("/assets/parts/nav.html", "navExt"),
        loadPartial("/assets/parts/dateModal.html", "dateModalExt"),
    ]);
});
// EOF

// To load the timer, written by Google Gemini but rewritten using Bootstrap 5 docs
// Set the target date and time
const targetDate = new Date("July 26, 2027 15:00:00").getTime();
// Update the countdown every 1 second (1000 milliseconds)
const countdownInterval = setInterval(function() {
  // Get current date and time
  const now = new Date().getTime();
  // Find the distance between now and the target date
  const distance = targetDate - now;
  // Time calculations for days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Find the HTML element with ID "time"
  const timeElement = document.getElementById("clock");
  if (timeElement) {
    // Display the result inside the element (Button from Bootstrap Documentation)
    timeElement.innerHTML = `<b>${days} days,<br>${hours} hours,<br>${minutes} minutes,<br>and ${seconds} seconds</b><br><button type="button" class="btn btn-light mybtn margin" data-bs-toggle="modal" data-bs-target="#notVerified">NOT VERIFIED DATE</button>`;
    // If the countdown is finished, write some text
    if (distance < 0) {
      clearInterval(countdownInterval);
      timeElement.innerHTML = "Registration Started for Camp (or camp started!)";
    }
  }
}, 1000);
// EOF

// To setup modal, from Bootstrap 5 docs
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')
myModal.addEventListener('shown.bs.modal', () => {myInput.focus()})
// EOF