
        taskList.appendChild(li);
        taskInput.value = "";
        saveTasks();


function completeTask(button) {
    var task = button.parentElement.parentElement;
    task.classList.toggle("completed");
    saveTasks();
}

function editTask(button) {
    var task = button.parentElement.parentElement;
    var textSpan = task.querySelector("span:first-child");
    var newText = prompt("Edit task:", textSpan.textContent);
    if (newText !== null) {
        textSpan.textContent = newText;
        saveTasks();
    }
}

function deleteTask(button) {
    var task = button.parentElement.parentElement;
    task.remove();
    saveTasks();
}

function setStartDate(button) {
    var task = button.parentElement.parentElement;
    var startDateSpan = task.querySelector("#startDate");
    var startDate = new Date();
    startDateSpan.textContent = startDate.toLocaleString();
    saveTasks();
}

function setEndDate(button) {
    var task = button.parentElement.parentElement;
    var endDateSpan = task.querySelector("#endDate");
    var endDate = new Date();
    endDateSpan.textContent = endDate.toLocaleString();
    saveTasks();
}

function saveTasks() {
    var tasks = [];
    var taskList = document.getElementById("taskList").children;
    for (var i = 0; i < taskList.length; i++) {
        var task = taskList[i];
        var taskText = task.querySelector("span:first-child").textContent;
        var startDate = task.querySelector("#startDate").textContent;
        var endDate = task.querySelector("#endDate").textContent;
        var completed = task.classList.contains("completed");
        tasks.push({ text: taskText, startDate: startDate, endDate: endDate, completed: completed });
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    var taskList = document.getElementById("taskList");
    tasks.forEach(function(task) {
        var li = document.createElement("li");
        li.innerHTML = `
            <div class="task${task.completed ? ' completed' : ''}">
                <span>${task.text}</span>
                <span>Start: <span id="startDate">${task.startDate}</span></span>
                <span>End: <span id="endDate">${task.endDate}</span></span>
                <div class="actions">
                    <button onclick="completeTask(this)">Complete</button>
                    <button onclick="editTask(this)">Edit</button>
                    <button onclick="deleteTask(this)">Delete</button>
                    <button onclick="setStartDate(this)">Set Start Date</button>
                    <button onclick="setEndDate(this)">Set End Date</button>
                </div>
            </div>
        `;
        taskList.appendChild(li);
    });
}

loadTasks();
