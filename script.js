document.getElementById('todoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskText = document.getElementById('todoInput').value;
    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;
    li.addEventListener('click', function() {
        this.classList.toggle('done');
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        this.parentElement.remove();
    });

    li.appendChild(deleteButton);
    document.getElementById('todoList').appendChild(li);

    document.getElementById('todoInput').value = '';
});