const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const contagemregressiva = "22 March 2025"

function countdown(){
    const contagemregressivaDate = new Date(contagemregressiva);
    const currentDate = new Date();

    const totalSeconds = (contagemregressivaDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);



const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('#menu ul');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

