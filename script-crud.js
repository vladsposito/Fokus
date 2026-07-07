const addTaskBt = document.querySelector(".app__button--add-task")

const taskCard = document.querySelector(".app__form-add-task")
const textArea = document.querySelector(".app__form-textarea")

const taskList = []

addTaskBt.addEventListener("click", ()=>{
    taskCard.classList.toggle("hidden")
})

taskCard.addEventListener("submit", (event)=>{
    event.preventDefault()
    const tasks = {
        taskName: textArea.value
    }
    taskList.push(tasks)
    localStorage.setItem("taskList", JSON.stringify(taskList))
})