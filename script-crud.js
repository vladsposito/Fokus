const addTaskBt = document.querySelector(".app__button--add-task")

const taskCard = document.querySelector(".app__form-add-task")

addTaskBt.addEventListener("click", ()=>{
    taskCard.classList.toggle("hidden")
})