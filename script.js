const html = document.querySelector('html')

const focoBt = document.querySelector(".app__card-button--foco")
const curtoBt = document.querySelector(".app__card-button--curto")
const longoBt = document.querySelector(".app__card-button--longo")
const startBt = document.querySelector(".app__card-primary-button")
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


let clockTime = 10
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
    console.log(clockTime)

    if(clockTime <= 0){
        stopClock()
        beepAudio.play()
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
}


function stopClock(){
    clearInterval(setIntervalId)
    setIntervalId = null
}


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
})

curtoBt.addEventListener('click', () => {
    switchContexto("descanso-curto")
    curtoBt.classList.add("active")
})

longoBt.addEventListener('click', () => {
    switchContexto("descanso-longo")
    longoBt.classList.add("active")
})

startBt.addEventListener("click", ()=>{
    startAndPauseClock()
})