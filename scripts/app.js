document.querySelector('#TodoForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const todoInput = document.querySelector('#TodoInput');
  const todoText = todoInput.value;
  
  if (todoText === '') {
    alert('Please enter a task');
    return;
  }

  const todoList = document.querySelector('#TodoList');
  const todoItem = document.createElement('li');

  // Create text for the task
  const taskText = document.createTextNode(todoText);

  // Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Delete';
  deleteBtn.classList.add('DeleteBtn');
  deleteBtn.addEventListener('click', function() {
    todoItem.remove();
  });

  todoItem.appendChild(taskText);
  todoItem.appendChild(deleteBtn);

  // Add animation when adding
  todoItem.style.opacity = '0';
  todoList.appendChild(todoItem);

  setTimeout(function() {
    todoItem.style.opacity = '1';
    todoItem.style.transition = 'opacity 0.5s ease';
  }, 15);

  todoInput.value = '';

  // Toggle task completion on click
  todoItem.addEventListener('click', function() {
    todoItem.classList.toggle('completed');
  });
});