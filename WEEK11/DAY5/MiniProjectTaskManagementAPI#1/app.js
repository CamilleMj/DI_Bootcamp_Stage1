const newTasks = [
  { id: 1, name: "iPhone"},
  { id: 2, name: "iPad"},
  { id: 3, name: "iWatch"},
];
module.exports = newTasks;

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const tasksRouter = require('./routes/tasks');

app.use('/tasks', tasksRouter);

