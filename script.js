const html = document.querySelector('html')
const focoBt = document.querySelector(".app__card-button--foco")
const curtoBt = document.querySelector(".app__card-button--curto")
const longoBt = document.querySelector(".app__card-button--longo")
const startBt = document.querySelector(".app__card-primary-button")

const bannerImg = document.querySelector(".app__image")
const bannerTitle = document.querySelector(".app__title")

const focoTime = 1500
const curtoTime = 300
const longoTime = 900

function switchContexto(contexto){
    html.setAttribute('data-contexto', contexto)
    bannerImg.setAttribute("src", `/imagens/${contexto}.png`)
    switch (contexto){
        case "foco":
            curtoBt.classList.remove("active")
            focoBt.classList.add("active")
            longoBt.classList.remove("active")
            bannerTitle.innerHTML = `Otimize sua produtividade,<br />
             <strong class="app__title-strong">mergulhe no que importa.</strong>`
             break
        case "descanso-curto":
            curtoBt.classList.add("active")
            focoBt.classList.remove("active")
            longoBt.classList.remove("active")
            bannerTitle.innerHTML = `Que tal dar uma respirada?<br />
            <strong class="app__title-strong">Faça uma pausa curta!</strong>`
            break
        case "descanso-longo":
            curtoBt.classList.remove("active")
            focoBt.classList.remove("active")   
            longoBt.classList.add("active")
            bannerTitle.innerHTML = `Hora de voltar à superfície.<br />
            <strong class="app__title-strong">Faça uma pausa longa.</strong>`

    }
}


focoBt.addEventListener('click', () => {
    switchContexto("foco")
})

curtoBt.addEventListener('click', () => {
    switchContexto("descanso-curto")
})

longoBt.addEventListener('click', () => {
    switchContexto("descanso-longo")
})