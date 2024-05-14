const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Your routes will go here

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const tasksRouter = require('./routes/tasks');

// ...

// Use the tasks router
app.use('/tasks', tasksRouter);

