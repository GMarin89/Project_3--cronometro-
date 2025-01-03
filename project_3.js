let startTime;
let updatedTime;
let difference;
let tInterval;
let savedTime = 0;
let paused = 0;
let running = 0;

function startCronometro() {
    if (!running) {
        startTime = new Date().getTime() - savedTime;
        tInterval = setInterval(getShowTime, 1000); // Chama a função getShowTime a cada 1000ms (1 segundo)
        paused = 0;
        running = 1;
    }
}

function stopCronometro() {
    if (running) {
        clearInterval(tInterval);
        savedTime = difference;
        paused = 1;
        running = 0;
    }
}

function resetCronometro() {
    clearInterval(tInterval);
    savedTime = 0;
    difference = 0;
    paused = 0;
    running = 0;
    document.getElementById("cronometro").innerHTML = "00:00:00";
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    document.getElementById("cronometro").innerHTML = hours + ":" + minutes + ":" + seconds;
}
