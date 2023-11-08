import './styles/style.css'
import './assets/imgs/odin.png'
import { DisplayTodoItems } from './todoList'

const todoItems = [];

const todoInputBox = document.querySelector("#todo-input");
const todoAddButton = document.querySelector("#todo-input-button");

todoAddButton.addEventListener('click', () => {
    todoItems.push(todoInputBox.value);
    DisplayTodoItems(todoItems);
});
