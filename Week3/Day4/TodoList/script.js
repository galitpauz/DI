let listTasks = [];

let task = document.getElementById("task");
let submit = document.querySelector("button");
let tasks = document.getElementById("listTasks");

function addTask(i) {
  i.preventDefault();
  if (task.value === "") {
    return;
  }

  listTasks.push(task.value);
  let div = document.createElement("div");
  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  
  let newTask = document.createTextNode(task.value);
  div.appendChild(checkBox);
  div.appendChild(newTask);
  tasks.appendChild(div);
}

submit.addEventListener("click", addTask);