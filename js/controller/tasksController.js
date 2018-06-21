var TaskController = (function () {
	var staticId=0;
	function addTask(value) {
		var task = new Task(value, false, staticId++);
		Tasks.push(task);
		TasksView.refreshView(Tasks);
	}

	function deleteTask(taskId){
		var taskIndex = Tasks.findIndex(function (task) {
            return Tasks.id=taskId		
		});
		//Tasks = Tasks.slice(taskIndex, 1);
		delete Tasks[taskIndex];
		
		/*if (taskId!=0) {}
			else if (taskId<=staticId) {
				
		}*/
		
		TasksView.refreshView(Tasks); 
	}
	
	function editTask(taskId,label){
		var taskIndex = Tasks.findIndex(function (task) {
            return Tasks.id=taskId;		
		});
		
		//var task = new Task(value, false, taskId);
		//Tasks.splice(taskId,1, label);
		
		Tasks[taskIndex].label = label;
		
		
		
		TasksView.refreshView(Tasks); 	
	}
	
	return {
		addTask: addTask,
		deleteTask: deleteTask,
		editTask: editTask,
	};
}());
	