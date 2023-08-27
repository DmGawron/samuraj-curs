
const input = document.querySelector('input')

const ul = document.querySelector('ul')
const liElements = document.querySelectorAll('li')



const searchTask = (e) => {
    const text = e.target.value.toLowerCase()
    let task = [...liElements]
    task = task.filter(li => li.textContent.toLowerCase().includes(text))
   console.log(task);
   ul.textContent = ''
   task.forEach(li => ul.appendChild(li))
}

input.addEventListener('input', searchTask)












