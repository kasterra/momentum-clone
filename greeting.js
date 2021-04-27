const nameform = document.querySelector('.name-getter');
const input = nameform.querySelector('input');
const hellos = document.querySelectorAll('.name-hello');
const topBox = document.querySelector('.top-box');
const USER_NAME = 'username';
const todos = document.querySelector('.todos');

function paintNameMessage(name) {
    hellos.forEach(function (obj) {
        obj.classList.remove('hidden');
    });
    hellos[0].innerText = `Hello, ${name}.`;
    todos.classList.remove('hidden');
}

function submitHandler(event) {
    event.preventDefault();
    const name = input.value;
    nameform.classList.add('hidden');
    localStorage.setItem(USER_NAME, name);
    paintNameMessage(name);
}

function init() {
    const name = localStorage.getItem(USER_NAME);
    if (name !== null) {
        nameform.classList.add('hidden');
        paintNameMessage(name);
    } else {
        nameform.addEventListener('submit', submitHandler);
    }
}

init();