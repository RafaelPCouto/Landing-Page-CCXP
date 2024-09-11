const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const date = '01 aug 2024'

const classTime = document.getElementsByClassName("timeValues")

function timeAdjust(time) {
    if (time < 10) {
        return `0${time}`;
    } else {
        return time;
    }
}

function countDown() {
    const finalDate = new Date(date);
    const today = new Date();

    const secTotal = (finalDate - today)/1000;

    const finalDays = Math.floor(secTotal / 60 / 60 / 24);
    const finalHours = Math.floor(secTotal / 60 / 60) % 24;
    const finalMinutes = Math.floor(secTotal / 60) % 60;
    const finalSeconds = Math.floor(secTotal) % 60;

    day.innerHTML = finalDays + 'D';
    hour.innerHTML = timeAdjust(finalHours + 'H');
    minute.innerHTML = timeAdjust(finalMinutes + 'M');
    second.innerHTML = timeAdjust(finalSeconds + 'S');
}

countDown()
setInterval(countDown, 1000)
