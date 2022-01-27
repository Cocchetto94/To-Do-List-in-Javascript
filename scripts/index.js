var addBtn;
var taskTxt;
var removeBtn;
var taskListHTML;
var tasksList = [];

window.addEventListener("load", init);

function init(){
    addBtn = document.querySelector("#add_btn");
    taskTxt = document.querySelector("#task_txt");
    taskListHTML = document.querySelector("#tasks_list_html");
    checkData();
    eventHandlers();
}

function eventHandlers(){
    addBtn.addEventListener("click", addTask);
}

function addTask(){
    tasksList.push(taskTxt.value);
    buildList();
    saveData();
    clearForms();
}

function clearForms(){
    taskTxt.value = '';
}

function checkData(){
    if(localStorage.getItem('tasks')){
        tasksList = localStorage.getItem('tasks').split(",");
    }
    buildList();
}

function buildList(){
    var list = "";
    for(var i=0; i < tasksList.length; i++){
        list += "<li class='list-group-item d-flex justify-content-between align-items-center'>" + tasksList[i] + "<span onclick='removeTask("+i+")' class='remove_btn badge bg-danger rounded-pill pointer'>X</span></li>";
    }
    taskListHTML.innerHTML = list;
}

function saveData(){
    localStorage.setItem('tasks', tasksList);
}

function removeTask(id){
    tasksList.splice(id, 1);
    saveData();
    buildList();
}