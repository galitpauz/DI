let modal = document.querySelector('.modal');
let taskForm = document.querySelector('.task-form');
let taskTable = document.querySelector('.task-table')
let cancel = document.querySelector('.cancel-btn')

let taskDeleteButtons;
let taskList = JSON.parse(localStorage.getItem('tasks'));
if(taskList !== null){
    appendTasks()
}

taskForm.addEventListener('submit', (e)=>{
    addTask(e);
});

function getDeleteButtons(){
    taskDeleteButtons = Array.from(document.querySelectorAll('.delete-item'));

    taskDeleteButtons.forEach(button =>{
        let taskTitle = button.previousSibling.previousSibling.innerText
        button.addEventListener('click', ()=>{
            deleteTask(taskTitle);
        }
    )
})
}

function addTask(e){
    e.preventDefault();
    let newTask = {};

    let title = document.getElementById('title');
    let desc = document.getElementById('description');
    // let start = document.getElementById('start');
    // let end = document.getElementById('end');


    if (title.value == '' || desc.value == ''){
        return alert('Please fill all fields');
    }else{
        newTask.title = title.value;
        newTask.desc = desc.value;
        // newTask.start = start.value;
        // newTask.end = end.value;
    }
    title.value = '';
    desc.value = '';

    taskList.push(newTask)
    appendTasks();
    cancel.click();
}

function appendTasks(){
    
    let tasks = Array.from(document.querySelectorAll('.taskItem'));
    if (tasks.length > 0){ 
        tasks.forEach(task =>{
            task.remove();
        })
    }
    taskList.map(task => {

        // Create cells
        let tr = document.createElement('tr');
        tr.classList = 'taskItem';
        let tdTitle = document.createElement('td');
        tdTitle.innerText = task.title;
        let tdTask = document.createElement('td');
        tdTask.innerText = task.desc;
        let tdDelete = document.createElement('td');
        tdDelete.innerHTML = '&times'
        tdDelete.classList.add('delete-item')

        // Append cells to table row
        tr.appendChild(tdTitle);
        tr.appendChild(tdTask);
        tr.appendChild(tdDelete);

        //Append tr to table
        taskTable.appendChild(tr);
        getDeleteButtons();
        localStorage.setItem('tasks', JSON.stringify(taskList));
    })

}

function deleteTask(taskTitle){
    for(let i = 0; i < taskList.length; i++){
        if(taskList[i].title == taskTitle){
            taskList.splice(i, 1);
        }
    }
    localStorage.setItem('tasks', JSON.stringify(taskList));
    appendTasks();
}