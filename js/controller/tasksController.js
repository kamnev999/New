var TaskController = (function () {
	var staticId=0;
	function addTask(value) {
		var task = new Task(value, false, staticId++);
		Tasks.push(task);
		TasksView.refreshView(Tasks);
	}

	function deleteTask(task){
		var tasks = Tasks.findOne(task.label);
		Tasks.remove(task.id);
		TasksView.refreshView(tasks); 
	}
	
	return {
		addTask: addTask,
		deleteTask:deleteTask,
	};
}());
	