// Select clock elements
const hourElement = document.getElementById('hour');
const minuteElement = document.getElementById('minute');
const secondElement = document.getElementById('second');

// Function to update time
function updateClock() {
    const now = new Date();
    hourElement.textContent = String(now.getHours()).padStart(2, '0');
    minuteElement.textContent = String(now.getMinutes()).padStart(2, '0');
    secondElement.textContent = String(now.getSeconds()).padStart(2, '0');
}

// Run clock update every second
setInterval(updateClock, 1000);

// Initialize clock on page load
updateClock();
