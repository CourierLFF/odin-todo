import './styles/style.css'
import './assets/imgs/odin.png'
import { DisplayTodoItems } from './todoList'

export let todoItems = [];

const todoInputBox = document.querySelector("#todo-input");
const todoAddButton = document.querySelector("#todo-input-button");

todoAddButton.addEventListener('click', () => {
    if(todoItems.includes(todoInputBox.value) == false) {
        todoItems.push(todoInputBox.value);
        DisplayTodoItems(todoItems);
    }
});
