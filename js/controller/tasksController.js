(function addTask() {
var tasks=new Task(inputTask.value, false);
	tasks.push(task);
	view.refreshView(tasks);
}
function deleteTask(label){
var tasks=Tasks.findOne(label);
Tasks.remove(label);
view.refreshView(tasks); 
}
	
	());
	