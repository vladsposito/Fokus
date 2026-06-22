const html = document.querySelector('html')
const focoBt = document.querySelector(".app__card-button--foco")
const curtoBt = document.querySelector(".app__card-button--curto")
const longoBt = document.querySelector(".app__card-button--longo")
const startBt = document.querySelector(".app__card-primary-button")

const bannerImg = document.querySelector(".app__image")

const focoTime = 1500
const curtoTime = 300
const longoTime = 900


focoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', "foco")
    curtoBt.classList.remove("active")
    focoBt.classList.add("active")
    longoBt.classList.remove("active")
    bannerImg.setAttribute("src", "/imagens/foco.png")
})

curtoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
    curtoBt.classList.add("active")
    focoBt.classList.remove("active")
    longoBt.classList.remove("active")
    bannerImg.setAttribute("src", "/imagens/descanso-curto.png")
})

longoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
    curtoBt.classList.remove("active")
    focoBt.classList.remove("active")
    longoBt.classList.add("active")
    bannerImg.setAttribute("src", "/imagens/descanso-longo.png")
})