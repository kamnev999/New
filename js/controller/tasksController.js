var TaskController = (function () {
	function addTask(value) {
		var task = new Task(value, false);
		Tasks.push(task);
		TasksView.refreshView(Tasks);
	}

	function deleteTask(label){
		var tasks = Tasks.findOne(label);
		Tasks.remove(label);
		TasksView.refreshView(tasks); 
	}
	
	return {
		addTask: addTask,
	};
}());
	