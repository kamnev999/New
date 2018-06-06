var TasksView = (function () {
	var addButton = document.getElementById('add');
	var inputTask = document.getElementById('new-task');
	var unfinishedTasks = document.getElementById('unfinished-tasks');
	var finishedTasks = document.getElementById('finished-tasks');

	function createNewElement(task, finished) {
		var listItem = document.createElement('li');
		var checkbox = document.createElement('button');
		if(finished) {
			checkbox.className = "material-icons checkbox";
			checkbox.innerHTML = "<i class='material-icons'>check_box</i>";
		} else {
			checkbox.className = "material-icons checkbox";
			checkbox.innerHTML = "<i class='material-icons'>check_box_outline_blank</i>";
		}

		var label = document.createElement('label');
		label.innerText = task;
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
		return listItem;
	}

	function editTask() {
		console.log(2);
		var editButton = this;
		var listItem = this.parentNode;
		var label = listItem.querySelector('label');
		var input = listItem.querySelector('input[type=text]');
		var containsClass = listItem.classList.contains('editMode');
		if (containsClass) {
			label.innerText = input.value;
			editButton.className = "material-icons edit";
			editButton.innerHTML = "<i class='material-icons'>edit</i>";
			save();
		} else {
			input.value = label.innerText;
			editButton.className = "material-icons save";
			editButton.innerHTML = "<i class='material-icons'>save</i>";
		}
		listItem.classList.toggle('editMode');
	}

	function finishTask() {
		var listItem = this.parentNode;
		var checkbox = listItem.querySelector('button.checkbox');
		checkbox.className = "material-icons checkbox";
		checkbox.innerHTML = "<i class='material-icons'>check_box</i>";
		finishedTasks.appendChild(listItem);
		bindTaskEvents(listItem, unfinishTask);

	}

	function unfinishTask() {
		var listItem = this.parentNode;
		var checkbox = listItem.querySelector('button.checkbox');
		checkbox.className = "material-icons checkbox";
		checkbox.innerHTML = "<i class='material-icons'>check_box_outline_blank</i>";
		unfinishedTasks.appendChild(listItem);
		bindTaskEvents(listItem, finishTask)
		save();
	}

	function renderTasks(tasks) {
		var tasksContainer = document.getElementById('unfinished-tasks');
		var resultTasks = document.createDocumentFragment();

		tasks.forEach(function (task) {
			  var newTaskElement = createNewElement(task.label);
			  resultTasks.appendChild(newTaskElement);
		});

	   tasksContainer.appendChild(resultTasks);
        bindTaskEvents(renderTasks.task, finishTask)
	}


	function clearTasks(){
		var tasks = document.getElementById('tasks');
		var listItem = this.tasks;
		var ul = listItem.parentNode;
		ul.removeChild(listItem);
		var listItem = createNewElement(storage.tasks);
	   
	}

	function refreshView(tasks) {
		//clearTasks();
		renderTasks(tasks);
	}

	function addTask() {
		if (inputTask.value) {
			TaskController.addTask(inputTask.value);
		}
	}

	function deleteTask() {
		var listItem = this.parentNode;
		var ul = listItem.parentNode;
		ul.removeChild(listItem);
	}

	function bindTaskEvents(listItem, checkboxEvent) {
		var checkbox = listItem.querySelector('button.checkbox');
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


