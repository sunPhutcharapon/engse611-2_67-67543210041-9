const form = document.querySelector('form');
const todoInput = document.querySelector('#todo-input');
const addButton = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");

let todos = [];

function addTodo(){
    const todoText = todoInput.value.trim();

    if (todoText.length > 0){
        const todo = {
            id: Date.now(),
            text: todoText,
            completed: false
        };
        todos.push(todo);
        todoInput.value = "";
        
        renderTodo();

        console.log(todo.id);
        console.log(todo.text);
        console.log(todo.completed);

    }
    //console.log(todoText);
}
function deleteTodo(id){
todos = todos.filter((todo) => todo.id !== id)
renderTodo();
}

function toggleCompleted(id){
    console.log("toggle: "+id)
    todos = todos.map((todo) => {
        if (todo.id ===id){
            todo.completed = !todo.completed
        };
        return todo;
    });
    renderTodo();
}
function renderTodo() {
    //console.log("renderTodo");
    todoList.innerHTML = "";

    todos.forEach((todo)=>{
        const todoItem = document.createElement("li");
        const todoText = document.createElement("span");
        const deleteButton = document.createElement("button");
        
        todoText.textContent = todo.text;
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", () => deleteTodo(todo.id));

        todoItem.addEventListener("click", () => toggleCompleted(todo.id));

        todoItem.appendChild(todoText);//appendChaild li <- span
        todoItem.appendChild(deleteButton);//appendChaild li <- button
        todoList.appendChild(todoItem);//appendChaild ul <- li

    });
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    addTodo();

});
renderTodo();