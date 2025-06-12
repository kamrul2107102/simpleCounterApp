// Function to display current time
function showTime() {
  const currentTimeEl = document.getElementById("currentTime");
  currentTimeEl.innerHTML = new Date().toLocaleTimeString();
}

// Run initially and then every second
showTime();
setInterval(showTime, 1000);

// Counter functionality
let count = 0;
const countEl = document.getElementById("num");
const incrementBtn = document.getElementById("incrementBtn");

// Event listener instead of inline onclick
incrementBtn.addEventListener("click", function () {
  count++;
  countEl.innerText = count;
});
