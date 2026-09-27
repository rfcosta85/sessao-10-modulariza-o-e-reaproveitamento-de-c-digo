const memoryForm = document.querySelector("#memory-form");
const memoryInput = document.querySelector("#memory-task");
const memoryList = document.querySelector("#memory-list");


let memoryTasks = [];


memoryForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const task = memoryInput.value.trim();

    if (!task) {
        return;
    }

    memoryTasks.push(task);

    memoryInput.value = "";

    renderMemoryTasks();

});


function renderMemoryTasks() {

    memoryList.innerHTML = "";

    memoryTasks.forEach(function (task, index) {

        const li = document.createElement("li");

        li.classList.add("task-item");

        li.innerHTML = `
            <span>${task}</span>

            <button
                type="button"
                data-index="${index}"
            >
                Remover
            </button>
        `;

        memoryList.appendChild(li);

    });

}


const storageForm = document.querySelector("#storage-form");
const storageInput = document.querySelector("#storage-task");
const storageList = document.querySelector("#storage-list");
const clearStorageButton =
    document.querySelector("#clear-storage");


const storedTasks = localStorage.getItem("tasks");

let storageTasks = storedTasks
    ? JSON.parse(storedTasks)
    : [];


storageForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const task = storageInput.value.trim();

    if (!task) {
        return;
    }

    storageTasks.push(task);


    localStorage.setItem(
        "tasks",
        JSON.stringify(storageTasks)
    );


    storageInput.value = "";

    renderStorageTasks();

});


function renderStorageTasks() {

    storageList.innerHTML = "";

    storageTasks.forEach(function (task, index) {

        const li = document.createElement("li");

        li.classList.add("task-item");

        li.innerHTML = `
            <span>${task}</span>

            <button
                type="button"
                data-index="${index}"
            >
                Remover
            </button>
        `;

        storageList.appendChild(li);

    });


    const removeButtons =
        storageList.querySelectorAll("button");


    removeButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const index = Number(
                button.dataset.index
            );

            storageTasks.splice(index, 1);

            localStorage.setItem(
                "tasks",
                JSON.stringify(storageTasks)
            );

            renderStorageTasks();

        });

    });

}
    

clearStorageButton.addEventListener(
    "click",
    function () {

        localStorage.removeItem("tasks");

        storageTasks = [];

        renderStorageTasks();

    }
);

renderMemoryTasks();

renderStorageTasks();