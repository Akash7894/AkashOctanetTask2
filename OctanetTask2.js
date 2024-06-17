document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
    const taskName = document.getElementById('taskName').value;
    const category = document.getElementById('category').value;
    const deadline = document.getElementById('deadline').value;
    const priority = document.getElementById('priority').value;

    if (taskName === '' || deadline === '') {
        alert('Please fill out all fields');
        return;
    }

    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');

    taskItem.innerHTML = `
        <div class="task-details">
            <span>${taskName}</span>
            <span>${category}</span>
            <span>${deadline}</span>
            <span>${priority}</span>
        </div>
        <div class="task-actions">
            <button class="delete-btn">Delete</button>
        </div>
    `;

    taskList.appendChild(taskItem);

    document.getElementById('taskName').value = '';
    document.getElementById('category').value = 'Planning and Research';
    document.getElementById('deadline').value = '';
    document.getElementById('priority').value = 'High';

    const deleteButton = taskItem.querySelector('.delete-btn');
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });
}

