let whiteButton = document.getElementById('white')
let blackButton = document.getElementById('black')
let oliveButton = document.getElementById('olive')
let purpleButton = document.getElementById('purple')


let containerDiv = document.getElementById('container')
let img = document.getElementById('img')
let materialicons = document.getElementById('material-icons')
let icons = document.getElementById('icons')
let icons1 = document.getElementById('icons1')
let icons2 = document.getElementById('icons2')


whiteButton.addEventListener('click',()=>{
    document.body.classList.toggle('white')
    localStorage.setItem('theme','white')
})
blackButton.addEventListener('click',()=>{
    document.body.classList.toggle('black')
    localStorage.setItem('theme','black')

    containerDiv.className = 'one'
    img.className = 'two'
    icons.style.color = 'white'
    icons1.style.color = 'white'
    icons2.style.color = 'white'
    materialicons.style.color = 'white'
})
oliveButton.addEventListener('click',()=>{
    document.body.classList.toggle('olive')
    localStorage.setItem('theme','olive')

    containerDiv.style.boxShadow = '0px 0px 10px black'
    icons.style.color= 'black'
    icons1.style.color = 'black'
    icons2.style.color = 'black'
    materialicons.style.color = 'black'
})
purpleButton.addEventListener('click',()=>{
    document.body.classList.toggle('purple')
    localStorage.setItem('theme','purple')

    containerDiv.style.boxShadow = '0px 0px 10px black'
    icons.style.color= 'black'
    icons1.style.color = 'black'
    icons2.style.color = 'black'
    materialicons.style.color = 'black'
})



window.addEventListener('DOMContentLoaded',()=>{
    let savedTheme = localStorage.getItem('theme')

    if(savedTheme){
        document.body.classList.remove('white','black','olive','purple')

        document.body.classList.add(savedTheme)

        if (savedTheme === 'black') {
            containerDiv.className = 'one'
            img.className = 'two'
            icons.style.color = 'white'
            icons1.style.color = 'white'
            icons2.style.color = 'white'
            materialicons.style.color = 'white'
        }

        if (savedTheme === 'olive' || savedTheme === 'purple') {
            containerDiv.style.boxShadow = '0px 0px 10px black'
            icons.style.color = 'black'
            icons1.style.color = 'black'
            icons2.style.color = 'black'
            materialicons.style.color = 'black'
        }
    }

})