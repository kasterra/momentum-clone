const clock = document.querySelector('.clock-box--clock');

function getTime() {
    const date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let second = date.getSeconds();
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    second = second < 10 ? '0' + second : second;
    clock.innerText = `${hour}:${minutes}:${second}`;
}
function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();