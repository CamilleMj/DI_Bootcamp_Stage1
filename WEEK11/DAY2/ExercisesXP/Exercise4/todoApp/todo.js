export class TodoList {
    constructor() {
    this.tasks = [];
}
  
addTask(task) {
    this.tasks.push(task);
}
  
markTaskComplete(taskIndex) {
    this.tasks[taskIndex].completed = true;
}
  
listAllTasks() {
    return this.tasks;
}
}