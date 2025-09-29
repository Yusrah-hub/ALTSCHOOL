let startTime = null, elapsedTime = 0, timerInterval = null;
const display = document.getElementById("display");
const laps = document.getElementById("laps");
// Format time as HH:mm:ss
function formatTime(ms) {
   const date = new Date(ms);
   return date.toISOString().substr(11, 8);
}
// Update the display
function updateDisplay() {
   display.textContent = formatTime(elapsedTime);
}
// Start the stopwatch
document.getElementById("start").addEventListener("click", () => {
   if (!timerInterval) {
       startTime = Date.now() - elapsedTime;
       timerInterval = setInterval(() => {
           elapsedTime = Date.now() - startTime;
           updateDisplay();
       }, 1000);
   }
});
// Pause the stopwatch
document.getElementById("pause").addEventListener("click", () => {
   clearInterval(timerInterval);
   timerInterval = null;
});
// Reset the stopwatch
document.getElementById("reset").addEventListener("click", () => {
   clearInterval(timerInterval);
   timerInterval = null;
   elapsedTime = 0;
   updateDisplay();
   laps.innerHTML = "";
});
// Record a lap
document.getElementById("lap").addEventListener("click", () => {
   if (timerInterval) {
       const lapItem = document.createElement("li");
       lapItem.textContent = `Lap ${laps.children.length + 1}: ${formatTime(elapsedTime)}`;
       laps.appendChild(lapItem);
   }
});