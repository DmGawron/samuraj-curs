
const toDoList = []

const form = document.querySelector('form');
const taskNumber = document.querySelector('h1 span');
const ul = document.querySelector('ul');
const input = document.querySelector('input')
const listItems = document.getElementsByClassName('task')

const removeTask = (e) => {
    e.target.parentNode.remove()
    const index = e.target.parentNode.id
    toDoList.splice(index,1)
    taskNumber.textContent = listItems.length
    renderList()
}

const renderList =() => {
    ul.textContent = ''
    toDoList.forEach((todoElement, index) => {
        todoElement.id = index
        ul.appendChild(todoElement)
    } )
}


const addTask = (e) => {
    e.preventDefault();
    const titleTask = input.value
    console.log(titleTask);
    if(titleTask === '') return
    const task = document.createElement('li')
    task.className = 'task'
    task.innerHTML = titleTask + '<button>Usuń</button>'
    toDoList.push(task)
   renderList()
    ul.appendChild(task)
    input.value = ''
    // const listItems = document.querySelectorAll('li.task').length
    taskNumber.textContent = listItems.length
    task.querySelector('button').addEventListener('click', removeTask)
}


form.addEventListener('submit', addTask)








