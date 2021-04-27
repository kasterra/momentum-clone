const todoForm = document.querySelector('.todo-getter');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('.todo--list');
let liNum = 0;
const TODO_LS = 'todo';
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const target = event.target.parentNode;
    const targetID = target.id;
    todoList.removeChild(target);
    const filtered = toDos.filter(function(todo) {
        return todo.id+'' !== targetID;
    });
    toDos = filtered;
    saveToDos();
}

function paintTodo(text, isFinished = false) {
    let li = document.createElement('li');
    let span = document.createElement('span');
    span.innerText = text;
    let icon = document.createElement('i');
    icon.classList.add('fas', 'fa-minus-circle');
    icon.addEventListener('click', deleteTodo);
    li.append(icon);
    li.append(span);
    li.id = liNum++;
    todoList.append(li);
    const todoObj = {
        text: span.innerText,
        id: li.id,
        isFinished: isFinished,
    };
    toDos.push(todoObj);
    saveToDos();
}

function submitHandler(event) {
    event.preventDefault();
    const toDo = todoInput.value;
    paintTodo(toDo);
    todoInput.value = '';
}

function loadTodo() {
    const loadedtoDos = localStorage.getItem(TODO_LS);
    if (loadedtoDos !== null) {
        const parsedtoDos = JSON.parse(loadedtoDos);
        parsedtoDos.forEach(function (toDo) {
            paintTodo(toDo.text, toDo.isFinished);
        });
    }
}

function init() {
    loadTodo();
    todoForm.addEventListener('submit', submitHandler);
}

init();