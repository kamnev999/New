var TasksView = (function () {
	var addButton = document.getElementById('add');
	var inputTask = document.getElementById('new-task');
	var unfinishedTasks = document.getElementById('unfinished-tasks');
	var finishedTasks = document.getElementById('finished-tasks');

	function createNewElement(task, finished) {
		var listItem = document.createElement('li');
		var checkbox = document.createElement('input');
		checkbox.type = 'checkbox';
		if(finished) {
			checkbox.className = "material-icons checkbox";
			checkbox.innerHTML = "<i class='material-icons'>check_box</i>";
		} else {
			checkbox.className = "material-icons checkbox";
			checkbox.innerHTML = "<i class='material-icons'>check_box_outline_blank</i>";
		}

		var label = document.createElement('label');
		label.innerText = task.label;
		var input = document.createElement('input');
		input.type = "text";
		var editButton = document.createElement('button');
		editButton.className = "material-icons edit";
		editButton.innerHTML = "<i class='material-icons'>edit</i>";
		var deleteButton = document.createElement('button');
		deleteButton.className = "material-icons delete";
		deleteButton.innerHTML = "<i class='material-icons'>delete</i>";
		listItem.appendChild(checkbox);
		listItem.appendChild(label);
		listItem.appendChild(input);
		listItem.appendChild(deleteButton);
		listItem.appendChild(editButton);
		listItem.setAttribute('task-id', task.id);
		bindTaskEvents(listItem, finishTask);
		return listItem;
		        
	}

	function editTask() {
		var editButton = this;
		var listItem = this.parentNode;
		var label = listItem.querySelector('label');
		var input = listItem.querySelector('input[type=text]');
		var containsClass = listItem.classList.contains('editMode');
		if (containsClass) {
			label.innerText = input.value;
			editButton.className = "material-icons edit";
			editButton.innerHTML = "<i class='material-icons'>edit</i>";
			var taskId = listItem.getAttribute('task-id');
		    TaskController.editTask(taskId, label.innerText);
		} else {
			input.value = label.innerText;
			editButton.className = "material-icons save";
			editButton.innerHTML = "<i class='material-icons'>save</i>";
			
		}
		listItem.classList.toggle('editMode');
		
		
	}

	function finishTask() {
		var listItem = this.parentNode;
		var checkbox = listItem.querySelector('input.checkbox');
		checkbox.className = "material-icons checkbox";
		checkbox.innerHTML = "<i class='material-icons'>check_box</i>";
		finishedTasks.appendChild(listItem);
		bindTaskEvents(listItem, unfinishTask);

	}

	function unfinishTask() {
		var listItem = this.parentNode;
		var checkbox = listItem.querySelector('input.checkbox');
		checkbox.className = "material-icons checkbox";
		checkbox.innerHTML = "<i class='material-icons'>check_box_outline_blank</i>";
		unfinishedTasks.appendChild(listItem);
		bindTaskEvents(listItem, finishTask)
		
	}

	function renderTasks(tasks) {
		var unfinishedTasksContainer = document.getElementById('unfinished-tasks');
		var finishedTasksContainer = document.getElementById('unfinished-tasks');
		var unfinishedTasks = document.createDocumentFragment();
		var finishedTasks = document.createDocumentFragment();

		tasks.forEach(function (task) {
			  var newTaskElement = createNewElement(task);
			  
			  if (task.completed) {
			  	finishedTasks.appendChild(newTaskElement);
			  } else {
			  	unfinishedTasks.appendChild(newTaskElement);
			  }
		});

	   finishedTasksContainer.appendChild(finishedTasks);
	   unfinishedTasksContainer.appendChild(unfinishedTasks);
       
	}


	function clearTasks(){
		var unfinishedTasks = document.getElementById('unfinished-tasks');
		unfinishedTasks.innerHTML = '';
	}

	function refreshView(tasks) {
		clearTasks();
		renderTasks(tasks);
	}

	function addTask() {
		if (inputTask.value) {
			TaskController.addTask(inputTask.value);        
		}
	}

	function deleteTask() {
		var listItem = this.parentNode;
		//var ul = listItem.parentNode;
		//ul.removeChild(listItem);
		var taskId = listItem.getAttribute('task-id');
		TaskController.deleteTask(taskId);
		//Tasks.remove(taskId);
		//refreshView(Tasks);
	}

	function bindTaskEvents(listItem, checkboxEvent) {
		var checkbox = listItem.querySelector('input.checkbox');
		var editButton = listItem.querySelector('button.edit');
		var deleteButton = listItem.querySelector('button.delete');
		
		// Replace with addEventListener
		checkbox.onclick = checkboxEvent;
		editButton.onclick = editTask;
		deleteButton.onclick = deleteTask;
		/*
		checkbox.addEventListener=(checkboxEvent);
		editButton.addEventListener = (editTask);
		deleteButton.addEventListener = (deleteTask);
		*/
		
	}
	
	addButton.onclick = addTask;
	
	return {
		refreshView: refreshView,
	};
}());


