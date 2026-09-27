const form = document.querySelector("#task-form");
const taskTitle = document.querySelector("#task-title");
const taskList = document.querySelector("#task-list");

const savedDataElement = document.querySelector("#saved-data");
const clearButton = document.querySelector("#clear-button");
const message = document.querySelector("#message");


// =========================
// Recuperar tarefas
// =========================

let tasks = [];

const savedTasks = localStorage.getItem("tasks");

if (savedTasks) {
    tasks = JSON.parse(savedTasks);
}


// =========================
// Mostrar tarefas
// =========================

function renderTasks() {

    taskList.innerHTML = "";

    tasks.forEach(function (task) {

        const li = document.createElement("li");

        li.classList.add("task");

        if (task.completed) {
            li.classList.add("completed");
        }

        li.textContent = task.title;

        taskList.appendChild(li);
    });

    savedDataElement.textContent =
        tasks.length > 0
            ? JSON.stringify(tasks, null, 2)
            : "Nenhum dado guardado.";
}


// =========================
// Adicionar tarefa
// =========================

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const newTask = {
        id: Date.now(),
        title: taskTitle.value,
        completed: false
    };

    tasks.push(newTask);

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

    taskTitle.value = "";

    renderTasks();

    message.textContent =
        "Tarefa adicionada!";
});


// =========================
// Limpar tarefas
// =========================

clearButton.addEventListener("click", function () {

    localStorage.removeItem("tasks");

    tasks = [];

    renderTasks();

    message.textContent =
        "Todas as tarefas foram removidas.";
});


// =========================
// Inicializar
// =========================

renderTasks();