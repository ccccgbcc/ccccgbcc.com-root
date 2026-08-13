// Created with Google Gemini because I don't know JavaScript

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
    // Display the result inside the element
    timeElement.innerHTML = `<b>${days} days,<br>${hours} hours,<br>${minutes} minutes,<br>and ${seconds} seconds</b>`;
      
    // If the countdown is finished, write some text
    if (distance < 0) {
      clearInterval(countdownInterval);
      timeElement.innerHTML = "Registration Started for Camp (or camp started!)";
    }
  }
}, 1000);
