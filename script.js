script.js
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Load tasks from localStorage
document.addEventListener('DOMContentLoaded', loadTasks);
addBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return alert("Please enter a task!");

    const li = document.createElement("li");
    li.textContent = taskText;

    const delBtn = document.createElement('button');
    delBtn.textContent = "Delete";
    delBtn.classList.add('delete-btn');
    delBtn.onclick = () => {
        li.remove();
        saveTasks();
    };

    li.onclick = () => {
        li.classList.toggle('completed');
        saveTasks();
    };

    li.appendChild(delBtn);
    taskList.appendChild(li);
    taskInput.value = ""; // Clear input field
    saveTasks();
}

// Placeholder for loadTasks and saveTasks functions (assuming they are defined elsewhere)
function loadTasks() {
    // Implementation to load tasks from localStorage
    // Example: const tasks = JSON.parse(localStorage.getItem('tasks'));
    // if (tasks) { tasks.forEach(task => createTaskElement(task)); }
}

function saveTasks() {
    // Implementation to save tasks to localStorage
    // Example: const tasks = Array.from(taskList.children).map(li => li.textContent);
    // localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Note: The image cuts off the full implementation of loadTasks and saveTasks,
// so I've added comments to indicate their likely purpose.

II.appendChild(delBtn);
taskList.appendChild(II);
taskInput.value = "";
saveTasks();

function saveTasks() {
    const tasks = [];
    taskList.querySelectorAll('li').forEach(II => {
        tasks.push({
            text: II.firstChild.textContent,
            completed: II.classList.contains('completed')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.text;
        if (task.completed) li.classList.add('completed');

        const delBtn = document.createElement('button');
        delBtn.textContent = "Delete";
        delBtn.classList.add("delete-btn");
        delBtn.onclick = () => {
            li.remove();
            saveTasks(); // Added saveTasks() here to update localStorage after deletion
        };
        li.appendChild(delBtn); // Appending delBtn to li
        taskList.appendChild(li); // Appending li to taskList
    });
}
saveTasks();
};
li.onclick = () => {
    li.classList.toggle('completed');
    saveTasks();
};
li.appendChild(delBtn);
taskList.appendChild(li);
});
}