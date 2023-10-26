const modeWrapper = document.querySelector('.mode-img-wrapper')
const mode = document.querySelector('.mode')
const git = document.querySelectorAll('.git')
const fig = document.querySelectorAll('.fig')
const img = document.querySelectorAll('.hovered')

const wrapper = document.querySelector('.wrapper')

const cvLink = document.querySelector('.cvLink')

let darkmode = false

modeWrapper.addEventListener('click', () => {
      
      document.body.classList.toggle('darkmode')

    if (document.body.classList.toggle('active')) {

        git.forEach(gitimg => {
            gitimg.src = "./images/git-img-dark.png"
        })

        mode.src = "./images/modeDark.png"

        fig.forEach(figimg => {
            figimg.src = "./images/fig-img-dark.png"
        })

        img.forEach(img => {
            img.style.boxShadow = "rgba(255, 255, 255, 0.10) 0px 3px 8px"
        })

    } else {

        git.forEach(gitimg => {
            gitimg.src = "./images/git-img-light.png"
        })

        mode.src = "./images/modeLight.png"

        fig.forEach(figimg => {
            figimg.src = "./images/fig-img-light.png"
        })

        img.forEach(img => {
            img.style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px"
        })

    }

    if (darkmode == false) {
        cvLink.href = '/Aaron Roberts CV Dark.pdf'
        darkmode = true
    } else if (darkmode == true) {
        cvLink.href = '/Aaron Roberts CV.pdf'
        darkmode = false
    }
      
})


const mobileCard = document.querySelector('.mobileCard')
const mobileDetailsContainer = document.querySelector('.mobileDetails-container')




mobileCard.addEventListener('click', () => {

    mobileDetailsContainer.classList.toggle('active')

    if (document.body.style.overflow == 'hidden') {
        document.body.style.overflow = 'scroll'
    } else {
        document.body.style.overflow = 'hidden'
    }

})


const mobileCard2 = document.querySelector('.mobileCard2')
const mobileDetailsContainer2 = document.querySelector('.mobileDetails-container2')




mobileCard2.addEventListener('click', () => {
    
    mobileDetailsContainer2.classList.toggle('active')

    if (document.body.style.overflow == 'hidden') {
        document.body.style.overflow = 'scroll'
    } else {
        document.body.style.overflow = 'hidden'
    }

})
