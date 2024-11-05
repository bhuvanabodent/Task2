// Form Validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');
  
    // Simple validation
    if (!name || !email || !message) {
      formMessage.textContent = 'Please fill in all fields';
      formMessage.style.color = 'red';
      return;
    }
  
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      formMessage.textContent = 'Please enter a valid email address';
      formMessage.style.color = 'red';
      return;
    }
  
    formMessage.textContent = 'Thank you for your message!';
    formMessage.style.color = 'green';
  
    // Reset form
    document.getElementById('contactForm').reset();
  });
  
  // To-Do List DOM Manipulation
  const todoInput = document.getElementById('todoInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const todoList = document.getElementById('todoList');
  
  addTaskBtn.addEventListener('click', addTask);
  
  function addTask() {
    const taskText = todoInput.value;
    if (!taskText) return;
  
    // Create list item
    const li = document.createElement('li');
    li.textContent = taskText;
  
    // Add remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.style.marginLeft = '1rem';
    removeBtn.onclick = () => todoList.removeChild(li);
    li.appendChild(removeBtn);
  
    // Add task to list and clear input
    todoList.appendChild(li);
    todoInput.value = '';
  }
  