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
// HTML elements
const ul = document.getElementById('todoUI');
const addButton = document.getElementById('addButton');
const dialog = document.getElementById('todoDialog');
const form = document.getElementById('todoForm');
const input = document.getElementById('taskInput');
const globaldeleteButton = document.getElementById('deleteButton');

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
      listUI();
      console.log(todoList);
    });

    const label = document.createElement('label');
    label.setAttribute('for', `todo-${item.id}`);
    label.textContent = item.task;

    if (item.completed) {
      label.style.color = 'gray';
    }

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', () => {
      const index = todoList.findIndex(todo => todo.id === item.id);
      if (index !== -1) {
        todoList.splice(index, 1);

        ul.removeChild(li);
        console.log(todoList);
      }
    });

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteButton);

    ul.appendChild(li);
  });
}

addButton.addEventListener('click', () => {
  dialog.showModal();
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  const taskText = input.value.trim();
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

globaldeleteButton.addEventListener('click', () => {
  for (let i = todoList.length - 1; i >= 0; i--) {
    const checkbox = document.getElementById(`todo-${todoList[i].id}`);
    if (checkbox && checkbox.checked) {
      todoList.splice(i, 1);
    }
  }
  listUI();
  console.log(todoList);
});

listUI();
