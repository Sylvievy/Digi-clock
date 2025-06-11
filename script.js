let clock=document.querySelector(".clock");

function updatetime() {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}
setInterval(updatetime, 1000); // Update every second
updatetime(); // Initial call to set the time immediately