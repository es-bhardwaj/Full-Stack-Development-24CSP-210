let tasks = [];
let form = document.getElementById("taskForm");
let taskList = document.getElementById("taskList");
form.addEventListener("submit", addTask);

function addTask(event){
    event.preventDefault();
    let name = document.getElementById("taskName").value;
    let priority = document.getElementById("priority").value;
    let task = {
        name: name,
        priority: priority,
        completed: false
    };
    tasks.push(task);
    displayTasks(tasks);
    form.reset();
}

function displayTasks(list){
    taskList.innerHTML = "";
    list.forEach(function(task){
        let li = document.createElement("li");
        li.textContent = task.name + " - " + task.priority;
        if(task.completed){
            li.classList.add("completed");
        }
        li.onclick = function(){
            task.completed = !task.completed;
            displayTasks(tasks);
        };
        taskList.appendChild(li);
    });
}

function filterTasks(type){
    if(type === "all"){
        displayTasks(tasks);
    }
    else if(type === "completed"){
        let comp = tasks.filter(function(task){
            return task.completed;
        });
        displayTasks(comp);
    }
    else if(type === "pending"){
        let arr = tasks.filter(function(task){
            return !task.completed;
        });
        displayTasks(arr);
    }
}