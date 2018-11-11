const todoUl = document.querySelector('.todo-ul');
const todoInput = document.querySelector('.todo-input');

function loadTodos() {
    const todos = localStorage.getItem('todos');
    return JSON.parse(todos)
}

function addTodo(todos) {
    if(todoInput.value === null) {
        alert('값이 입력되지 않았습니다.')
    } else {
        const newTodo = {
            'id': todos.length + 1,
            'text': todoInput.value
        }
        todos.push(newTodo);
        drawTodo(newTodo);
        saveTodos(todos)
    }
}

function filterTodoList(element) {
    return element.id !== selectedLiNode.id
}

function deleteTodo(event) {
    const deleteButton = event.target;
    const selectedLiNode = deleteButton.parentNode;
    selectedLiNode.remove();
    let todos = loadTodos();
    todos = todos.filter(function(todo, selectedLiNode){
        return todo.id !== selectedLiNode.id
    })
    localStorage.setItem('todos', JSON.stringify(todos))
}

function drawTodo(todoObj) {
    const liNode = document.createElement('li')
    liNode.innerText = todoObj.text;
    liNode.setAttribute('id', todoObj.id)
    const deleteButtonNode = document.createElement('button')
    deleteButtonNode.innerText = 'X';
    deleteButtonNode.addEventListener('click', function(event){deleteTodo(event)});
    liNode.appendChild(deleteButtonNode);
    todoUl.appendChild(liNode);
}

function saveTodos(todosArray) {
    const todos = JSON.stringify(todosArray);
    if(todos !== null) {
        localStorage.setItem('todos', todos)
    }
}

function init() {
    const todos = loadTodos();
    if(todos !== null) {
        todos.forEach(function(todo){drawTodo(todo)});
    }
    todoInput.addEventListener('keypress', function(event) {
        if(event.keyCode === 13) {
            addTodo(todos)
        }
    })
}
init();