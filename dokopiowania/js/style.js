
const removeTask = (e) => {
    // e.target.parentElement.remove()
    e.target.parentElement.style.textDecoration = 'line-through'
   
}









document.querySelectorAll('li button').forEach(item => {
    item.addEventListener('click', removeTask)
})