var TaskController = (function () {
	var staticId=0;
	function addTask(value) {
		var task = new Task(value, false, staticId++);
		Tasks.push(task);
		TasksView.refreshView(Tasks);
	}

	function deleteTask(taskId){
		var taskIndex = Tasks.findIndex(function (taskIndex) {
            if (Tasks.id=taskId){
			taskIndex=taskId;
			}
				
		});
		//Tasks.remove(task.id);
		Tasks = Tasks.slice(taskIndex, 1);
		//delete Tasks[task];
		TasksView.refreshView(Tasks); 
	}
	
	function editTask(taskId,label){
		var index = 0;
		
		var task = new Task(value, false, taskId);
		Tasks.splice(taskId,1, label);
		
		Tasks[index].label = label;
		
		
		
		TasksView.refreshView(Tasks); 	
	}
	
	return {
		addTask: addTask,
		deleteTask: deleteTask,
		editTask: editTask,
	};
}());
	