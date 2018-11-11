const clockDiv = document.querySelector('.clock');

function getTime() {
    const date = new Date();
        hours = date.getHours();
        minutes = date.getMinutes();
        seconds = date.getSeconds();
    clockDiv.innerText = `${(hours < 10) ? `0${hours}` : hours}:${(minutes < 10) ? `0${minutes}` : minutes}:${(seconds < 10) ? `0${seconds}` : seconds}`;
}

function getTimeInFancyWay() {
    const date = new Date();
        t = date.toLocaleTimeString();
    clockDiv.innerHTML = t;
}

function sayHi() {
    console.log('Hi!')
}

function init() {
    getTime();
    setInterval(getTime, 1000);
    // setInterval(getTimeInFancyWay, 1000);
}
init();