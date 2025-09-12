'use strict';
// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const ul = document.getElementById('todoUI'); // ul target elementti
const addButton = document.getElementById('addButton');
const form = document.getElementById('todoForm');
const dialog = document.getElementById('todoDialog');
const input = document.getElementById('taskInput');

function todoModal() {
  ul.innerHTML = '';
  todoList.forEach(item => {
    const li = document.createElement('li');

    checkbox.addEventListener('change', () => {
      item.completed = checkbox.checked; // true false
      console.log(`${item.task} -> ${item.comp}`);
    });

    const label = document.createElement('label');
    label.setAttribute('for', `todo-${item.id}`);
    label.textContent = item.task;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `todo-${item.id}`;
    checkbox.checked = item.completed;

    label.prepend(checkbox);
    li.appendChild(label);
  });
}
todoModal();

//Modal not working
