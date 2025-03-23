document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;

        // Add "Done" functionality
        li.addEventListener('click', () => {
            li.classList.toggle('done');
        });

        // Add "Delete" button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(deleteBtn);
        document.getElementById('taskList').appendChild(li);

        // Clear input field
        taskInput.value = '';
    }
}
