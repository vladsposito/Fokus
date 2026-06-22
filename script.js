const html = document.querySelector('html')
const focoBt = document.querySelector(".app__card-button--foco")
const curtoBt = document.querySelector(".app__card-button--curto")
const longoBt = document.querySelector(".app__card-button--longo")
const startBt = document.querySelector(".app__card-primary-button")

const bannerImg = document.querySelector(".app__image")

const focoTime = 1500
const curtoTime = 300
const longoTime = 900

function switchContexto(contexto){
    html.setAttribute('data-contexto', contexto)
    bannerImg.setAttribute("src", `/imagens/${contexto}.png`)
}

focoBt.addEventListener('click', () => {
    switchContexto("foco")
    curtoBt.classList.remove("active")
    focoBt.classList.add("active")
    longoBt.classList.remove("active")
})

curtoBt.addEventListener('click', () => {
    switchContexto("descanso-curto")
    curtoBt.classList.add("active")
    focoBt.classList.remove("active")
    longoBt.classList.remove("active")
})

longoBt.addEventListener('click', () => {
    switchContexto("descanso-longo")
    curtoBt.classList.remove("active")
    focoBt.classList.remove("active")
    longoBt.classList.add("active")
})