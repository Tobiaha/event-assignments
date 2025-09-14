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
const ul = document.getElementById('todoUI');
const deleteButton = document.getElementById('deleteButton');
const addButton = document.getElementById('addButton');
const dialog = document.getElementById('todoDialog');
const form = document.getElementById('todoForm');
const input = document.getElementById('taskInput');

function listUI() {
  ul.innerHTML = '';

  todoList.forEach(item => {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `todo-${item.id}`;
    checkbox.checked = item.completed;

    checkbox.addEventListener('change', () => {
      item.completed = checkbox.checked; // true or false
      console.log(todoList);
    });

    const label = document.createElement('label');
    label.setAttribute('for', `todo-${item.id}`);
    label.textContent = item.task;

    deleteButton.addEventListener('click'), ( => {
      const index = todoList.findIndex(todo => todo.id === todo.id);)
    })

    li.appendChild(checkbox);
    li.appendChild(label);

    ul.appendChild(li);
  });
}
deleteButton.addEventListener('click', () => {
  dialog.showModal();

  form.addEventListener('submit', evt => {
    evt.preventDefault();
    let taskText = input.value.trim();
    if (taskText) {
      todoList()
    }

  }


});

addButton.addEventListener('click', () => {
  dialog.showModal();
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  let taskText = input.value.trim();
  if (taskText) {
    todoList.push({
      id: todoList.length + 1,
      task: taskText,
      completed: false,
    });
    input.value = '';
    dialog.close();
    listUI();
    console.log(todoList);
  }
});

listUI();
