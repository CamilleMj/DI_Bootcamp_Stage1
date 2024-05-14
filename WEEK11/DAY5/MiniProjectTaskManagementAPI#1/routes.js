const express = require('express');
const router = express.Router();

const tasks = [
    { id: 1, title: 'Task 1', description: 'Do something' },
    { id: 2, title: 'Task 2', description: 'Do something else' },
];

router.get('/', (req, res) => {
    res.json(tasks);
});


router.get("/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    const Task = Tasks.find((Task) => Task.id === id);

  if (!Task) {
    return res.status(404).send("Task not found");
  }
});

router.post("/tasks", (req, res) => {
    const manageTask = {};
    newTasks.push(manageTask);
    res.status(201).json(manageTask);
});

router.put("/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = Tasks.findIndex((Task) => Task.id === id);
    if (index === -1) {
      return res.status(404).send("Task not found");
    }
    const updatedTask = {
      id: Tasks[index].id
    };
    Tasks[index] = updatedTask;
    res.status(200).json("Task updated");
});

router.delete("/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = Tasks.findIndex((Task) => Task.id === id);
    if (index === -1) {
      return res.status(404).send("Task not found");
    }
    Tasks.splice(index, 1);
    res.status(200).json("Task deleted");
  });

module.exports = router;