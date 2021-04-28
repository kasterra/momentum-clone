const todoForm = document.querySelector('.todo-getter');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('.todo--list');
let liNum = 0;
const TODO_LS = 'todo';
let toDos = [];

function saveToDos() {
	for(liNum = 0; liNum < toDos.length; liNum++){
		toDos[liNum].id = liNum;
	}
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const target = event.target.parentNode;
    const targetID = target.id;
	target.style.opacity = '0';
	setTimeout(function(){todoList.removeChild(target);},100);
    const filtered = toDos.filter(function(todo) {
        return todo.id+'' !== targetID;
    });
    toDos = filtered;
    saveToDos();
}

function editTodo(event){
	event.preventDefault();
	const target = event.target.parentNode;
	const isEdit = target.classList.contains("editMode");
	const text = isEdit ?target.querySelector('form').querySelector('input').value:target.querySelector('span').innerText;
	if(isEdit){
		toDos[target.id].text = text;
		target.querySelector('span').innerText = text;
		saveToDos();
	}
	else{
		console.log(target);
		target.querySelector('form').querySelector('input').value = text;
	}
	
	target.classList.toggle("editMode");
}

function paintTodo(text, isFinished = false) {
    let li = document.createElement('li');
    let span = document.createElement('span');
    let deleteIcon = document.createElement('i');
	let editIcon = document.createElement('i');
	let form = document.createElement('form');
	let input = document.createElement('input');
	
	span.innerText = text;
    deleteIcon.classList.add('fas', 'fa-minus-circle');
    deleteIcon.addEventListener('click', deleteTodo);
	editIcon.classList.add('fas','fa-edit');
	editIcon.addEventListener('click',editTodo);
	form.addEventListener('submit',editTodo);
    form.append(input);
	li.append(deleteIcon);
	li.append(editIcon);
    li.append(span);
	li.append(form);
	li.id = liNum++;
    
	setTimeout(function(){todoList.append(li);},100);
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