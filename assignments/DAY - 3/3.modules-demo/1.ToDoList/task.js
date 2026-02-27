import { validateDueDate,validateTitle,validatePriority } from "./validator.js";

const tasks = []

function addTask(title,priority,dueDate)
{
    if(validateDueDate(dueDate) && validatePriority(priority) && validateTitle(title))
    {
        let task = {taskTitle: title,taskPriority: priority, taskDue: dueDate}
        task.id = tasks.length
        task.status = false
        tasks.push(task)
        console.log("Success")
    }
    else
    {
        console.log("Unsuccessful, Please try again")
    }
}

function getAllTasks()
{
    return tasks;
}

function completeTask(ID)
{
    let index = tasks.findIndex((task)=>task.id == ID)
    tasks[index].status = true
    console.log(tasks[index])
    console.log('==============================================')
}

export {addTask,getAllTasks,completeTask}


