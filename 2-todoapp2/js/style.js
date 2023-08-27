
const form = document.querySelector('form');
const taskNumber = document.querySelector('h1 span');
const ul = document.querySelector('ul');
const input = document.querySelector('input')
const listItems = document.getElementsByClassName('task')

const removeTask = (e) => {
    e.target.parentNode.remove()
    taskNumber.textContent = listItems.length
}


const addTask = (e) => {
    e.preventDefault();
    const titleTask = input.value
    console.log(titleTask);
    if(titleTask === '') return
    const task = document.createElement('li')
    task.className = 'task'
    task.innerHTML = titleTask + '<button>Usuń</button>'
    ul.appendChild(task)
    input.value = ''
    // const listItems = document.querySelectorAll('li.task').length
    taskNumber.textContent = listItems.length
    task.querySelector('button').addEventListener('click', removeTask)
}


form.addEventListener('submit', addTask)








