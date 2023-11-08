const todoList = document.querySelector('.todo-list');

export function DisplayTodoItems(todoItems) {
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
    for(let i = 0; i < todoItems.length; i++) {
        const item = document.createElement('p');
        item.textContent = todoItems[i];
        todoList.appendChild(item);
    }
}