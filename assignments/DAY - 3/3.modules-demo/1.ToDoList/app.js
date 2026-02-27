import { addTask,getAllTasks,completeTask } from "./task.js";

// Adding some tasks
addTask('eating','medium','2026-02-29');
addTask('beating','high','2026-02-28');
addTask('sleeping','low','2026-02-26');

// Displaying tasks
console.log('==================Displaying tasks===================')
console.log(getAllTasks());
console.log('=====================================================')

// Completing tasks
console.log('==================Complete task===================')
completeTask(1);
console.log(getAllTasks());

