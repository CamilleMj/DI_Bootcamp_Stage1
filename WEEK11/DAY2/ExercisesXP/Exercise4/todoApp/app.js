import { TodoList } from './todo.js';
  
const myTodoList = new TodoList();
 
myTodoList.addTask('Buy groceries');
myTodoList.addTask('Finish homework');
myTodoList.markTaskComplete(0);
 
const allTasks = myTodoList.listAllTasks();
console.log('All tasks:', allTasks);