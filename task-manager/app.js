const readline = require('readline-sync');

const path = require('path');
const taskManager = require('./taskManager');
const fileHandler = require('./fileHandler');

const tasks =[];
// let i = "";
let task = readline.question('Please enter a task: ');
//using a while loop will continue to loop through the tasks array. 
for (let task of tasks){
    task += task;
}

// console.log(taskManager.addTask(tasks, task));
console.log(tasks.push(task))
console.log(taskManager.listTasks(tasks));
// fileHandler.saveTasks(filePath, tasks);




