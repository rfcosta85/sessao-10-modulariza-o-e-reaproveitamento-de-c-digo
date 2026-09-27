import {
    createTask,
    countTasks
} from "./05-tasks.js";

const tasks = [];

const task = createTask("Estudar ES6 Modules");

tasks.push(task);

console.log(tasks);

console.log(
    `Total de tarefas: ${countTasks(tasks)}`
);