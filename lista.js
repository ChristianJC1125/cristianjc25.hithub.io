document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const input = document.getElementById('new-task-input');
    const taskList = document.getElementById('task-list');
    const filters = document.querySelectorAll('.filter-btn');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const renderTasks = () => {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const taskElement = document.createElement('li');
            taskElement.textContent = task.text;
            if (task.completed) taskElement.classList.add('completed');
            taskElement.addEventListener('click', () => {
                tasks[index].completed = !tasks[index].completed;
                updateLocalStorage();
                renderTasks();
            });
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.addEventListener('click', (e) => {
                e.stopPropagation();
                tasks.splice(index, 1);
                updateLocalStorage();
                renderTasks();
            });
            taskElement.appendChild(deleteButton);
            taskList.appendChild(taskElement);
        });
    };

    const updateLocalStorage = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    addButton.addEventListener('click', () => {
        const taskText = input.value.trim();
        if (taskText) {
            tasks.push({ text: taskText, completed: false });
            updateLocalStorage();
            renderTasks();
            input.value = '';
        }
    });

    filters.forEach(filter => {
        filter.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            const filterValue = e.target.dataset.filter;
            let filteredTasks = [];
            if (filterValue === 'all') {
                renderTasks();
            } else {
                const isCompleted = filterValue === 'completed';
                filteredTasks = tasks.filter(task => task.completed === isCompleted);
                taskList.innerHTML = '';
                filteredTasks.forEach((task, index) => {
                    const taskElement = document.createElement('li');
                    taskElement.textContent = task.text;
                    if (task.completed) taskElement.classList.add('completed');
                    taskList.appendChild(taskElement);
                });
            }
        });
    });

    renderTasks();
});
