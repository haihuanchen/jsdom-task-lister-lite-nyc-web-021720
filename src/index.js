document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //get the form on html
  //add event listener submit 
  //prevent default
  //grab whatever user submits
  //implement into DOM
  const newTaskForm = document.querySelector('#create-task-form')
  const newTaskDesc = document.querySelector('#new-task-description')
  const list = document.querySelector('#tasks')

  newTaskForm.addEventListener('submit', createNewTask)

  function createNewTask(event){
    event.preventDefault();
    const li = document.createElement('li')
    li.innerText = newTaskDesc.value
    const button = document.createElement('button')
    button.innerText = 'x'
    list.appendChild(li)
    li.append(button)
    event.target.reset();
    
    button.addEventListener('click',function(event){
      // button.parentNode.remove()
     event.target.parentNode.remove()

    })
  }

});
