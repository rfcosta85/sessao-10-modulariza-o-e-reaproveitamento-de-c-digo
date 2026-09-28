import { createTask } from "./05-tasks.js";
import contadorDeTarefas from "./05-tasks.js";

const tasks = [];

const task = createTask("Estudar ES6 Modules");
const task2 = createTask("Estudar Node.js");

tasks.push(task);
tasks.push(task2);

console.log(tasks);

console.log(
    `Total de tarefas: ${contadorDeTarefas(tasks)}`
);

const displayTask = (task) => {
    task.forEach((task) => {
        document.querySelector("#result").innerHTML += `
            <p>ID: ${task.id}</p>
            <p>Título: ${task.title}</p>
            <p>Concluída: ${task.completed}</p>
        `;
    });
    
}

displayTask(tasks);