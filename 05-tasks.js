export function createTask(title) {

    return {
        id: Date.now(),
        title: title,
        completed: false
    };
}

export function countTasks(tasks) {

    return tasks.length;
}