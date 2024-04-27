document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const startDateTime = new Date(document.getElementById('startDateTime').value);
    const endDateTime = new Date(document.getElementById('endDateTime').value);
  
    const today = new Date();
    const daysLeft = Math.ceil((endDateTime - today) / (1000 * 60 * 60 * 24));
  
    const task = {
      name,
      description,
      startDateTime,
      endDateTime,
      isCompleted: false
    };
  
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
    tasks.push(task);
  
    localStorage.setItem('tasks', JSON.stringify(tasks));
  
    window.location.href = 'form.html';
  });
