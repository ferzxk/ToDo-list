// Selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Functions

const add = (e) => {
    e.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerText = todoInput.value;
    if (todoInput.value === '' ) return;
    todoDiv.append(newTodo);

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-button');
    todoDiv.append(completedButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-button');
    todoDiv.append(trashButton);

    todoList.append(todoDiv);

    //Clear Todo input value
    todoInput.value = '';
}

const deleteCheck = (e) => {
    const item = e.target ;

    // Delete TODO
    if (item.classList[0] === 'trash-button') {
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', () => {
            todo.remove();
        })
    }

    // Check Mark
    if (item.classList[0] === 'complete-button') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

// Event Listeners

todoButton.addEventListener('click', add);
todoList.addEventListener('click', deleteCheck);

