const express = require('express');
const router = express.Router();

const tasks = [
    { id: 1, title: 'Task 1', description: 'Do something' },
    { id: 2, title: 'Task 2', description: 'Do something else' },
];

router.get('/', (req, res) => {
    res.json(tasks);
});

router.get('/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskId);
    if (!task) {
        res.status(404).json({ message: 'Task not found' });
    } else {
        res.json(task);
    }
});

router.post('/', (req, res) => {
    // Handle creating a new task (e.g., add it to the tasks array)
    // You'll need to extract data from req.body
    // Example:
    // const newTask = { id: tasks.length + 1, ...req.body };
    // tasks.push(newTask);
    // res.status(201).json(newTask);
});

router.put('/:id', (req, res) => {
    // Handle updating an existing task (e.g., find task by ID and update its properties)
    // You'll need to extract data from req.body
    // Example:
    // const taskId = parseInt(req.params.id);
    // const updatedTask = { ...req.body };
    // // Update the task in the tasks array
    // res.json(updatedTask);
});

router.delete('/:id', (req, res) => {
    // Handle deleting a task (e.g., find task by ID and remove it from the tasks array)
    // Example:
    // const taskId = parseInt(req.params.id);
    // // Remove the task from the tasks array
    // res.json({ message: 'Task deleted successfully' });
});

module.exports = router;
