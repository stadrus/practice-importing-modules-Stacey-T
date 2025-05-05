function addTask(tasks, task){
     return tasks.push(task); // .push()will add task to the tasks lists. 
    // return tasks += task;
}
function listTasks(tasks){
    console.log(`List of tasks: ${tasks}`);
   
}

module.exports = {addTask, listTasks};