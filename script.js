const html = document.querySelector('html')

const focoBt = document.querySelector(".app__card-button--foco")
const curtoBt = document.querySelector(".app__card-button--curto")
const longoBt = document.querySelector(".app__card-button--longo")
const startBt = document.querySelector(".app__card-primary-button")
const startBtText = document.querySelector(".app__card-primary-button span")
const startBtIcon = document.querySelector(".app__card-primary-butto-icon")
const botoes = document.querySelectorAll(".app__card-button") 
//O querrySelectorAll pega mais de um elemnto, fazendo um array. Ou seja, a const botoes é uma array
const inputMusic = document.querySelector(".toggle-checkbox")

const bannerImg = document.querySelector(".app__image")
const bannerTitle = document.querySelector(".app__title")

const playAudio = new Audio("/sons/play.wav")
const pauseAudio = new Audio("/sons/pause.mp3")
const beepAudio = new Audio("/sons/beep.mp3")
const music = new Audio("/sons/luna-rise-part-one.mp3")
music.loop = true

const timerCard = document.querySelector(".app__card-timer")
const focoTime = 3
const curtoTime = 5 * 60
const longoTime = 15 * 60

let clockTime = 25 * 60
let setIntervalId = null

function switchContexto(contexto){ //A função esta removendo o "active de todos os botões", para depois ser colocada no botão usado.
    botoes.forEach(contexto => {  //Devo usar forEach porque se trata de um array. 
        contexto.classList.remove("active")
    });

    html.setAttribute('data-contexto', contexto)
    bannerImg.setAttribute("src", `/imagens/${contexto}.png`)
}

function clock(){
    clockTime--
    timer()

    if(clockTime <= 0){
        stopClock()
        const contexto = html.getAttribute("data-contexto")
        if(contexto == "foco"){
        const taskCompleted = new CustomEvent("taskCompleted") //criando evento taskCompleted
        document.dispatchEvent(taskCompleted) //despachando o evento no document
        }
        //beepAudio.play()
        clockTime = 10
    }
}

function startAndPauseClock(){
    if(setIntervalId){
        pauseAudio.play()
        stopClock()
        return
    }
    setIntervalId = setInterval(clock, 1000)
    playAudio.play()
    startBtIcon.setAttribute("src", "/imagens/pause.png")
    startBtText.textContent = "Pausar"
}


function stopClock(){
    clearInterval(setIntervalId)
    setIntervalId = null
    startBtIcon.setAttribute("src", "/imagens/play_arrow.png")
    startBtText.textContent = "Começar"
}

function timer(){
    const time = new Date(clockTime * 1000)
    const timeFormmated = time.toLocaleTimeString("pt-br", {minute: "2-digit", second: "2-digit"})
    timerCard.innerHTML = `${timeFormmated}`
}

timer()


inputMusic.addEventListener("change", () => {
    if(music.paused){
        music.play()
    }else{
        music.pause()
    }
})

focoBt.addEventListener('click', () => {
    switchContexto("foco")
    focoBt.classList.add("active")
    bannerTitle.innerHTML = `Otimize sua produtividade,<br />
          <strong class="app__title-strong">mergulhe no que importa.</strong>`
    clockTime = focoTime
    timer()
})

curtoBt.addEventListener('click', () => {
    switchContexto("descanso-curto")
    curtoBt.classList.add("active")
    bannerTitle.innerHTML = `Que tal dar uma respirada?<br />
          <strong class="app__title-strong">Faça uma pausa curta!</strong>`
    clockTime = curtoTime
    timer()
})

longoBt.addEventListener('click', () => {
    switchContexto("descanso-longo")
    longoBt.classList.add("active")
    bannerTitle.innerHTML = `Hora de voltar à superfície.<br />
          <strong class="app__title-strong">Faça uma pausa longa.</strong>`
    clockTime = longoTime
    timer()
})

startBt.addEventListener("click", ()=>{
    startAndPauseClock()
    timer()
})
