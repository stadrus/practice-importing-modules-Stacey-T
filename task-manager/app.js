
const path = require('path');
const path1 = path.parse("c:/Users/Stacey Tadrus/OneDrive/Documents/GitHub/launchcode/practice/practice-importing-modules-Stacey-T/task-manager/taskManager");
console.log(path1);
const path2 = path.parse("c:/Users/Stacey Tadrus/OneDrive/Documents/GitHub/launchcode/practice/practice-importing-modules-Stacey-T/task-manager/fileHandler");
console.log(path2);

const taskManager = require('./taskManager');
const fileHandler = require('./fileHandler');


let tasks = [];
let task = ["clean room, wash clothes, cook dinner"];
let filePath = "tasks.json"



console.log(fileHandler.loadTasks(filePath));
console.log(taskManager.addTask(tasks, task));
// console.log(taskManager.addTask(tasks,task));
console.log(taskManager.listTasks(tasks));
console.log(fileHandler.saveTasks(filePath, tasks));




