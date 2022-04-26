let tasks = [];
if (localStorage.getItem('allTasks') != undefined) {
    tasks = JSON.parse(localStorage.getItem('allTasks'));
    optionsString = "";;
}

function finishTask(sender) {
    sender.parentElement.classList.toggle("done");
}

function addTask() {
    let name = document.getElementById("newTask").value;
    tasks.push(name);
    localStorage.setItem('allTasks', JSON.stringify(tasks));
    generateTasks();
}

function generateTasks() {
    let optionsString = "";
    for (let task of tasks) {
        optionsString += `<div><input type='checkbox' onchange='finishTask(this)'><span>${task}</span></div>`;
    }
    document.getElementById("container").innerHTML = optionsString;
}
document.addEventListener("DOMContentLoaded",
    function () {
        generateTasks();
    });

function Delete(e) {
    e.closest('.txt2').remove();
}