const nameform = document.querySelector('.name-getter');
const input = nameform.querySelector('input');
const hellos = document.querySelectorAll('.name-hello');
const topBox = document.querySelector('.top-box');

function submitHandler(event) {
    event.preventDefault();
    const name = input.value;
    nameform.classList.add('hidden');
    hellos.forEach(function (obj) {
        obj.classList.remove('hidden');
    });
    hellos[0].innerText = `Hello, ${name}.`;
}

function init() {
    nameform.addEventListener('submit', submitHandler);
}

init();