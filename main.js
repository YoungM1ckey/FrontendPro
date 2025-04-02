'use strict';

const form = document.querySelector('.js--form');
const input = document.querySelector('.js--form__input');
const todoList = document.querySelector('.js--todos-wrapper');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        if (todo.completed) {
            li.classList.add('todo-item--checked');
        }

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', () => toggleComplete(index));

        const span = document.createElement('span');
        span.classList.add('todo-item__description');
        span.textContent = todo.text;

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('todo-item__delete');
        deleteBtn.textContent = 'Видалити';
        deleteBtn.addEventListener('click', () => deleteTodo(index));

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}

function addTodo(e) {
    e.preventDefault();
    const text = input.value.trim();
    if (text) {
        const newTodo = {
            text,
            completed: false
        };
        todos.push(newTodo);
        input.value = '';
        saveTodos();
        renderTodos();
    }
}

function deleteTodo(index) {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
}

function toggleComplete(index) {
    todos[index].completed = !todos[index].completed;
    saveTodos();
    renderTodos();
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

form.addEventListener('submit', addTodo);

renderTodos();
