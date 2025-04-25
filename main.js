$(document).ready(function () {
    let currentTaskIndex = null;

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    renderTasks();

    $('#addTask').click(function () {
        const title = $('#taskTitle').val().trim();
        const description = $('#taskDescription').val().trim();

        if (!title || !description) return;

        const task = { title, description };
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        renderTasks();
        $('#taskTitle').val('');
        $('#taskDescription').val('');
    });

    $('#taskList').on('click', '.view-task', function () {
        const index = $(this).data('index');
        const task = tasks[index];
        currentTaskIndex = index;

        $('#modalTaskTitle').text(task.title);
        $('#modalTaskDescription').text(task.description);

        const modal = new bootstrap.Modal(document.getElementById('taskModal'));
        modal.show();
    });

    $('#deleteTaskBtn').click(function () {
        if (currentTaskIndex !== null) {
            tasks.splice(currentTaskIndex, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            renderTasks();

            const modal = bootstrap.Modal.getInstance(document.getElementById('taskModal'));
            modal.hide();
        }
    });

    function renderTasks() {
        $('#taskList').empty();
        tasks.forEach((task, index) => {
            const taskItem = $(`
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <strong>${task.title}</strong><br>
            <small class="text-muted">${task.description}</small>
          </div>
          <button class="btn btn-sm btn-outline-info view-task" data-index="${index}">View</button>
        </li>
      `);
            $('#taskList').append(taskItem);
        });
    }
});
