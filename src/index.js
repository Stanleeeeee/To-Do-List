/* eslint-disable */
import _ from 'lodash';

import './style.css';

const inputText = document.getElementById('add-list');
const regex = /^\s+$/;
const listContainer = document.querySelector('#list');
const addBtn = document.querySelector('#add');
const clearAllCompleted = document.getElementById('clear-all');

window.addEventListener('DOMContentLoaded', getListItems);
addBtn.addEventListener('click', addList);
clearAllCompleted.addEventListener('click', deleteCompleted);
listContainer.addEventListener('click', deleteItem);
listContainer.addEventListener('click', editItem);
listContainer.addEventListener('change', checkItem);

const addList = (event) => {
  event.preventDefault();
  if (inputText.value.length === 0 || inputText.value.match(regex)) {
    return;
  }

  const storage = JSON.parse(localStorage.getItem('list')) || [];

  const object = {
    description: inputText.value,
    completed: false,
    index: storage.length + 1,
  };

  storage.push(object);

  const div = document.createElement('div');
  div.classList.add('todo');

  const listItem = document.createElement('input');
  listItem.type = 'text';
  listItem.setAttribute('readonly', 'readonly');
  listItem.value = inputText.value;

  listItem.classList.add('item');

  saveToLocalStorage(inputText.value);

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('complete');

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('type', 'button');
  deleteBtn.classList.add('delete-button');

  const editBtn = document.createElement('button');
  editBtn.setAttribute('type', 'button');
  editBtn.textContent = 'Edit';
  editBtn.classList.add('edit-button');

  div.appendChild(checkbox);
  div.appendChild(listItem);
  div.appendChild(deleteBtn);
  div.appendChild(editBtn);

  listContainer.appendChild(div);

  localStorage.setItem('list', JSON.stringify(storage));

  inputText.value = '';
};