
const removeTask = (e) => {
    // e.target.parentElement.remove()
    // e.target.parentElement.style.textDecoration = 'line-through'
    const index = e.target.dataset.key
   
    document.querySelector(`li[data-key="${index}"]`).remove()
}








document.querySelectorAll('button[data-key]').forEach(item => {
    item.addEventListener('click', removeTask)
})
