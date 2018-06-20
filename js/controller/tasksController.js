var TaskController = (function () {
	var staticId=0;
	function addTask(value) {
		var task = new Task(value, false, staticId++);
		Tasks.push(task);
		TasksView.refreshView(Tasks);
	}

	function deleteTask(taskId){
		//var tasks = Tasks.findOne(task.label);
		var task = Tasks.lastIndexOf(taskId);
		//Tasks.remove(task.id);
		delete Tasks[task];
		TasksView.refreshView(tasks); 
	}
	
	return {
		addTask: addTask,
		deleteTask:deleteTask,
	};
}());
	