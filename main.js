let time = 66;
const timerElement = document.querySelector('#timer');
function displayTimer(seconds) {
    const minutes = Math.floor(seconds / 60);
    const second = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
}
timerElement.textContent = displayTimer(time);

const timerInterval = setInterval(() => {
    time--;
    timerElement.textContent = displayTimer(time);
    if (time <= 0) {
        clearInterval(timerInterval);
        timerElement.textContent = "00:00";
    }
}, 1000);