const btnOpenElement = document.querySelector('#open')
const btnCloseElement = document.querySelector('#close')
const btnYesElement = document.querySelector('#Yes')
const btnNoElement = document.querySelector('#No')
const divPaper = document.querySelector('#paperHTML')


btnCloseElement.disabled = true

btnOpenElement.addEventListener('click', ()=>{
btnOpenElement.disabled = true

    const coverElement = document.querySelector('.cover')
    coverElement.classList.add('open-cover')

    setTimeout(()=>{

        coverElement.style.zIndex = -1
        const letterElement = document.querySelector('.letter')
        const paperElement = document.querySelector('.paper')
        paperElement.classList.remove('close-paper')
        paperElement.classList.add('open-paper')
        btnCloseElement.disabled = false
        setTimeout(()=> {
            paperElement.style.zIndex = 0
        }, 1000)
    }, 1000)
    
    
})

btnCloseElement.addEventListener('click', ()=>{
    btnCloseElement.disabled = true

    const coverElement = document.querySelector('.cover')
    const paperElement = document.querySelector('.paper')
    const letterElement = document.querySelector('.letter')
    letterElement.style.zIndex = 0
    paperElement.style.zIndex = -1

    setTimeout(()=>{

        paperElement.classList.remove('open-paper')
        paperElement.classList.add('close-paper')
    
        
    
    
        setTimeout(()=>{
            coverElement.style.zIndex = 0
        coverElement.classList.remove('open-cover')
        btnOpenElement.disabled = false
        }, 1000)

    }, 500)
    
    

})

btnYesElement.addEventListener('click', ()=>{
    divPaper.textContent = "Te Amo Mi Reina 💗"
})

btnNoElement.addEventListener('click', ()=>{
    btnNoElement.style.opacity = 0
    btnNoElement.style.enabled = false
})
