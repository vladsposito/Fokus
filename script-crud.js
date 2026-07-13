const addTaskBt = document.querySelector(".app__button--add-task")

const taskCard = document.querySelector(".app__form-add-task")
const textArea = document.querySelector(".app__form-textarea")
const ulTaskList = document.querySelector(".app__section-task-list")
const activeTaskName = document.querySelector(".app__section-active-task-description")

const taskList = JSON.parse(localStorage.getItem("taskList")) || []
//taskList esta recebendo os elementos da lC
//OU, caso não tenha nada na lC, vai criar um array para receber o push
//JSON.parse está transformando a string em array (caminho inverso)

function refreshTaskName(){
    localStorage.setItem("taskList", JSON.stringify(taskList))
}

function createTaskElement(task){
    const li = document.createElement("li")
    li.classList.add("app__section-task-list-item")

    const svg = document.createElement("svg")
    svg.innerHTML = `
    <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
        <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
    </svg>
    `

    const p = document.createElement("p")
    p.classList.add("app__section-task-list-item-description")
    p.textContent = task.taskName

    const button = document.createElement("button")
    button.classList.add("app_button-edit")

    const img = document.createElement("img")
    img.setAttribute("src", "/imagens/edit.png")


    button.classList.add("app_button-edit")

    button.addEventListener("click", ()=>{
        const newTaskName = prompt("Qual o novo nome da tarefa?")
        if(newTaskName != "" && newTaskName != null){
           p.textContent = newTaskName
            task.taskName = newTaskName
            refreshTaskName() 
        }
    })

    li.addEventListener("click", ()=>{
        activeTaskName.textContent = task.taskName
        li.classList.toggle("app__section-task-list-item-active")

    })

    button.append(img)
    li.append(svg)
    li.append(p)
    li.append(button)
    //O append serve para colocar uma tag "dentro" da outra

    return li
}

addTaskBt.addEventListener("click", ()=>{
    taskCard.classList.le("hidden")
})

taskCard.addEventListener("submit", (event)=>{
    event.preventDefault() //Tira o refresh padrao da pagina

    const tasks = { 
        taskName: textArea.value
    } //Criando objeto tasks, com a chave taskName que recebe o conteúdo do textArea

    taskList.push(tasks) //Jogando o objeto tasks pro array taskList

    localStorage.setItem("taskList", JSON.stringify(taskList))
    //Jogando o array taskList na localStorage
    //Transformando o array em string, pq a lC só recebe string

    const taskElement = createTaskElement(tasks)
    ulTaskList.append(taskElement)
    //Cria o taskElement e adciona na ul logo após sua criação, diferente do forEach la embaixo...

   textArea.value = ""
   //Limpa o textArea

   taskCard.classList.toggle("hidden")
})

taskList.forEach(tasks => {
   const taskElement = createTaskElement(tasks)
   ulTaskList.append(taskElement)
});
//Lê o taskList pra ver se tem alguma task na lC
//Se tiver, ele cria um TaskElement e adiciona na UL
//Só funciona se tiver alguma task salva, se criar na hora não vai adicionar. 

