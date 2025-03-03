const Start = document.getElementById("Start");
const Pause = document.getElementById("Pause");
const Reset = document.getElementById("Reset");
const Timer = document.getElementById("timer");

let timeleft = 1500;
let interval;
let isRunning = false;

const updateTimer = () => {
    const minutes = Math.floor(timeleft / 60);
    const seconds = timeleft % 60;

    Timer.innerHTML = 
    `${minutes.toString().padStart(2, "0")}
    :
    ${seconds.toString().padStart(2, "0")}`;
};

const startPauseTimer = () => {
    if (isRunning) {
        clearInterval(interval); // Pause the timer
        isRunning = false;
    } else {
        interval = setInterval(() => {
            if (timeleft > 0) {
                timeleft--;
                updateTimer();
            } else {
                clearInterval(interval);
                alert("Time is up!");
                timeleft = 1500;
                updateTimer();
            }
        }, 1000);
        isRunning = true;
    }
};

const resetTimer = () => {
    clearInterval(interval);
    timeleft = 1500;
    updateTimer();
    isRunning = false;
};

Start.addEventListener("click", startPauseTimer);
Pause.addEventListener("click", startPauseTimer);
Reset.addEventListener("click", resetTimer);

updateTimer(); // Initialize display
